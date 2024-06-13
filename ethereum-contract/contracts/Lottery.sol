// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

import {UUPSUpgradeable} from '@openzeppelin/contracts-upgradeable/proxy/utils/UUPSUpgradeable.sol';
import {PayableUUPSUpgradeable} from './PayableUUPSUpgradable.sol';
import {LotteryState} from './LotteryState.sol';

import 'hardhat/console.sol'; //TODO: remove

// TODO: Power play
// TODO: Allow buy ticket for multiple draw
contract Lottery is LotteryState, PayableUUPSUpgradeable {
  function _authorizeUpgrade(
    address newImplementation
  ) internal virtual override ownerOnly {}

  function initialize(
    uint128 _endTime,
    uint128 _frameDuration,
    uint128 _ticketPrice,
    uint128 _powerPlayPrice,
    address _automationOracle
  ) external virtual initializer {
    owner = msg.sender;
    endTimes[currentFrameIdx] = _endTime;
    frameDuration = _frameDuration;
    ticketPrice = _ticketPrice;
    powerPlayPrice = _powerPlayPrice;
    isPaused = false;
    automationOracle = _automationOracle;
  }

  // main func
  function buyTicket(
    uint256 _amount,
    bool _isPowerPlay,
    uint24[6] memory _ticketNumber
  ) external payable virtual userOnly {
    require(
      _amount <= MAX_TICKET_AMOUNT_EACH_BUY,
      '_amount <= maxTicketAmountEachBuy'
    );
    require(validateTicketNumber(_ticketNumber), 'Invalid ticket number');

    uint256 eachTicketCost = ticketPrice;
    if (_isPowerPlay) eachTicketCost += powerPlayPrice;
    uint256 totalCost = eachTicketCost * _amount;

    require(totalCost == msg.value, 'totalCost == msg.value');

    uint256 frameIdxNow = getFrameIdxNow();
    for (uint256 i = 0; i < _amount; i = uncheckedIncrByOne(i)) {
      tickets[frameIdxNow].push(
        Ticket({
          isPowerPlay: _isPowerPlay,
          owner: msg.sender,
          luckyNumber: _ticketNumber
        })
      );
    }
  }

  // Not use sealed seed because it needs automation oracle that allow use to pass parameter (seed in this case)
  // function prepareDrawing(bytes32 _sealedSeed) public ownerOnly {
  function prepareDrawing() public virtual ownerOnly automationOracleOnly {
    uint256 lastEndTime = endTimes[currentFrameIdx];
    require(block.timestamp >= lastEndTime, 'Frame not ended');

    if (isPausedAndShouldNotDraw(lastEndTime)) {
      return;
    }

    blockNumber = uint128(block.number + 1);
  }

  function drawing() public virtual ownerOnly automationOracleOnly {
    if (isPausedAndShouldNotDraw(endTimes[currentFrameIdx])) {
      return;
    }
    require(blockNumber > 0, 'blockNumber > 0');

    uint256 frameIdxNow = currentFrameIdx;
    uint24[6] memory luckyNumber = getLuckyNumber(blockNumber, frameIdxNow);

    // record winning history
    Ticket[] memory allTickets = tickets[frameIdxNow];
    uint256 allTicketLength = allTickets.length;
    for (uint72 i = 0; i < allTicketLength; i = uint72(uncheckedIncrByOne(i))) {
      uint24[6] memory ticketLuckyNumber = allTickets[i].luckyNumber;
      uint72 prize = uint72(calculatePrize(luckyNumber, ticketLuckyNumber));
      if (prize != LOTTERY_PRIZES_NOT_LUCKY) {
        Winning memory winning = Winning({prize: prize, ticketIdx: i});
        winningHistories[frameIdxNow].push(winning);
      }
    }

    // clear data and set next frame
    luckyNumbers[frameIdxNow] = luckyNumber;
    blockNumber = 0;

    if (!isPaused) {
      endTimes[currentFrameIdx + 1] = endTimes[currentFrameIdx] + frameDuration;
      currentFrameIdx += 1;
    }
  }

  function payForWinners(uint256 frameIdx) public payable virtual ownerOnly {
    require(!isPaidForWinners[frameIdx], '!isPaidForWinners[frameIdx]');

    Winning[] memory winnings = winningHistories[frameIdx];
    uint256 winningsLength = winnings.length;
    for (uint256 i = 0; i < winningsLength; i++) {
      if (winnings[i].prize == LOTTERY_PRIZES_NOT_LUCKY) continue;

      Ticket memory ticket = tickets[frameIdx][winnings[i].ticketIdx];

      payable(ticket.owner).transfer(mapPrizeToReward(winnings[i].prize));
    }

    isPaidForWinners[frameIdx] = true;
  }

  function pause() public virtual ownerOnly {
    require(!isPaused, 'Lottery is already paused');

    isPaused = true;
  }

  function restart() public virtual ownerOnly {
    require(isPaused, 'Lottery is already started');
    require(
      endTimes[currentFrameIdx] > block.timestamp,
      'You can only restart to current end time if you have paused more than 1 frame'
    );

    isPaused = false;
  }

  function restart(uint256 newEndTime) public virtual ownerOnly {
    require(isPaused, 'Lottery is already started');
    require(block.timestamp < newEndTime, 'newEndTime must greater than now');
    require(
      endTimes[currentFrameIdx] < block.timestamp,
      'You can only restart to new end time if you have paused more than 1 frame'
    );

    endTimes[++currentFrameIdx] = newEndTime;
    isPaused = false;
  }

  function setCurrentEndTime(uint256 currentEndTime) public virtual ownerOnly {
    endTimes[currentFrameIdx] = currentEndTime;
  }

  function withdraw() public virtual ownerOnly {
    payable(owner).transfer(address(this).balance);
  }
  // end main func

  // internal func
  function getFrameIdxNow() internal view virtual returns (uint256) {
    uint256 frameIdxNow = currentFrameIdx;

    // Is in currentFrame
    if (endTimes[frameIdxNow] > block.timestamp) return frameIdxNow;

    if (isPaused) revert('Lottery is paused');

    // In progress calculate lucky number and transfer money to winner
    return frameIdxNow + 1;
  }

  function uncheckedIncrByOne(
    uint256 val
  ) internal pure virtual returns (uint256) {
    unchecked {
      return val + 1;
    }
  }

  // Paused at endTime previous day, so lastEndTime does not increase
  // So we don't need to draw
  function isPausedAndShouldNotDraw(
    uint256 lastEndTime
  ) internal view returns (bool) {
    return isPaused && block.timestamp + frameDuration >= lastEndTime;
  }

  function validateTicketNumber(
    uint24[6] memory ticketNumber
  ) internal pure virtual returns (bool) {
    for (uint256 i = 0; i < 5; i++) {
      if (
        ticketNumber[i] < MIN_LUCKY_NUMBER_SLOT_VALUE ||
        ticketNumber[i] > MAX_LUCKY_NUMBER_NORMAL_SLOT_VALUE
      ) {
        return false;
      }
    }

    if (
      ticketNumber[5] < MIN_LUCKY_NUMBER_SLOT_VALUE ||
      ticketNumber[5] > MAX_LUCKY_NUMBER_LAST_SLOT_VALUE
    ) return false;

    return true;
  }

  function getLuckyNumber(
    uint256 _blockNumber,
    uint256 _currentFrameIdx
  ) internal view virtual returns (uint24[6] memory luckyNumber) {
    bytes32 finalBlockHash;

    // Can only get hash of block that greater or equal than block.number - 256

    if (_blockNumber + 256 >= block.number) {
      finalBlockHash = blockhash(_blockNumber);
    } else {
      revert('Can not get hash of more than 256 block');
    }

    uint256 normalSlotRange = MAX_LUCKY_NUMBER_NORMAL_SLOT_VALUE -
      MIN_LUCKY_NUMBER_SLOT_VALUE;

    for (uint256 i = 0; i < 5; i++) {
      luckyNumber[i] = uint24(
        (uint256(
          keccak256(
            abi.encodePacked(
              finalBlockHash,
              tickets[_currentFrameIdx].length,
              i
            )
          )
        ) % normalSlotRange) + MIN_LUCKY_NUMBER_SLOT_VALUE
      );
    }

    luckyNumber[5] = uint24(
      (uint256(
        keccak256(
          abi.encodePacked(
            finalBlockHash,
            tickets[_currentFrameIdx].length,
            uint(5)
          )
        )
      ) % (MAX_LUCKY_NUMBER_LAST_SLOT_VALUE - MIN_LUCKY_NUMBER_SLOT_VALUE)) +
        MIN_LUCKY_NUMBER_SLOT_VALUE
    );
  }

  // unsafe random number between from and to, inclusive from, exclusive to
  // function unsafeRand(
  //   uint from,
  //   uint to
  // ) internal view virtual returns (uint256) {
  //   uint range = to - from;
  //   require(range > 0, 'range > 0');
  //   return from + (uint(block.timestamp) % range);
  // }

  function calculatePrize(
    uint24[6] memory luckyNumber,
    uint24[6] memory userNumber
  ) internal pure virtual returns (uint256) {
    uint256 matchAmount;
    uint24[] memory matchedNumbers = new uint24[](5);

    // clone lucky number array
    for (uint256 i = 0; i < matchedNumbers.length; i++) {
      matchedNumbers[i] = luckyNumber[i];
    }

    for (uint256 i = 0; i < 5; i++) {
      for (uint256 j = 0; j < 5; j++) {
        if (userNumber[i] == matchedNumbers[j]) {
          matchedNumbers[j] = 0;
          ++matchAmount;
          break;
        }
      }
    }

    bool isMatchLastSlot = luckyNumber[5] == userNumber[5];

    if (isMatchLastSlot) {
      if (matchAmount < 2) {
        return LOTTERY_PRIZES_LAST_NUMBER;
      } else if (matchAmount == 2) {
        return LOTTERY_PRIZES_TWO_FIRST_NUMBER_AND_LAST_NUMBER;
      } else if (matchAmount == 3) {
        return LOTTERY_PRIZES_THREE_FIRST_NUMBER_AND_LAST_NUMBER;
      } else if (matchAmount == 4) {
        return LOTTERY_PRIZES_FOUR_FIRST_NUMBER_AND_LAST_NUMBER;
      } else if (matchAmount == 5) return LOTTERY_PRIZES_JACKPOT;
    } else {
      if (matchAmount < 3) {
        return LOTTERY_PRIZES_NOT_LUCKY;
      } else if (matchAmount == 3) {
        return LOTTERY_PRIZES_THREE_FIRST_NUMBER;
      } else if (matchAmount == 4) {
        return LOTTERY_PRIZES_FOUR_FIRST_NUMBER;
      } else if (matchAmount == 5) {
        return LOTTERY_PRIZES_FIVE_FIRST_NUMBER;
      }
    }

    revert('Can not find prize at calculatePrize');
  }

  function mapPrizeToReward(
    uint256 prize
  ) internal view virtual returns (uint) {
    if (prize == LOTTERY_PRIZES_NOT_LUCKY) return 0;
    if (prize == LOTTERY_PRIZES_LAST_NUMBER) return 4 * ticketPrice;
    if (prize == LOTTERY_PRIZES_TWO_FIRST_NUMBER_AND_LAST_NUMBER)
      return 7 * ticketPrice;
    if (prize == LOTTERY_PRIZES_THREE_FIRST_NUMBER) return 7 * ticketPrice;
    if (prize == LOTTERY_PRIZES_THREE_FIRST_NUMBER_AND_LAST_NUMBER)
      return 100 * ticketPrice;
    if (prize == LOTTERY_PRIZES_FOUR_FIRST_NUMBER) return 100 * ticketPrice;
    if (prize == LOTTERY_PRIZES_FOUR_FIRST_NUMBER_AND_LAST_NUMBER)
      return 50000 * ticketPrice;
    if (prize == LOTTERY_PRIZES_FIVE_FIRST_NUMBER) return 1000000 * ticketPrice;

    // jack pot
    return 1 ether;
  }

  function getWinningOwner(
    uint256 frameIdx,
    Winning memory winning
  ) internal view returns (address result) {
    result = tickets[frameIdx][winning.ticketIdx].owner;
  }

  function getTicketPrize(
    uint256 frameIdx,
    uint256 ticketIdx
  ) internal view returns (uint256 prize) {
    for (uint256 i = 0; i < winningHistories[frameIdx].length; i++) {
      if (winningHistories[frameIdx][i].ticketIdx == ticketIdx)
        return winningHistories[frameIdx][i].prize;
    }

    return LOTTERY_PRIZES_NOT_LUCKY;
  }
  // end internal func

  // view func
  function getWinningHistoryByFrame(
    uint256 frameIdx
  ) external view virtual returns (Winning[] memory) {
    return winningHistories[frameIdx];
  }

  // Get money need to pay to winner of a frame
  function getPrizeOfFrame(uint256 _frameIdx) external view returns (uint256) {
    Winning[] memory winnings = winningHistories[_frameIdx];
    uint256 winningsLength = winnings.length;
    uint256 result;

    for (uint256 i = 0; i < winningsLength; i++) {
      result += mapPrizeToReward(winnings[i].prize);
    }

    return result;
  }

  function getTickets(
    //is used for testing
    uint256 frameIdx
  ) external view virtual returns (Ticket[] memory) {
    return tickets[frameIdx];
  }

  function getHomeStatistic() external view returns (HomeStatisticDto memory) {
    HomeStatisticDto memory result;
    uint256 frameIdxNow = getFrameIdxNow();

    if (frameIdxNow >= 1) {
      result.lastDraw = getDrawStatisticAtFrame(frameIdxNow - 1);
    }
    result.nextDraw = getDrawStatisticAtFrame(frameIdxNow);

    return result;
  }

  function getDrawList(
    PaginationRequestDto memory paginationDto
  ) external view returns (DrawListDto memory result) {
    require(paginationDto.page >= 1, 'Page must greater or equal 1');

    if (currentFrameIdx == 0) {
      result.totalPage = 0;
      return result;
    }

    uint256 skipAmount = (paginationDto.page - 1) * paginationDto.size;
    uint256 takeAmount = paginationDto.size;
    uint256 totalPage = ((currentFrameIdx + 1) / paginationDto.size) + 1;
    uint256 firstIdx;
    uint256 lastIdx;

    result.totalPage = totalPage;

    if (currentFrameIdx < skipAmount) {
      return result;
    }

    firstIdx = currentFrameIdx - skipAmount - 1;

    if (firstIdx < takeAmount) {
      lastIdx = 0;
    } else {
      lastIdx = firstIdx - takeAmount + 1;
    }

    result.draws = new DrawStatisticDto[](firstIdx - lastIdx + 1);
    uint256 drawIdx;

    for (int256 i = int256(firstIdx); i >= int256(lastIdx); i--) {
      DrawStatisticDto memory drawStatistic = getDrawStatisticAtFrame(uint(i));
      result.draws[drawIdx++] = drawStatistic;
    }

    return result;
  }

  function getDrawStatisticAtFrame(
    uint256 frameIdx
  ) internal view returns (DrawStatisticDto memory result) {
    result.isExist = true;

    if (frameIdx >= currentFrameIdx) {
      result.frameIdx = frameIdx;
      result.endTime =
        endTimes[currentFrameIdx] +
        ((frameIdx - currentFrameIdx) * frameDuration);
      result.isFuture = true;
      return result;
    }

    result.frameIdx = frameIdx;
    result.endTime = endTimes[frameIdx];
    result.luckyNumber = luckyNumbers[frameIdx];

    uint256 totalJackpotWinner;
    uint256 totalMatchFiveWinner;
    for (uint256 i = 0; i < winningHistories[frameIdx].length; i++) {
      for (uint256 j = 0; j < winningHistories[i].length; j++) {
        if (winningHistories[i][j].prize == LOTTERY_PRIZES_JACKPOT) {
          totalJackpotWinner += 1;
        }
        if (winningHistories[i][j].prize == LOTTERY_PRIZES_FIVE_FIRST_NUMBER) {
          totalMatchFiveWinner += 1;
        }
      }
    }

    result.jackpotWinners = new address[](totalJackpotWinner);
    result.matchFiveWinners = new address[](totalMatchFiveWinner);
    uint256 idxJackpotWinner;
    uint256 idxMatchFiveWinner;
    for (uint256 i = 0; i < winningHistories[frameIdx].length; i++) {
      for (uint256 j = 0; j < winningHistories[i].length; j++) {
        if (winningHistories[i][j].prize == LOTTERY_PRIZES_JACKPOT) {
          uint256 ticketIdx = winningHistories[i][j].ticketIdx;
          address winner = tickets[frameIdx][ticketIdx].owner;
          result.jackpotWinners[idxJackpotWinner++] = winner;
        }
        if (winningHistories[i][j].prize == LOTTERY_PRIZES_FIVE_FIRST_NUMBER) {
          uint256 ticketIdx = winningHistories[i][j].ticketIdx;
          address winner = tickets[frameIdx][ticketIdx].owner;
          result.matchFiveWinners[idxMatchFiveWinner++] = winner;
        }
      }
    }
  }

  function getDrawDetail(
    uint256 frameIdx
  ) external view returns (DrawDetailDto memory result) {
    require(frameIdx < currentFrameIdx, 'Draw is not happened');

    result.endTime = endTimes[frameIdx];
    result.luckyNumber = luckyNumbers[frameIdx];

    result.jackpot.money = mapPrizeToReward(LOTTERY_PRIZES_JACKPOT);
    result.matchFive.money = mapPrizeToReward(LOTTERY_PRIZES_FIVE_FIRST_NUMBER);
    result.matchFourAndLast.money = mapPrizeToReward(
      LOTTERY_PRIZES_FOUR_FIRST_NUMBER_AND_LAST_NUMBER
    );
    result.matchFour.money = mapPrizeToReward(LOTTERY_PRIZES_FOUR_FIRST_NUMBER);
    result.matchThreeAndLast.money = mapPrizeToReward(
      LOTTERY_PRIZES_THREE_FIRST_NUMBER_AND_LAST_NUMBER
    );
    result.matchThree.money = mapPrizeToReward(
      LOTTERY_PRIZES_THREE_FIRST_NUMBER
    );
    result.matchTwoAndLast.money = mapPrizeToReward(
      LOTTERY_PRIZES_TWO_FIRST_NUMBER_AND_LAST_NUMBER
    );
    result.matchLast.money = mapPrizeToReward(LOTTERY_PRIZES_LAST_NUMBER);

    uint256 jackpotWinningAmount;
    uint256 matchFiveWinningAmount;
    uint256 matchFourAndLastWinningAmount;
    uint256 matchFourWinningAmount;
    uint256 matchThreeAndLastWinningAmount;
    uint256 matchThreeWinningAmount;
    uint256 matchTwoAndLastWinningAmount;
    uint256 matchLastWinningAmount;
    uint256 winningHistoriesLength = winningHistories[frameIdx].length;

    for (uint256 i = 0; i < winningHistoriesLength; i++) {
      uint256 prize = winningHistories[frameIdx][i].prize;
      if (prize == LOTTERY_PRIZES_JACKPOT) jackpotWinningAmount++;
      if (prize == LOTTERY_PRIZES_FIVE_FIRST_NUMBER) matchFiveWinningAmount++;
      if (prize == LOTTERY_PRIZES_FOUR_FIRST_NUMBER_AND_LAST_NUMBER)
        matchFourAndLastWinningAmount++;
      if (prize == LOTTERY_PRIZES_FOUR_FIRST_NUMBER) matchFourWinningAmount++;
      if (prize == LOTTERY_PRIZES_THREE_FIRST_NUMBER_AND_LAST_NUMBER)
        matchThreeAndLastWinningAmount++;
      if (prize == LOTTERY_PRIZES_THREE_FIRST_NUMBER) matchThreeWinningAmount++;
      if (prize == LOTTERY_PRIZES_TWO_FIRST_NUMBER_AND_LAST_NUMBER)
        matchTwoAndLastWinningAmount++;
      if (prize == LOTTERY_PRIZES_LAST_NUMBER) matchLastWinningAmount++;
    }

    result.jackpot.winners = new address[](jackpotWinningAmount);
    result.matchFive.winners = new address[](matchFiveWinningAmount);
    result.matchFourAndLast.winners = new address[](
      matchFourAndLastWinningAmount
    );
    result.matchFour.winners = new address[](matchFourWinningAmount);
    result.matchThreeAndLast.winners = new address[](
      matchThreeAndLastWinningAmount
    );
    result.matchThree.winners = new address[](matchThreeWinningAmount);
    result.matchTwoAndLast.winners = new address[](
      matchTwoAndLastWinningAmount
    );
    result.matchLast.winners = new address[](matchLastWinningAmount);

    uint256 jackpotWinnerIdx;
    uint256 matchFiveWinnerIdx;
    uint256 matchFourAndLastWinnerIdx;
    uint256 matchFourWinnerIdx;
    uint256 matchThreeAndLastWinnerIdx;
    uint256 matchThreeWinnerIdx;
    uint256 matchTwoAndLastWinnerIdx;
    uint256 matchLastWinnerIdx;
    for (uint256 i = 0; i < winningHistoriesLength; i++) {
      Winning memory winning = winningHistories[frameIdx][i];

      if (winning.prize == LOTTERY_PRIZES_JACKPOT) {
        result.jackpot.winners[jackpotWinnerIdx++] = getWinningOwner(
          frameIdx,
          winning
        );
      }

      if (winning.prize == LOTTERY_PRIZES_FIVE_FIRST_NUMBER) {
        result.matchFive.winners[matchFiveWinnerIdx++] = getWinningOwner(
          frameIdx,
          winning
        );
      }
      if (winning.prize == LOTTERY_PRIZES_FOUR_FIRST_NUMBER_AND_LAST_NUMBER) {
        result.matchFourAndLast.winners[
          matchFourAndLastWinnerIdx++
        ] = getWinningOwner(frameIdx, winning);
      }

      if (winning.prize == LOTTERY_PRIZES_FOUR_FIRST_NUMBER) {
        result.matchFour.winners[matchFourWinnerIdx++] = getWinningOwner(
          frameIdx,
          winning
        );
      }

      if (winning.prize == LOTTERY_PRIZES_THREE_FIRST_NUMBER_AND_LAST_NUMBER) {
        result.matchThreeAndLast.winners[
          matchThreeAndLastWinnerIdx++
        ] = getWinningOwner(frameIdx, winning);
      }
      if (winning.prize == LOTTERY_PRIZES_THREE_FIRST_NUMBER) {
        result.matchThree.winners[matchThreeWinnerIdx++] = getWinningOwner(
          frameIdx,
          winning
        );
      }

      if (winning.prize == LOTTERY_PRIZES_TWO_FIRST_NUMBER_AND_LAST_NUMBER) {
        result.matchTwoAndLast.winners[
          matchTwoAndLastWinnerIdx++
        ] = getWinningOwner(frameIdx, winning);
      }
      if (winning.prize == LOTTERY_PRIZES_LAST_NUMBER) {
        result.matchLast.winners[matchLastWinnerIdx++] = getWinningOwner(
          frameIdx,
          winning
        );
      }
    }
  }

  function getMyTicketList() external view returns (TicketDto[] memory) {
    uint256 totalTicket;
    for (uint256 i = 0; i <= currentFrameIdx; i++) {
      for (uint256 j = 0; j < tickets[i].length; j++) {
        if (tickets[i][j].owner == msg.sender) totalTicket++;
      }
    }

    TicketDto[] memory result = new TicketDto[](totalTicket);
    uint256 resultIdx;
    for (uint256 i = 0; i <= currentFrameIdx; i++) {
      for (uint256 j = 0; j < tickets[i].length; j++) {
        if (tickets[i][j].owner != msg.sender) continue;
        result[resultIdx++] = TicketDto({
          prize: getTicketPrize(i, j),
          luckyNumber: tickets[i][j].luckyNumber,
          frameIdx: i,
          endTime: endTimes[i],
          isPowerPlay: tickets[i][j].isPowerPlay
        });
      }
    }

    return result;
  }

  function shouldPreparingDrawing() external view returns (bool) {
    console.log('block.timestamp', block.timestamp);
    console.log('endTimes[currentFrameIdx]', endTimes[currentFrameIdx]);
    if (block.timestamp >= endTimes[currentFrameIdx]) return true;
    return false;
  }

  function shouldDrawing() external view returns (bool) {
    if (blockNumber > 0) return true;
    return false;
  }
  // end view func
}
