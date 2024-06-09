// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

import {LotteryDeclaration} from './LotteryDeclaration.sol';

abstract contract LotteryState is LotteryDeclaration {
  /// 32 bit block
  // contain it in one slot
  address public owner;
  uint96 public currentFrameIdx;
  /// 32 bit block

  /// 32 bit block
  // price in wei
  uint128 public ticketPrice;
  uint128 public powerPlayPrice;
  /// 32 bit block

  /// 32 bit block
  uint128 public blockNumber;
  uint128 public frameDuration; //in second
  /// 32 bit block

  /// 32 bit block
  // bytes32 public sealedSeed;
  /// 32 bit block

  // /// 32 bit block
  bool public isPaused;
  // /// 32 bit block

  mapping(uint256 frameIdx => uint256 endTime) public endTimes;
  mapping(uint256 frameIdx => Ticket[]) public tickets;
  mapping(uint256 frameIdx => Winning[]) public winningHistories;
  mapping(uint256 frameIdx => uint24[6]) public luckyNumbers;
  mapping(uint256 frameIdx => bool isPaid) public isPaidForWinners;

  modifier ownerOnly() {
    require(msg.sender == owner, 'msg.sender == owner');
    _;
  }
  modifier userOnly() {
    require(msg.sender.code.length == 0, 'msg.sender.code.length == 0');
    _;
  }
}
