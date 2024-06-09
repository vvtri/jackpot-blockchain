// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

/**
  This contract is for testing purpose only. Do not deploy this!!!!
 */

import {Lottery} from '../Lottery.sol';

import 'hardhat/console.sol';

// TODO: Implement transferOut money to owner.
// TODO: Power play
// TODO: Oracle address
contract LotteryTest is Lottery {
  function testDrawing(uint24[6] memory _luckyNumber) public virtual ownerOnly {
    require(blockNumber > 0, 'blockNumber > 0');

    // record winning history
    Ticket[] memory allTickets = tickets[currentFrameIdx];
    uint256 allTicketLength = allTickets.length;

    // console.log('allTicketLength', allTicketLength);

    for (uint72 i = 0; i < allTicketLength; i = uint72(uncheckedIncrByOne(i))) {
      uint24[6] memory ticketLuckyNumber = allTickets[i].luckyNumber;
      uint72 prize = uint72(calculatePrize(_luckyNumber, ticketLuckyNumber));
      if (prize != LOTTERY_PRIZES_NOT_LUCKY) {
        Winning memory winning = Winning({prize: prize, ticketIdx: i});
        winningHistories[currentFrameIdx].push(winning);
      }
    }

    // set and clear data
    luckyNumbers[currentFrameIdx] = _luckyNumber;
    blockNumber = 0;

    if (!isPaused) {
      endTimes[currentFrameIdx + 1] = endTimes[currentFrameIdx] + frameDuration;
      currentFrameIdx += 1;
    }
  }
}
