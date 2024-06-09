// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

import {UUPSUpgradeable} from '@openzeppelin/contracts-upgradeable/proxy/utils/UUPSUpgradeable.sol';
import {PayableUUPSUpgradeable} from './PayableUUPSUpgradable.sol';
import {LotteryState} from './LotteryState.sol';

import 'hardhat/console.sol'; //TODO: remove

// TODO: Implement transferOut money to owner.
// TODO: Power play
// TODO: Oracle address
// TODO: Allow buy ticket for multiple draw
contract Lottery is LotteryState, PayableUUPSUpgradeable {
  function _authorizeUpgrade(
    address newImplementation
  ) internal virtual override ownerOnly {}

  function initialize(
    uint128 _endTime,
    uint128 _frameDuration,
    uint128 _ticketPrice,
    uint128 _powerPlayPrice
  ) external virtual initializer {
    owner = msg.sender;
    endTimes[currentFrameIdx] = _endTime;
    frameDuration = _frameDuration;
    ticketPrice = _ticketPrice;
    powerPlayPrice = _powerPlayPrice;
    isPaused = false;
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
  function prepareDrawing() public virtual ownerOnly {
    uint256 lastEndTime = endTimes[currentFrameIdx];
    require(block.timestamp >= lastEndTime, 'Frame not ended');

    if (isPausedAndShouldNotDraw(lastEndTime)) {
      return;
    }

    blockNumber = uint128(block.number + 1);
  }

  function drawing() public virtual ownerOnly {
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

  function restart(uint256 newEndTime) public virtual ownerOnly {
    require(isPaused, 'Lottery is already started');
    require(block.timestamp < newEndTime, 'newEndTime must greater than now');

    endTimes[++currentFrameIdx] = newEndTime;
    isPaused = false;
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
        uint256(
          keccak256(
            abi.encodePacked(
              finalBlockHash,
              tickets[_currentFrameIdx].length,
              i
            )
          )
        ) % normalSlotRange
      );
    }

    luckyNumber[5] = uint24(
      uint256(
        keccak256(
          abi.encodePacked(
            finalBlockHash,
            tickets[_currentFrameIdx].length,
            uint(5)
          )
        )
      ) % (MAX_LUCKY_NUMBER_LAST_SLOT_VALUE - MIN_LUCKY_NUMBER_SLOT_VALUE)
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
    uint256 frameIdx
  ) external view virtual returns (Ticket[] memory) {
    return tickets[frameIdx];
  }

  // function getAmountSoldTicket() external view returns (uint256 soldAmount) {
  //   for (uint256 i = 0; i <= currentFrameIdx; i++) {
  //     uint256 buyTicketTurn = buyTicketTurns[i];
  //     for (uint256 j = 0; j < buyTicketTurn; j++) {
  //       soldAmount += tickets[i][j].length;
  //     }
  //   }

  //   return soldAmount;
  // }

  // function getUserTicket() external view returns (Ticket[] memory) {
  //   uint256 totalTickets;

  //   for (uint256 i = 0; i <= currentFrameIdx; i++) {
  //     uint256 buyTicketTurn = buyTicketTurns[i];
  //     for (uint256 j = 0; j < buyTicketTurn; j++) {
  //       for (uint256 k = 0; k < tickets[i][j].length; k++) {
  //         if (tickets[i][j][k].owner == msg.sender) totalTickets++;
  //       }
  //     }
  //   }

  //   Ticket[] memory result = new Ticket[](totalTickets);
  //   uint256 resultIdx;
  //   for (uint256 i = 0; i <= currentFrameIdx; i++) {
  //     uint256 buyTicketTurn = buyTicketTurns[i];
  //     for (uint256 j = 0; j < buyTicketTurn; j++) {
  //       for (uint256 k = 0; k < tickets[i][j].length; k++) {
  //         if (tickets[i][j][k].owner == msg.sender)
  //           result[resultIdx++] = tickets[i][j][k];
  //       }
  //     }
  //   }

  //   return result;
  // }
  // end view func
}