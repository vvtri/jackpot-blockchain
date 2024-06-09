// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

import 'hardhat/console.sol';

contract BuyLotteryTicketTest {
  receive() external payable {}

  function buyLottery(
    address payable lottery,
    uint256 ticketAmount,
    bool isPowerPlay,
    uint24[] memory ticketNumber
  ) public payable {
    (bool success, bytes memory returndata) = lottery.call{value: msg.value}(
      abi.encodeWithSignature(
        'buyTicket(uint256,bool,uint24[6])',
        ticketAmount,
        isPowerPlay,
        ticketNumber
      )
    );

    console.log('buyLottery returndata', string(returndata));

    require(success, 'Can not buy lottery ticket');
  }
}
