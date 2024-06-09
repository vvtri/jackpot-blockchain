// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

abstract contract LotteryDeclaration {
  // struct Frame {
  //   uint128 endTime;
  // }
  // struct LuckyNumber {
  //   uint24 slot1;
  //   uint24 slot2;
  //   uint24 slot3;
  //   uint24 slot4;
  //   uint24 slot5;
  //   uint24 slot6;
  // }
  struct Ticket {
    address owner;
    bool isPowerPlay;
    // LuckyNumber luckyNumber;
    uint24[6] luckyNumber;
  }
  struct Winning {
    uint72 prize;
    uint72 ticketIdx;
  }

  uint256 public constant MAX_TICKET_AMOUNT_EACH_BUY = 10;
  uint256 public constant MIN_LUCKY_NUMBER_SLOT_VALUE = 1;
  uint256 public constant MAX_LUCKY_NUMBER_NORMAL_SLOT_VALUE = 69;
  uint256 public constant MAX_LUCKY_NUMBER_LAST_SLOT_VALUE = 26;
  // We not use enum because it is un-upgradable
  // enum LotteryPrizes {
  //   JACKPOT,
  //   FIVE_FIRST_NUMBER,
  //   FOUR_FIRST_NUMBER_AND_LAST_NUMBER,
  //   FOUR_FIRST_NUMBER,
  //   THREE_FIRST_NUMBER_AND_LAST_NUMBER,
  //   THREE_FIRST_NUMBER,
  //   TWO_FIRST_NUMBER_AND_LAST_NUMBER,
  //   LAST_NUMBER,
  //   NOT_LUCKY
  // }
  uint256 public constant LOTTERY_PRIZES_NOT_LUCKY = 1;
  uint256 public constant LOTTERY_PRIZES_LAST_NUMBER = 2;
  uint256 public constant LOTTERY_PRIZES_TWO_FIRST_NUMBER_AND_LAST_NUMBER = 3;
  uint256 public constant LOTTERY_PRIZES_THREE_FIRST_NUMBER = 4;
  uint256 public constant LOTTERY_PRIZES_THREE_FIRST_NUMBER_AND_LAST_NUMBER = 5;
  uint256 public constant LOTTERY_PRIZES_FOUR_FIRST_NUMBER = 6;
  uint256 public constant LOTTERY_PRIZES_FOUR_FIRST_NUMBER_AND_LAST_NUMBER = 7;
  uint256 public constant LOTTERY_PRIZES_FIVE_FIRST_NUMBER = 8;
  uint256 public constant LOTTERY_PRIZES_JACKPOT = 9;
}
