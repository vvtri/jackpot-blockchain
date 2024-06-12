export declare const addressAbi: readonly [
  {
    readonly type: 'error';
    readonly inputs: readonly [
      {
        readonly name: 'target';
        readonly internalType: 'address';
        readonly type: 'address';
      },
    ];
    readonly name: 'AddressEmptyCode';
  },
  {
    readonly type: 'error';
    readonly inputs: readonly [
      {
        readonly name: 'account';
        readonly internalType: 'address';
        readonly type: 'address';
      },
    ];
    readonly name: 'AddressInsufficientBalance';
  },
  {
    readonly type: 'error';
    readonly inputs: readonly [];
    readonly name: 'FailedInnerCall';
  },
];
export declare const buyLotteryTicketTestAbi: readonly [
  {
    readonly type: 'function';
    readonly inputs: readonly [
      {
        readonly name: 'lottery';
        readonly internalType: 'address payable';
        readonly type: 'address';
      },
      {
        readonly name: 'ticketAmount';
        readonly internalType: 'uint256';
        readonly type: 'uint256';
      },
      {
        readonly name: 'isPowerPlay';
        readonly internalType: 'bool';
        readonly type: 'bool';
      },
      {
        readonly name: 'ticketNumber';
        readonly internalType: 'uint24[]';
        readonly type: 'uint24[]';
      },
    ];
    readonly name: 'buyLottery';
    readonly outputs: readonly [];
    readonly stateMutability: 'payable';
  },
  {
    readonly type: 'receive';
    readonly stateMutability: 'payable';
  },
];
export declare const erc1967UtilsAbi: readonly [
  {
    readonly type: 'error';
    readonly inputs: readonly [
      {
        readonly name: 'admin';
        readonly internalType: 'address';
        readonly type: 'address';
      },
    ];
    readonly name: 'ERC1967InvalidAdmin';
  },
  {
    readonly type: 'error';
    readonly inputs: readonly [
      {
        readonly name: 'beacon';
        readonly internalType: 'address';
        readonly type: 'address';
      },
    ];
    readonly name: 'ERC1967InvalidBeacon';
  },
  {
    readonly type: 'error';
    readonly inputs: readonly [
      {
        readonly name: 'implementation';
        readonly internalType: 'address';
        readonly type: 'address';
      },
    ];
    readonly name: 'ERC1967InvalidImplementation';
  },
  {
    readonly type: 'error';
    readonly inputs: readonly [];
    readonly name: 'ERC1967NonPayable';
  },
  {
    readonly type: 'event';
    readonly anonymous: false;
    readonly inputs: readonly [
      {
        readonly name: 'previousAdmin';
        readonly internalType: 'address';
        readonly type: 'address';
        readonly indexed: false;
      },
      {
        readonly name: 'newAdmin';
        readonly internalType: 'address';
        readonly type: 'address';
        readonly indexed: false;
      },
    ];
    readonly name: 'AdminChanged';
  },
  {
    readonly type: 'event';
    readonly anonymous: false;
    readonly inputs: readonly [
      {
        readonly name: 'beacon';
        readonly internalType: 'address';
        readonly type: 'address';
        readonly indexed: true;
      },
    ];
    readonly name: 'BeaconUpgraded';
  },
  {
    readonly type: 'event';
    readonly anonymous: false;
    readonly inputs: readonly [
      {
        readonly name: 'implementation';
        readonly internalType: 'address';
        readonly type: 'address';
        readonly indexed: true;
      },
    ];
    readonly name: 'Upgraded';
  },
];
export declare const iBeaconAbi: readonly [
  {
    readonly type: 'function';
    readonly inputs: readonly [];
    readonly name: 'implementation';
    readonly outputs: readonly [
      {
        readonly name: '';
        readonly internalType: 'address';
        readonly type: 'address';
      },
    ];
    readonly stateMutability: 'view';
  },
];
export declare const ierc1822ProxiableAbi: readonly [
  {
    readonly type: 'function';
    readonly inputs: readonly [];
    readonly name: 'proxiableUUID';
    readonly outputs: readonly [
      {
        readonly name: '';
        readonly internalType: 'bytes32';
        readonly type: 'bytes32';
      },
    ];
    readonly stateMutability: 'view';
  },
];
export declare const initializableAbi: readonly [
  {
    readonly type: 'error';
    readonly inputs: readonly [];
    readonly name: 'InvalidInitialization';
  },
  {
    readonly type: 'error';
    readonly inputs: readonly [];
    readonly name: 'NotInitializing';
  },
  {
    readonly type: 'event';
    readonly anonymous: false;
    readonly inputs: readonly [
      {
        readonly name: 'version';
        readonly internalType: 'uint64';
        readonly type: 'uint64';
        readonly indexed: false;
      },
    ];
    readonly name: 'Initialized';
  },
];
export declare const lotteryAbi: readonly [
  {
    readonly type: 'error';
    readonly inputs: readonly [
      {
        readonly name: 'target';
        readonly internalType: 'address';
        readonly type: 'address';
      },
    ];
    readonly name: 'AddressEmptyCode';
  },
  {
    readonly type: 'error';
    readonly inputs: readonly [
      {
        readonly name: 'implementation';
        readonly internalType: 'address';
        readonly type: 'address';
      },
    ];
    readonly name: 'ERC1967InvalidImplementation';
  },
  {
    readonly type: 'error';
    readonly inputs: readonly [];
    readonly name: 'ERC1967NonPayable';
  },
  {
    readonly type: 'error';
    readonly inputs: readonly [];
    readonly name: 'FailedInnerCall';
  },
  {
    readonly type: 'error';
    readonly inputs: readonly [];
    readonly name: 'InvalidInitialization';
  },
  {
    readonly type: 'error';
    readonly inputs: readonly [];
    readonly name: 'NotInitializing';
  },
  {
    readonly type: 'error';
    readonly inputs: readonly [];
    readonly name: 'UUPSUnauthorizedCallContext';
  },
  {
    readonly type: 'error';
    readonly inputs: readonly [
      {
        readonly name: 'slot';
        readonly internalType: 'bytes32';
        readonly type: 'bytes32';
      },
    ];
    readonly name: 'UUPSUnsupportedProxiableUUID';
  },
  {
    readonly type: 'event';
    readonly anonymous: false;
    readonly inputs: readonly [
      {
        readonly name: 'version';
        readonly internalType: 'uint64';
        readonly type: 'uint64';
        readonly indexed: false;
      },
    ];
    readonly name: 'Initialized';
  },
  {
    readonly type: 'event';
    readonly anonymous: false;
    readonly inputs: readonly [
      {
        readonly name: 'implementation';
        readonly internalType: 'address';
        readonly type: 'address';
        readonly indexed: true;
      },
    ];
    readonly name: 'Upgraded';
  },
  {
    readonly type: 'function';
    readonly inputs: readonly [];
    readonly name: 'LOTTERY_PRIZES_FIVE_FIRST_NUMBER';
    readonly outputs: readonly [
      {
        readonly name: '';
        readonly internalType: 'uint256';
        readonly type: 'uint256';
      },
    ];
    readonly stateMutability: 'view';
  },
  {
    readonly type: 'function';
    readonly inputs: readonly [];
    readonly name: 'LOTTERY_PRIZES_FOUR_FIRST_NUMBER';
    readonly outputs: readonly [
      {
        readonly name: '';
        readonly internalType: 'uint256';
        readonly type: 'uint256';
      },
    ];
    readonly stateMutability: 'view';
  },
  {
    readonly type: 'function';
    readonly inputs: readonly [];
    readonly name: 'LOTTERY_PRIZES_FOUR_FIRST_NUMBER_AND_LAST_NUMBER';
    readonly outputs: readonly [
      {
        readonly name: '';
        readonly internalType: 'uint256';
        readonly type: 'uint256';
      },
    ];
    readonly stateMutability: 'view';
  },
  {
    readonly type: 'function';
    readonly inputs: readonly [];
    readonly name: 'LOTTERY_PRIZES_JACKPOT';
    readonly outputs: readonly [
      {
        readonly name: '';
        readonly internalType: 'uint256';
        readonly type: 'uint256';
      },
    ];
    readonly stateMutability: 'view';
  },
  {
    readonly type: 'function';
    readonly inputs: readonly [];
    readonly name: 'LOTTERY_PRIZES_LAST_NUMBER';
    readonly outputs: readonly [
      {
        readonly name: '';
        readonly internalType: 'uint256';
        readonly type: 'uint256';
      },
    ];
    readonly stateMutability: 'view';
  },
  {
    readonly type: 'function';
    readonly inputs: readonly [];
    readonly name: 'LOTTERY_PRIZES_NOT_LUCKY';
    readonly outputs: readonly [
      {
        readonly name: '';
        readonly internalType: 'uint256';
        readonly type: 'uint256';
      },
    ];
    readonly stateMutability: 'view';
  },
  {
    readonly type: 'function';
    readonly inputs: readonly [];
    readonly name: 'LOTTERY_PRIZES_THREE_FIRST_NUMBER';
    readonly outputs: readonly [
      {
        readonly name: '';
        readonly internalType: 'uint256';
        readonly type: 'uint256';
      },
    ];
    readonly stateMutability: 'view';
  },
  {
    readonly type: 'function';
    readonly inputs: readonly [];
    readonly name: 'LOTTERY_PRIZES_THREE_FIRST_NUMBER_AND_LAST_NUMBER';
    readonly outputs: readonly [
      {
        readonly name: '';
        readonly internalType: 'uint256';
        readonly type: 'uint256';
      },
    ];
    readonly stateMutability: 'view';
  },
  {
    readonly type: 'function';
    readonly inputs: readonly [];
    readonly name: 'LOTTERY_PRIZES_TWO_FIRST_NUMBER_AND_LAST_NUMBER';
    readonly outputs: readonly [
      {
        readonly name: '';
        readonly internalType: 'uint256';
        readonly type: 'uint256';
      },
    ];
    readonly stateMutability: 'view';
  },
  {
    readonly type: 'function';
    readonly inputs: readonly [];
    readonly name: 'MAX_LUCKY_NUMBER_LAST_SLOT_VALUE';
    readonly outputs: readonly [
      {
        readonly name: '';
        readonly internalType: 'uint256';
        readonly type: 'uint256';
      },
    ];
    readonly stateMutability: 'view';
  },
  {
    readonly type: 'function';
    readonly inputs: readonly [];
    readonly name: 'MAX_LUCKY_NUMBER_NORMAL_SLOT_VALUE';
    readonly outputs: readonly [
      {
        readonly name: '';
        readonly internalType: 'uint256';
        readonly type: 'uint256';
      },
    ];
    readonly stateMutability: 'view';
  },
  {
    readonly type: 'function';
    readonly inputs: readonly [];
    readonly name: 'MAX_TICKET_AMOUNT_EACH_BUY';
    readonly outputs: readonly [
      {
        readonly name: '';
        readonly internalType: 'uint256';
        readonly type: 'uint256';
      },
    ];
    readonly stateMutability: 'view';
  },
  {
    readonly type: 'function';
    readonly inputs: readonly [];
    readonly name: 'MIN_LUCKY_NUMBER_SLOT_VALUE';
    readonly outputs: readonly [
      {
        readonly name: '';
        readonly internalType: 'uint256';
        readonly type: 'uint256';
      },
    ];
    readonly stateMutability: 'view';
  },
  {
    readonly type: 'function';
    readonly inputs: readonly [];
    readonly name: 'UPGRADE_INTERFACE_VERSION';
    readonly outputs: readonly [
      {
        readonly name: '';
        readonly internalType: 'string';
        readonly type: 'string';
      },
    ];
    readonly stateMutability: 'view';
  },
  {
    readonly type: 'function';
    readonly inputs: readonly [];
    readonly name: 'blockNumber';
    readonly outputs: readonly [
      {
        readonly name: '';
        readonly internalType: 'uint128';
        readonly type: 'uint128';
      },
    ];
    readonly stateMutability: 'view';
  },
  {
    readonly type: 'function';
    readonly inputs: readonly [
      {
        readonly name: '_amount';
        readonly internalType: 'uint256';
        readonly type: 'uint256';
      },
      {
        readonly name: '_isPowerPlay';
        readonly internalType: 'bool';
        readonly type: 'bool';
      },
      {
        readonly name: '_ticketNumber';
        readonly internalType: 'uint24[6]';
        readonly type: 'uint24[6]';
      },
    ];
    readonly name: 'buyTicket';
    readonly outputs: readonly [];
    readonly stateMutability: 'payable';
  },
  {
    readonly type: 'function';
    readonly inputs: readonly [];
    readonly name: 'currentFrameIdx';
    readonly outputs: readonly [
      {
        readonly name: '';
        readonly internalType: 'uint96';
        readonly type: 'uint96';
      },
    ];
    readonly stateMutability: 'view';
  },
  {
    readonly type: 'function';
    readonly inputs: readonly [];
    readonly name: 'drawing';
    readonly outputs: readonly [];
    readonly stateMutability: 'nonpayable';
  },
  {
    readonly type: 'function';
    readonly inputs: readonly [
      {
        readonly name: 'frameIdx';
        readonly internalType: 'uint256';
        readonly type: 'uint256';
      },
    ];
    readonly name: 'endTimes';
    readonly outputs: readonly [
      {
        readonly name: 'endTime';
        readonly internalType: 'uint256';
        readonly type: 'uint256';
      },
    ];
    readonly stateMutability: 'view';
  },
  {
    readonly type: 'function';
    readonly inputs: readonly [];
    readonly name: 'frameDuration';
    readonly outputs: readonly [
      {
        readonly name: '';
        readonly internalType: 'uint128';
        readonly type: 'uint128';
      },
    ];
    readonly stateMutability: 'view';
  },
  {
    readonly type: 'function';
    readonly inputs: readonly [
      {
        readonly name: 'frameIdx';
        readonly internalType: 'uint256';
        readonly type: 'uint256';
      },
    ];
    readonly name: 'getDrawDetail';
    readonly outputs: readonly [
      {
        readonly name: 'result';
        readonly internalType: 'struct LotteryDeclaration.DrawDetailDto';
        readonly type: 'tuple';
        readonly components: readonly [
          {
            readonly name: 'endTime';
            readonly internalType: 'uint256';
            readonly type: 'uint256';
          },
          {
            readonly name: 'luckyNumber';
            readonly internalType: 'uint24[6]';
            readonly type: 'uint24[6]';
          },
          {
            readonly name: 'jackpot';
            readonly internalType: 'struct LotteryDeclaration.DrawPrizeDetailDto';
            readonly type: 'tuple';
            readonly components: readonly [
              {
                readonly name: 'money';
                readonly internalType: 'uint256';
                readonly type: 'uint256';
              },
              {
                readonly name: 'winners';
                readonly internalType: 'address[]';
                readonly type: 'address[]';
              },
            ];
          },
          {
            readonly name: 'matchFive';
            readonly internalType: 'struct LotteryDeclaration.DrawPrizeDetailDto';
            readonly type: 'tuple';
            readonly components: readonly [
              {
                readonly name: 'money';
                readonly internalType: 'uint256';
                readonly type: 'uint256';
              },
              {
                readonly name: 'winners';
                readonly internalType: 'address[]';
                readonly type: 'address[]';
              },
            ];
          },
          {
            readonly name: 'matchFourAndLast';
            readonly internalType: 'struct LotteryDeclaration.DrawPrizeDetailDto';
            readonly type: 'tuple';
            readonly components: readonly [
              {
                readonly name: 'money';
                readonly internalType: 'uint256';
                readonly type: 'uint256';
              },
              {
                readonly name: 'winners';
                readonly internalType: 'address[]';
                readonly type: 'address[]';
              },
            ];
          },
          {
            readonly name: 'matchFour';
            readonly internalType: 'struct LotteryDeclaration.DrawPrizeDetailDto';
            readonly type: 'tuple';
            readonly components: readonly [
              {
                readonly name: 'money';
                readonly internalType: 'uint256';
                readonly type: 'uint256';
              },
              {
                readonly name: 'winners';
                readonly internalType: 'address[]';
                readonly type: 'address[]';
              },
            ];
          },
          {
            readonly name: 'matchThreeAndLast';
            readonly internalType: 'struct LotteryDeclaration.DrawPrizeDetailDto';
            readonly type: 'tuple';
            readonly components: readonly [
              {
                readonly name: 'money';
                readonly internalType: 'uint256';
                readonly type: 'uint256';
              },
              {
                readonly name: 'winners';
                readonly internalType: 'address[]';
                readonly type: 'address[]';
              },
            ];
          },
          {
            readonly name: 'matchThree';
            readonly internalType: 'struct LotteryDeclaration.DrawPrizeDetailDto';
            readonly type: 'tuple';
            readonly components: readonly [
              {
                readonly name: 'money';
                readonly internalType: 'uint256';
                readonly type: 'uint256';
              },
              {
                readonly name: 'winners';
                readonly internalType: 'address[]';
                readonly type: 'address[]';
              },
            ];
          },
          {
            readonly name: 'matchTwoAndLast';
            readonly internalType: 'struct LotteryDeclaration.DrawPrizeDetailDto';
            readonly type: 'tuple';
            readonly components: readonly [
              {
                readonly name: 'money';
                readonly internalType: 'uint256';
                readonly type: 'uint256';
              },
              {
                readonly name: 'winners';
                readonly internalType: 'address[]';
                readonly type: 'address[]';
              },
            ];
          },
          {
            readonly name: 'matchLast';
            readonly internalType: 'struct LotteryDeclaration.DrawPrizeDetailDto';
            readonly type: 'tuple';
            readonly components: readonly [
              {
                readonly name: 'money';
                readonly internalType: 'uint256';
                readonly type: 'uint256';
              },
              {
                readonly name: 'winners';
                readonly internalType: 'address[]';
                readonly type: 'address[]';
              },
            ];
          },
        ];
      },
    ];
    readonly stateMutability: 'view';
  },
  {
    readonly type: 'function';
    readonly inputs: readonly [
      {
        readonly name: 'paginationDto';
        readonly internalType: 'struct LotteryDeclaration.PaginationRequestDto';
        readonly type: 'tuple';
        readonly components: readonly [
          {
            readonly name: 'page';
            readonly internalType: 'uint256';
            readonly type: 'uint256';
          },
          {
            readonly name: 'size';
            readonly internalType: 'uint256';
            readonly type: 'uint256';
          },
        ];
      },
    ];
    readonly name: 'getDrawList';
    readonly outputs: readonly [
      {
        readonly name: 'result';
        readonly internalType: 'struct LotteryDeclaration.DrawListDto';
        readonly type: 'tuple';
        readonly components: readonly [
          {
            readonly name: 'draws';
            readonly internalType: 'struct LotteryDeclaration.DrawStatisticDto[]';
            readonly type: 'tuple[]';
            readonly components: readonly [
              {
                readonly name: 'endTime';
                readonly internalType: 'uint256';
                readonly type: 'uint256';
              },
              {
                readonly name: 'frameIdx';
                readonly internalType: 'uint256';
                readonly type: 'uint256';
              },
              {
                readonly name: 'isExist';
                readonly internalType: 'bool';
                readonly type: 'bool';
              },
              {
                readonly name: 'isFuture';
                readonly internalType: 'bool';
                readonly type: 'bool';
              },
              {
                readonly name: 'luckyNumber';
                readonly internalType: 'uint24[6]';
                readonly type: 'uint24[6]';
              },
              {
                readonly name: 'jackpotWinners';
                readonly internalType: 'address[]';
                readonly type: 'address[]';
              },
              {
                readonly name: 'matchFiveWinners';
                readonly internalType: 'address[]';
                readonly type: 'address[]';
              },
            ];
          },
          {
            readonly name: 'totalPage';
            readonly internalType: 'uint256';
            readonly type: 'uint256';
          },
        ];
      },
    ];
    readonly stateMutability: 'view';
  },
  {
    readonly type: 'function';
    readonly inputs: readonly [];
    readonly name: 'getHomeStatistic';
    readonly outputs: readonly [
      {
        readonly name: '';
        readonly internalType: 'struct LotteryDeclaration.HomeStatisticDto';
        readonly type: 'tuple';
        readonly components: readonly [
          {
            readonly name: 'nextDraw';
            readonly internalType: 'struct LotteryDeclaration.DrawStatisticDto';
            readonly type: 'tuple';
            readonly components: readonly [
              {
                readonly name: 'endTime';
                readonly internalType: 'uint256';
                readonly type: 'uint256';
              },
              {
                readonly name: 'frameIdx';
                readonly internalType: 'uint256';
                readonly type: 'uint256';
              },
              {
                readonly name: 'isExist';
                readonly internalType: 'bool';
                readonly type: 'bool';
              },
              {
                readonly name: 'isFuture';
                readonly internalType: 'bool';
                readonly type: 'bool';
              },
              {
                readonly name: 'luckyNumber';
                readonly internalType: 'uint24[6]';
                readonly type: 'uint24[6]';
              },
              {
                readonly name: 'jackpotWinners';
                readonly internalType: 'address[]';
                readonly type: 'address[]';
              },
              {
                readonly name: 'matchFiveWinners';
                readonly internalType: 'address[]';
                readonly type: 'address[]';
              },
            ];
          },
          {
            readonly name: 'lastDraw';
            readonly internalType: 'struct LotteryDeclaration.DrawStatisticDto';
            readonly type: 'tuple';
            readonly components: readonly [
              {
                readonly name: 'endTime';
                readonly internalType: 'uint256';
                readonly type: 'uint256';
              },
              {
                readonly name: 'frameIdx';
                readonly internalType: 'uint256';
                readonly type: 'uint256';
              },
              {
                readonly name: 'isExist';
                readonly internalType: 'bool';
                readonly type: 'bool';
              },
              {
                readonly name: 'isFuture';
                readonly internalType: 'bool';
                readonly type: 'bool';
              },
              {
                readonly name: 'luckyNumber';
                readonly internalType: 'uint24[6]';
                readonly type: 'uint24[6]';
              },
              {
                readonly name: 'jackpotWinners';
                readonly internalType: 'address[]';
                readonly type: 'address[]';
              },
              {
                readonly name: 'matchFiveWinners';
                readonly internalType: 'address[]';
                readonly type: 'address[]';
              },
            ];
          },
        ];
      },
    ];
    readonly stateMutability: 'view';
  },
  {
    readonly type: 'function';
    readonly inputs: readonly [];
    readonly name: 'getMyTicketList';
    readonly outputs: readonly [
      {
        readonly name: '';
        readonly internalType: 'struct LotteryDeclaration.TicketDto[]';
        readonly type: 'tuple[]';
        readonly components: readonly [
          {
            readonly name: 'luckyNumber';
            readonly internalType: 'uint24[6]';
            readonly type: 'uint24[6]';
          },
          {
            readonly name: 'isPowerPlay';
            readonly internalType: 'bool';
            readonly type: 'bool';
          },
          {
            readonly name: 'frameIdx';
            readonly internalType: 'uint256';
            readonly type: 'uint256';
          },
          {
            readonly name: 'endTime';
            readonly internalType: 'uint256';
            readonly type: 'uint256';
          },
          {
            readonly name: 'prize';
            readonly internalType: 'uint256';
            readonly type: 'uint256';
          },
        ];
      },
    ];
    readonly stateMutability: 'view';
  },
  {
    readonly type: 'function';
    readonly inputs: readonly [
      {
        readonly name: '_frameIdx';
        readonly internalType: 'uint256';
        readonly type: 'uint256';
      },
    ];
    readonly name: 'getPrizeOfFrame';
    readonly outputs: readonly [
      {
        readonly name: '';
        readonly internalType: 'uint256';
        readonly type: 'uint256';
      },
    ];
    readonly stateMutability: 'view';
  },
  {
    readonly type: 'function';
    readonly inputs: readonly [
      {
        readonly name: 'frameIdx';
        readonly internalType: 'uint256';
        readonly type: 'uint256';
      },
    ];
    readonly name: 'getTickets';
    readonly outputs: readonly [
      {
        readonly name: '';
        readonly internalType: 'struct LotteryDeclaration.Ticket[]';
        readonly type: 'tuple[]';
        readonly components: readonly [
          {
            readonly name: 'owner';
            readonly internalType: 'address';
            readonly type: 'address';
          },
          {
            readonly name: 'isPowerPlay';
            readonly internalType: 'bool';
            readonly type: 'bool';
          },
          {
            readonly name: 'luckyNumber';
            readonly internalType: 'uint24[6]';
            readonly type: 'uint24[6]';
          },
        ];
      },
    ];
    readonly stateMutability: 'view';
  },
  {
    readonly type: 'function';
    readonly inputs: readonly [
      {
        readonly name: 'frameIdx';
        readonly internalType: 'uint256';
        readonly type: 'uint256';
      },
    ];
    readonly name: 'getWinningHistoryByFrame';
    readonly outputs: readonly [
      {
        readonly name: '';
        readonly internalType: 'struct LotteryDeclaration.Winning[]';
        readonly type: 'tuple[]';
        readonly components: readonly [
          {
            readonly name: 'prize';
            readonly internalType: 'uint72';
            readonly type: 'uint72';
          },
          {
            readonly name: 'ticketIdx';
            readonly internalType: 'uint72';
            readonly type: 'uint72';
          },
        ];
      },
    ];
    readonly stateMutability: 'view';
  },
  {
    readonly type: 'function';
    readonly inputs: readonly [
      {
        readonly name: '_endTime';
        readonly internalType: 'uint128';
        readonly type: 'uint128';
      },
      {
        readonly name: '_frameDuration';
        readonly internalType: 'uint128';
        readonly type: 'uint128';
      },
      {
        readonly name: '_ticketPrice';
        readonly internalType: 'uint128';
        readonly type: 'uint128';
      },
      {
        readonly name: '_powerPlayPrice';
        readonly internalType: 'uint128';
        readonly type: 'uint128';
      },
    ];
    readonly name: 'initialize';
    readonly outputs: readonly [];
    readonly stateMutability: 'nonpayable';
  },
  {
    readonly type: 'function';
    readonly inputs: readonly [
      {
        readonly name: 'frameIdx';
        readonly internalType: 'uint256';
        readonly type: 'uint256';
      },
    ];
    readonly name: 'isPaidForWinners';
    readonly outputs: readonly [
      {
        readonly name: 'isPaid';
        readonly internalType: 'bool';
        readonly type: 'bool';
      },
    ];
    readonly stateMutability: 'view';
  },
  {
    readonly type: 'function';
    readonly inputs: readonly [];
    readonly name: 'isPaused';
    readonly outputs: readonly [
      {
        readonly name: '';
        readonly internalType: 'bool';
        readonly type: 'bool';
      },
    ];
    readonly stateMutability: 'view';
  },
  {
    readonly type: 'function';
    readonly inputs: readonly [
      {
        readonly name: 'frameIdx';
        readonly internalType: 'uint256';
        readonly type: 'uint256';
      },
      {
        readonly name: '';
        readonly internalType: 'uint256';
        readonly type: 'uint256';
      },
    ];
    readonly name: 'luckyNumbers';
    readonly outputs: readonly [
      {
        readonly name: '';
        readonly internalType: 'uint24';
        readonly type: 'uint24';
      },
    ];
    readonly stateMutability: 'view';
  },
  {
    readonly type: 'function';
    readonly inputs: readonly [];
    readonly name: 'owner';
    readonly outputs: readonly [
      {
        readonly name: '';
        readonly internalType: 'address';
        readonly type: 'address';
      },
    ];
    readonly stateMutability: 'view';
  },
  {
    readonly type: 'function';
    readonly inputs: readonly [];
    readonly name: 'pause';
    readonly outputs: readonly [];
    readonly stateMutability: 'nonpayable';
  },
  {
    readonly type: 'function';
    readonly inputs: readonly [
      {
        readonly name: 'frameIdx';
        readonly internalType: 'uint256';
        readonly type: 'uint256';
      },
    ];
    readonly name: 'payForWinners';
    readonly outputs: readonly [];
    readonly stateMutability: 'payable';
  },
  {
    readonly type: 'function';
    readonly inputs: readonly [];
    readonly name: 'powerPlayPrice';
    readonly outputs: readonly [
      {
        readonly name: '';
        readonly internalType: 'uint128';
        readonly type: 'uint128';
      },
    ];
    readonly stateMutability: 'view';
  },
  {
    readonly type: 'function';
    readonly inputs: readonly [];
    readonly name: 'prepareDrawing';
    readonly outputs: readonly [];
    readonly stateMutability: 'nonpayable';
  },
  {
    readonly type: 'function';
    readonly inputs: readonly [];
    readonly name: 'proxiableUUID';
    readonly outputs: readonly [
      {
        readonly name: '';
        readonly internalType: 'bytes32';
        readonly type: 'bytes32';
      },
    ];
    readonly stateMutability: 'view';
  },
  {
    readonly type: 'function';
    readonly inputs: readonly [
      {
        readonly name: 'newEndTime';
        readonly internalType: 'uint256';
        readonly type: 'uint256';
      },
    ];
    readonly name: 'restart';
    readonly outputs: readonly [];
    readonly stateMutability: 'nonpayable';
  },
  {
    readonly type: 'function';
    readonly inputs: readonly [];
    readonly name: 'restart';
    readonly outputs: readonly [];
    readonly stateMutability: 'nonpayable';
  },
  {
    readonly type: 'function';
    readonly inputs: readonly [
      {
        readonly name: 'currentEndTime';
        readonly internalType: 'uint256';
        readonly type: 'uint256';
      },
    ];
    readonly name: 'setCurrentEndTime';
    readonly outputs: readonly [];
    readonly stateMutability: 'nonpayable';
  },
  {
    readonly type: 'function';
    readonly inputs: readonly [];
    readonly name: 'shouldDrawing';
    readonly outputs: readonly [
      {
        readonly name: '';
        readonly internalType: 'bool';
        readonly type: 'bool';
      },
    ];
    readonly stateMutability: 'view';
  },
  {
    readonly type: 'function';
    readonly inputs: readonly [];
    readonly name: 'shouldPreparingDrawing';
    readonly outputs: readonly [
      {
        readonly name: '';
        readonly internalType: 'bool';
        readonly type: 'bool';
      },
    ];
    readonly stateMutability: 'view';
  },
  {
    readonly type: 'function';
    readonly inputs: readonly [];
    readonly name: 'ticketPrice';
    readonly outputs: readonly [
      {
        readonly name: '';
        readonly internalType: 'uint128';
        readonly type: 'uint128';
      },
    ];
    readonly stateMutability: 'view';
  },
  {
    readonly type: 'function';
    readonly inputs: readonly [
      {
        readonly name: 'frameIdx';
        readonly internalType: 'uint256';
        readonly type: 'uint256';
      },
      {
        readonly name: '';
        readonly internalType: 'uint256';
        readonly type: 'uint256';
      },
    ];
    readonly name: 'tickets';
    readonly outputs: readonly [
      {
        readonly name: 'owner';
        readonly internalType: 'address';
        readonly type: 'address';
      },
      {
        readonly name: 'isPowerPlay';
        readonly internalType: 'bool';
        readonly type: 'bool';
      },
    ];
    readonly stateMutability: 'view';
  },
  {
    readonly type: 'function';
    readonly inputs: readonly [
      {
        readonly name: 'newImplementation';
        readonly internalType: 'address';
        readonly type: 'address';
      },
      {
        readonly name: 'data';
        readonly internalType: 'bytes';
        readonly type: 'bytes';
      },
    ];
    readonly name: 'upgradeToAndCall';
    readonly outputs: readonly [];
    readonly stateMutability: 'payable';
  },
  {
    readonly type: 'function';
    readonly inputs: readonly [
      {
        readonly name: 'frameIdx';
        readonly internalType: 'uint256';
        readonly type: 'uint256';
      },
      {
        readonly name: '';
        readonly internalType: 'uint256';
        readonly type: 'uint256';
      },
    ];
    readonly name: 'winningHistories';
    readonly outputs: readonly [
      {
        readonly name: 'prize';
        readonly internalType: 'uint72';
        readonly type: 'uint72';
      },
      {
        readonly name: 'ticketIdx';
        readonly internalType: 'uint72';
        readonly type: 'uint72';
      },
    ];
    readonly stateMutability: 'view';
  },
  {
    readonly type: 'receive';
    readonly stateMutability: 'payable';
  },
];
export declare const lotteryDeclarationAbi: readonly [
  {
    readonly type: 'function';
    readonly inputs: readonly [];
    readonly name: 'LOTTERY_PRIZES_FIVE_FIRST_NUMBER';
    readonly outputs: readonly [
      {
        readonly name: '';
        readonly internalType: 'uint256';
        readonly type: 'uint256';
      },
    ];
    readonly stateMutability: 'view';
  },
  {
    readonly type: 'function';
    readonly inputs: readonly [];
    readonly name: 'LOTTERY_PRIZES_FOUR_FIRST_NUMBER';
    readonly outputs: readonly [
      {
        readonly name: '';
        readonly internalType: 'uint256';
        readonly type: 'uint256';
      },
    ];
    readonly stateMutability: 'view';
  },
  {
    readonly type: 'function';
    readonly inputs: readonly [];
    readonly name: 'LOTTERY_PRIZES_FOUR_FIRST_NUMBER_AND_LAST_NUMBER';
    readonly outputs: readonly [
      {
        readonly name: '';
        readonly internalType: 'uint256';
        readonly type: 'uint256';
      },
    ];
    readonly stateMutability: 'view';
  },
  {
    readonly type: 'function';
    readonly inputs: readonly [];
    readonly name: 'LOTTERY_PRIZES_JACKPOT';
    readonly outputs: readonly [
      {
        readonly name: '';
        readonly internalType: 'uint256';
        readonly type: 'uint256';
      },
    ];
    readonly stateMutability: 'view';
  },
  {
    readonly type: 'function';
    readonly inputs: readonly [];
    readonly name: 'LOTTERY_PRIZES_LAST_NUMBER';
    readonly outputs: readonly [
      {
        readonly name: '';
        readonly internalType: 'uint256';
        readonly type: 'uint256';
      },
    ];
    readonly stateMutability: 'view';
  },
  {
    readonly type: 'function';
    readonly inputs: readonly [];
    readonly name: 'LOTTERY_PRIZES_NOT_LUCKY';
    readonly outputs: readonly [
      {
        readonly name: '';
        readonly internalType: 'uint256';
        readonly type: 'uint256';
      },
    ];
    readonly stateMutability: 'view';
  },
  {
    readonly type: 'function';
    readonly inputs: readonly [];
    readonly name: 'LOTTERY_PRIZES_THREE_FIRST_NUMBER';
    readonly outputs: readonly [
      {
        readonly name: '';
        readonly internalType: 'uint256';
        readonly type: 'uint256';
      },
    ];
    readonly stateMutability: 'view';
  },
  {
    readonly type: 'function';
    readonly inputs: readonly [];
    readonly name: 'LOTTERY_PRIZES_THREE_FIRST_NUMBER_AND_LAST_NUMBER';
    readonly outputs: readonly [
      {
        readonly name: '';
        readonly internalType: 'uint256';
        readonly type: 'uint256';
      },
    ];
    readonly stateMutability: 'view';
  },
  {
    readonly type: 'function';
    readonly inputs: readonly [];
    readonly name: 'LOTTERY_PRIZES_TWO_FIRST_NUMBER_AND_LAST_NUMBER';
    readonly outputs: readonly [
      {
        readonly name: '';
        readonly internalType: 'uint256';
        readonly type: 'uint256';
      },
    ];
    readonly stateMutability: 'view';
  },
  {
    readonly type: 'function';
    readonly inputs: readonly [];
    readonly name: 'MAX_LUCKY_NUMBER_LAST_SLOT_VALUE';
    readonly outputs: readonly [
      {
        readonly name: '';
        readonly internalType: 'uint256';
        readonly type: 'uint256';
      },
    ];
    readonly stateMutability: 'view';
  },
  {
    readonly type: 'function';
    readonly inputs: readonly [];
    readonly name: 'MAX_LUCKY_NUMBER_NORMAL_SLOT_VALUE';
    readonly outputs: readonly [
      {
        readonly name: '';
        readonly internalType: 'uint256';
        readonly type: 'uint256';
      },
    ];
    readonly stateMutability: 'view';
  },
  {
    readonly type: 'function';
    readonly inputs: readonly [];
    readonly name: 'MAX_TICKET_AMOUNT_EACH_BUY';
    readonly outputs: readonly [
      {
        readonly name: '';
        readonly internalType: 'uint256';
        readonly type: 'uint256';
      },
    ];
    readonly stateMutability: 'view';
  },
  {
    readonly type: 'function';
    readonly inputs: readonly [];
    readonly name: 'MIN_LUCKY_NUMBER_SLOT_VALUE';
    readonly outputs: readonly [
      {
        readonly name: '';
        readonly internalType: 'uint256';
        readonly type: 'uint256';
      },
    ];
    readonly stateMutability: 'view';
  },
];
export declare const lotteryStateAbi: readonly [
  {
    readonly type: 'function';
    readonly inputs: readonly [];
    readonly name: 'LOTTERY_PRIZES_FIVE_FIRST_NUMBER';
    readonly outputs: readonly [
      {
        readonly name: '';
        readonly internalType: 'uint256';
        readonly type: 'uint256';
      },
    ];
    readonly stateMutability: 'view';
  },
  {
    readonly type: 'function';
    readonly inputs: readonly [];
    readonly name: 'LOTTERY_PRIZES_FOUR_FIRST_NUMBER';
    readonly outputs: readonly [
      {
        readonly name: '';
        readonly internalType: 'uint256';
        readonly type: 'uint256';
      },
    ];
    readonly stateMutability: 'view';
  },
  {
    readonly type: 'function';
    readonly inputs: readonly [];
    readonly name: 'LOTTERY_PRIZES_FOUR_FIRST_NUMBER_AND_LAST_NUMBER';
    readonly outputs: readonly [
      {
        readonly name: '';
        readonly internalType: 'uint256';
        readonly type: 'uint256';
      },
    ];
    readonly stateMutability: 'view';
  },
  {
    readonly type: 'function';
    readonly inputs: readonly [];
    readonly name: 'LOTTERY_PRIZES_JACKPOT';
    readonly outputs: readonly [
      {
        readonly name: '';
        readonly internalType: 'uint256';
        readonly type: 'uint256';
      },
    ];
    readonly stateMutability: 'view';
  },
  {
    readonly type: 'function';
    readonly inputs: readonly [];
    readonly name: 'LOTTERY_PRIZES_LAST_NUMBER';
    readonly outputs: readonly [
      {
        readonly name: '';
        readonly internalType: 'uint256';
        readonly type: 'uint256';
      },
    ];
    readonly stateMutability: 'view';
  },
  {
    readonly type: 'function';
    readonly inputs: readonly [];
    readonly name: 'LOTTERY_PRIZES_NOT_LUCKY';
    readonly outputs: readonly [
      {
        readonly name: '';
        readonly internalType: 'uint256';
        readonly type: 'uint256';
      },
    ];
    readonly stateMutability: 'view';
  },
  {
    readonly type: 'function';
    readonly inputs: readonly [];
    readonly name: 'LOTTERY_PRIZES_THREE_FIRST_NUMBER';
    readonly outputs: readonly [
      {
        readonly name: '';
        readonly internalType: 'uint256';
        readonly type: 'uint256';
      },
    ];
    readonly stateMutability: 'view';
  },
  {
    readonly type: 'function';
    readonly inputs: readonly [];
    readonly name: 'LOTTERY_PRIZES_THREE_FIRST_NUMBER_AND_LAST_NUMBER';
    readonly outputs: readonly [
      {
        readonly name: '';
        readonly internalType: 'uint256';
        readonly type: 'uint256';
      },
    ];
    readonly stateMutability: 'view';
  },
  {
    readonly type: 'function';
    readonly inputs: readonly [];
    readonly name: 'LOTTERY_PRIZES_TWO_FIRST_NUMBER_AND_LAST_NUMBER';
    readonly outputs: readonly [
      {
        readonly name: '';
        readonly internalType: 'uint256';
        readonly type: 'uint256';
      },
    ];
    readonly stateMutability: 'view';
  },
  {
    readonly type: 'function';
    readonly inputs: readonly [];
    readonly name: 'MAX_LUCKY_NUMBER_LAST_SLOT_VALUE';
    readonly outputs: readonly [
      {
        readonly name: '';
        readonly internalType: 'uint256';
        readonly type: 'uint256';
      },
    ];
    readonly stateMutability: 'view';
  },
  {
    readonly type: 'function';
    readonly inputs: readonly [];
    readonly name: 'MAX_LUCKY_NUMBER_NORMAL_SLOT_VALUE';
    readonly outputs: readonly [
      {
        readonly name: '';
        readonly internalType: 'uint256';
        readonly type: 'uint256';
      },
    ];
    readonly stateMutability: 'view';
  },
  {
    readonly type: 'function';
    readonly inputs: readonly [];
    readonly name: 'MAX_TICKET_AMOUNT_EACH_BUY';
    readonly outputs: readonly [
      {
        readonly name: '';
        readonly internalType: 'uint256';
        readonly type: 'uint256';
      },
    ];
    readonly stateMutability: 'view';
  },
  {
    readonly type: 'function';
    readonly inputs: readonly [];
    readonly name: 'MIN_LUCKY_NUMBER_SLOT_VALUE';
    readonly outputs: readonly [
      {
        readonly name: '';
        readonly internalType: 'uint256';
        readonly type: 'uint256';
      },
    ];
    readonly stateMutability: 'view';
  },
  {
    readonly type: 'function';
    readonly inputs: readonly [];
    readonly name: 'blockNumber';
    readonly outputs: readonly [
      {
        readonly name: '';
        readonly internalType: 'uint128';
        readonly type: 'uint128';
      },
    ];
    readonly stateMutability: 'view';
  },
  {
    readonly type: 'function';
    readonly inputs: readonly [];
    readonly name: 'currentFrameIdx';
    readonly outputs: readonly [
      {
        readonly name: '';
        readonly internalType: 'uint96';
        readonly type: 'uint96';
      },
    ];
    readonly stateMutability: 'view';
  },
  {
    readonly type: 'function';
    readonly inputs: readonly [
      {
        readonly name: 'frameIdx';
        readonly internalType: 'uint256';
        readonly type: 'uint256';
      },
    ];
    readonly name: 'endTimes';
    readonly outputs: readonly [
      {
        readonly name: 'endTime';
        readonly internalType: 'uint256';
        readonly type: 'uint256';
      },
    ];
    readonly stateMutability: 'view';
  },
  {
    readonly type: 'function';
    readonly inputs: readonly [];
    readonly name: 'frameDuration';
    readonly outputs: readonly [
      {
        readonly name: '';
        readonly internalType: 'uint128';
        readonly type: 'uint128';
      },
    ];
    readonly stateMutability: 'view';
  },
  {
    readonly type: 'function';
    readonly inputs: readonly [
      {
        readonly name: 'frameIdx';
        readonly internalType: 'uint256';
        readonly type: 'uint256';
      },
    ];
    readonly name: 'isPaidForWinners';
    readonly outputs: readonly [
      {
        readonly name: 'isPaid';
        readonly internalType: 'bool';
        readonly type: 'bool';
      },
    ];
    readonly stateMutability: 'view';
  },
  {
    readonly type: 'function';
    readonly inputs: readonly [];
    readonly name: 'isPaused';
    readonly outputs: readonly [
      {
        readonly name: '';
        readonly internalType: 'bool';
        readonly type: 'bool';
      },
    ];
    readonly stateMutability: 'view';
  },
  {
    readonly type: 'function';
    readonly inputs: readonly [
      {
        readonly name: 'frameIdx';
        readonly internalType: 'uint256';
        readonly type: 'uint256';
      },
      {
        readonly name: '';
        readonly internalType: 'uint256';
        readonly type: 'uint256';
      },
    ];
    readonly name: 'luckyNumbers';
    readonly outputs: readonly [
      {
        readonly name: '';
        readonly internalType: 'uint24';
        readonly type: 'uint24';
      },
    ];
    readonly stateMutability: 'view';
  },
  {
    readonly type: 'function';
    readonly inputs: readonly [];
    readonly name: 'owner';
    readonly outputs: readonly [
      {
        readonly name: '';
        readonly internalType: 'address';
        readonly type: 'address';
      },
    ];
    readonly stateMutability: 'view';
  },
  {
    readonly type: 'function';
    readonly inputs: readonly [];
    readonly name: 'powerPlayPrice';
    readonly outputs: readonly [
      {
        readonly name: '';
        readonly internalType: 'uint128';
        readonly type: 'uint128';
      },
    ];
    readonly stateMutability: 'view';
  },
  {
    readonly type: 'function';
    readonly inputs: readonly [];
    readonly name: 'ticketPrice';
    readonly outputs: readonly [
      {
        readonly name: '';
        readonly internalType: 'uint128';
        readonly type: 'uint128';
      },
    ];
    readonly stateMutability: 'view';
  },
  {
    readonly type: 'function';
    readonly inputs: readonly [
      {
        readonly name: 'frameIdx';
        readonly internalType: 'uint256';
        readonly type: 'uint256';
      },
      {
        readonly name: '';
        readonly internalType: 'uint256';
        readonly type: 'uint256';
      },
    ];
    readonly name: 'tickets';
    readonly outputs: readonly [
      {
        readonly name: 'owner';
        readonly internalType: 'address';
        readonly type: 'address';
      },
      {
        readonly name: 'isPowerPlay';
        readonly internalType: 'bool';
        readonly type: 'bool';
      },
    ];
    readonly stateMutability: 'view';
  },
  {
    readonly type: 'function';
    readonly inputs: readonly [
      {
        readonly name: 'frameIdx';
        readonly internalType: 'uint256';
        readonly type: 'uint256';
      },
      {
        readonly name: '';
        readonly internalType: 'uint256';
        readonly type: 'uint256';
      },
    ];
    readonly name: 'winningHistories';
    readonly outputs: readonly [
      {
        readonly name: 'prize';
        readonly internalType: 'uint72';
        readonly type: 'uint72';
      },
      {
        readonly name: 'ticketIdx';
        readonly internalType: 'uint72';
        readonly type: 'uint72';
      },
    ];
    readonly stateMutability: 'view';
  },
];
export declare const lotteryTestAbi: readonly [
  {
    readonly type: 'error';
    readonly inputs: readonly [
      {
        readonly name: 'target';
        readonly internalType: 'address';
        readonly type: 'address';
      },
    ];
    readonly name: 'AddressEmptyCode';
  },
  {
    readonly type: 'error';
    readonly inputs: readonly [
      {
        readonly name: 'implementation';
        readonly internalType: 'address';
        readonly type: 'address';
      },
    ];
    readonly name: 'ERC1967InvalidImplementation';
  },
  {
    readonly type: 'error';
    readonly inputs: readonly [];
    readonly name: 'ERC1967NonPayable';
  },
  {
    readonly type: 'error';
    readonly inputs: readonly [];
    readonly name: 'FailedInnerCall';
  },
  {
    readonly type: 'error';
    readonly inputs: readonly [];
    readonly name: 'InvalidInitialization';
  },
  {
    readonly type: 'error';
    readonly inputs: readonly [];
    readonly name: 'NotInitializing';
  },
  {
    readonly type: 'error';
    readonly inputs: readonly [];
    readonly name: 'UUPSUnauthorizedCallContext';
  },
  {
    readonly type: 'error';
    readonly inputs: readonly [
      {
        readonly name: 'slot';
        readonly internalType: 'bytes32';
        readonly type: 'bytes32';
      },
    ];
    readonly name: 'UUPSUnsupportedProxiableUUID';
  },
  {
    readonly type: 'event';
    readonly anonymous: false;
    readonly inputs: readonly [
      {
        readonly name: 'version';
        readonly internalType: 'uint64';
        readonly type: 'uint64';
        readonly indexed: false;
      },
    ];
    readonly name: 'Initialized';
  },
  {
    readonly type: 'event';
    readonly anonymous: false;
    readonly inputs: readonly [
      {
        readonly name: 'implementation';
        readonly internalType: 'address';
        readonly type: 'address';
        readonly indexed: true;
      },
    ];
    readonly name: 'Upgraded';
  },
  {
    readonly type: 'function';
    readonly inputs: readonly [];
    readonly name: 'LOTTERY_PRIZES_FIVE_FIRST_NUMBER';
    readonly outputs: readonly [
      {
        readonly name: '';
        readonly internalType: 'uint256';
        readonly type: 'uint256';
      },
    ];
    readonly stateMutability: 'view';
  },
  {
    readonly type: 'function';
    readonly inputs: readonly [];
    readonly name: 'LOTTERY_PRIZES_FOUR_FIRST_NUMBER';
    readonly outputs: readonly [
      {
        readonly name: '';
        readonly internalType: 'uint256';
        readonly type: 'uint256';
      },
    ];
    readonly stateMutability: 'view';
  },
  {
    readonly type: 'function';
    readonly inputs: readonly [];
    readonly name: 'LOTTERY_PRIZES_FOUR_FIRST_NUMBER_AND_LAST_NUMBER';
    readonly outputs: readonly [
      {
        readonly name: '';
        readonly internalType: 'uint256';
        readonly type: 'uint256';
      },
    ];
    readonly stateMutability: 'view';
  },
  {
    readonly type: 'function';
    readonly inputs: readonly [];
    readonly name: 'LOTTERY_PRIZES_JACKPOT';
    readonly outputs: readonly [
      {
        readonly name: '';
        readonly internalType: 'uint256';
        readonly type: 'uint256';
      },
    ];
    readonly stateMutability: 'view';
  },
  {
    readonly type: 'function';
    readonly inputs: readonly [];
    readonly name: 'LOTTERY_PRIZES_LAST_NUMBER';
    readonly outputs: readonly [
      {
        readonly name: '';
        readonly internalType: 'uint256';
        readonly type: 'uint256';
      },
    ];
    readonly stateMutability: 'view';
  },
  {
    readonly type: 'function';
    readonly inputs: readonly [];
    readonly name: 'LOTTERY_PRIZES_NOT_LUCKY';
    readonly outputs: readonly [
      {
        readonly name: '';
        readonly internalType: 'uint256';
        readonly type: 'uint256';
      },
    ];
    readonly stateMutability: 'view';
  },
  {
    readonly type: 'function';
    readonly inputs: readonly [];
    readonly name: 'LOTTERY_PRIZES_THREE_FIRST_NUMBER';
    readonly outputs: readonly [
      {
        readonly name: '';
        readonly internalType: 'uint256';
        readonly type: 'uint256';
      },
    ];
    readonly stateMutability: 'view';
  },
  {
    readonly type: 'function';
    readonly inputs: readonly [];
    readonly name: 'LOTTERY_PRIZES_THREE_FIRST_NUMBER_AND_LAST_NUMBER';
    readonly outputs: readonly [
      {
        readonly name: '';
        readonly internalType: 'uint256';
        readonly type: 'uint256';
      },
    ];
    readonly stateMutability: 'view';
  },
  {
    readonly type: 'function';
    readonly inputs: readonly [];
    readonly name: 'LOTTERY_PRIZES_TWO_FIRST_NUMBER_AND_LAST_NUMBER';
    readonly outputs: readonly [
      {
        readonly name: '';
        readonly internalType: 'uint256';
        readonly type: 'uint256';
      },
    ];
    readonly stateMutability: 'view';
  },
  {
    readonly type: 'function';
    readonly inputs: readonly [];
    readonly name: 'MAX_LUCKY_NUMBER_LAST_SLOT_VALUE';
    readonly outputs: readonly [
      {
        readonly name: '';
        readonly internalType: 'uint256';
        readonly type: 'uint256';
      },
    ];
    readonly stateMutability: 'view';
  },
  {
    readonly type: 'function';
    readonly inputs: readonly [];
    readonly name: 'MAX_LUCKY_NUMBER_NORMAL_SLOT_VALUE';
    readonly outputs: readonly [
      {
        readonly name: '';
        readonly internalType: 'uint256';
        readonly type: 'uint256';
      },
    ];
    readonly stateMutability: 'view';
  },
  {
    readonly type: 'function';
    readonly inputs: readonly [];
    readonly name: 'MAX_TICKET_AMOUNT_EACH_BUY';
    readonly outputs: readonly [
      {
        readonly name: '';
        readonly internalType: 'uint256';
        readonly type: 'uint256';
      },
    ];
    readonly stateMutability: 'view';
  },
  {
    readonly type: 'function';
    readonly inputs: readonly [];
    readonly name: 'MIN_LUCKY_NUMBER_SLOT_VALUE';
    readonly outputs: readonly [
      {
        readonly name: '';
        readonly internalType: 'uint256';
        readonly type: 'uint256';
      },
    ];
    readonly stateMutability: 'view';
  },
  {
    readonly type: 'function';
    readonly inputs: readonly [];
    readonly name: 'UPGRADE_INTERFACE_VERSION';
    readonly outputs: readonly [
      {
        readonly name: '';
        readonly internalType: 'string';
        readonly type: 'string';
      },
    ];
    readonly stateMutability: 'view';
  },
  {
    readonly type: 'function';
    readonly inputs: readonly [];
    readonly name: 'blockNumber';
    readonly outputs: readonly [
      {
        readonly name: '';
        readonly internalType: 'uint128';
        readonly type: 'uint128';
      },
    ];
    readonly stateMutability: 'view';
  },
  {
    readonly type: 'function';
    readonly inputs: readonly [
      {
        readonly name: '_amount';
        readonly internalType: 'uint256';
        readonly type: 'uint256';
      },
      {
        readonly name: '_isPowerPlay';
        readonly internalType: 'bool';
        readonly type: 'bool';
      },
      {
        readonly name: '_ticketNumber';
        readonly internalType: 'uint24[6]';
        readonly type: 'uint24[6]';
      },
    ];
    readonly name: 'buyTicket';
    readonly outputs: readonly [];
    readonly stateMutability: 'payable';
  },
  {
    readonly type: 'function';
    readonly inputs: readonly [];
    readonly name: 'currentFrameIdx';
    readonly outputs: readonly [
      {
        readonly name: '';
        readonly internalType: 'uint96';
        readonly type: 'uint96';
      },
    ];
    readonly stateMutability: 'view';
  },
  {
    readonly type: 'function';
    readonly inputs: readonly [];
    readonly name: 'drawing';
    readonly outputs: readonly [];
    readonly stateMutability: 'nonpayable';
  },
  {
    readonly type: 'function';
    readonly inputs: readonly [
      {
        readonly name: 'frameIdx';
        readonly internalType: 'uint256';
        readonly type: 'uint256';
      },
    ];
    readonly name: 'endTimes';
    readonly outputs: readonly [
      {
        readonly name: 'endTime';
        readonly internalType: 'uint256';
        readonly type: 'uint256';
      },
    ];
    readonly stateMutability: 'view';
  },
  {
    readonly type: 'function';
    readonly inputs: readonly [];
    readonly name: 'frameDuration';
    readonly outputs: readonly [
      {
        readonly name: '';
        readonly internalType: 'uint128';
        readonly type: 'uint128';
      },
    ];
    readonly stateMutability: 'view';
  },
  {
    readonly type: 'function';
    readonly inputs: readonly [
      {
        readonly name: 'frameIdx';
        readonly internalType: 'uint256';
        readonly type: 'uint256';
      },
    ];
    readonly name: 'getDrawDetail';
    readonly outputs: readonly [
      {
        readonly name: 'result';
        readonly internalType: 'struct LotteryDeclaration.DrawDetailDto';
        readonly type: 'tuple';
        readonly components: readonly [
          {
            readonly name: 'endTime';
            readonly internalType: 'uint256';
            readonly type: 'uint256';
          },
          {
            readonly name: 'luckyNumber';
            readonly internalType: 'uint24[6]';
            readonly type: 'uint24[6]';
          },
          {
            readonly name: 'jackpot';
            readonly internalType: 'struct LotteryDeclaration.DrawPrizeDetailDto';
            readonly type: 'tuple';
            readonly components: readonly [
              {
                readonly name: 'money';
                readonly internalType: 'uint256';
                readonly type: 'uint256';
              },
              {
                readonly name: 'winners';
                readonly internalType: 'address[]';
                readonly type: 'address[]';
              },
            ];
          },
          {
            readonly name: 'matchFive';
            readonly internalType: 'struct LotteryDeclaration.DrawPrizeDetailDto';
            readonly type: 'tuple';
            readonly components: readonly [
              {
                readonly name: 'money';
                readonly internalType: 'uint256';
                readonly type: 'uint256';
              },
              {
                readonly name: 'winners';
                readonly internalType: 'address[]';
                readonly type: 'address[]';
              },
            ];
          },
          {
            readonly name: 'matchFourAndLast';
            readonly internalType: 'struct LotteryDeclaration.DrawPrizeDetailDto';
            readonly type: 'tuple';
            readonly components: readonly [
              {
                readonly name: 'money';
                readonly internalType: 'uint256';
                readonly type: 'uint256';
              },
              {
                readonly name: 'winners';
                readonly internalType: 'address[]';
                readonly type: 'address[]';
              },
            ];
          },
          {
            readonly name: 'matchFour';
            readonly internalType: 'struct LotteryDeclaration.DrawPrizeDetailDto';
            readonly type: 'tuple';
            readonly components: readonly [
              {
                readonly name: 'money';
                readonly internalType: 'uint256';
                readonly type: 'uint256';
              },
              {
                readonly name: 'winners';
                readonly internalType: 'address[]';
                readonly type: 'address[]';
              },
            ];
          },
          {
            readonly name: 'matchThreeAndLast';
            readonly internalType: 'struct LotteryDeclaration.DrawPrizeDetailDto';
            readonly type: 'tuple';
            readonly components: readonly [
              {
                readonly name: 'money';
                readonly internalType: 'uint256';
                readonly type: 'uint256';
              },
              {
                readonly name: 'winners';
                readonly internalType: 'address[]';
                readonly type: 'address[]';
              },
            ];
          },
          {
            readonly name: 'matchThree';
            readonly internalType: 'struct LotteryDeclaration.DrawPrizeDetailDto';
            readonly type: 'tuple';
            readonly components: readonly [
              {
                readonly name: 'money';
                readonly internalType: 'uint256';
                readonly type: 'uint256';
              },
              {
                readonly name: 'winners';
                readonly internalType: 'address[]';
                readonly type: 'address[]';
              },
            ];
          },
          {
            readonly name: 'matchTwoAndLast';
            readonly internalType: 'struct LotteryDeclaration.DrawPrizeDetailDto';
            readonly type: 'tuple';
            readonly components: readonly [
              {
                readonly name: 'money';
                readonly internalType: 'uint256';
                readonly type: 'uint256';
              },
              {
                readonly name: 'winners';
                readonly internalType: 'address[]';
                readonly type: 'address[]';
              },
            ];
          },
          {
            readonly name: 'matchLast';
            readonly internalType: 'struct LotteryDeclaration.DrawPrizeDetailDto';
            readonly type: 'tuple';
            readonly components: readonly [
              {
                readonly name: 'money';
                readonly internalType: 'uint256';
                readonly type: 'uint256';
              },
              {
                readonly name: 'winners';
                readonly internalType: 'address[]';
                readonly type: 'address[]';
              },
            ];
          },
        ];
      },
    ];
    readonly stateMutability: 'view';
  },
  {
    readonly type: 'function';
    readonly inputs: readonly [
      {
        readonly name: 'paginationDto';
        readonly internalType: 'struct LotteryDeclaration.PaginationRequestDto';
        readonly type: 'tuple';
        readonly components: readonly [
          {
            readonly name: 'page';
            readonly internalType: 'uint256';
            readonly type: 'uint256';
          },
          {
            readonly name: 'size';
            readonly internalType: 'uint256';
            readonly type: 'uint256';
          },
        ];
      },
    ];
    readonly name: 'getDrawList';
    readonly outputs: readonly [
      {
        readonly name: 'result';
        readonly internalType: 'struct LotteryDeclaration.DrawListDto';
        readonly type: 'tuple';
        readonly components: readonly [
          {
            readonly name: 'draws';
            readonly internalType: 'struct LotteryDeclaration.DrawStatisticDto[]';
            readonly type: 'tuple[]';
            readonly components: readonly [
              {
                readonly name: 'endTime';
                readonly internalType: 'uint256';
                readonly type: 'uint256';
              },
              {
                readonly name: 'frameIdx';
                readonly internalType: 'uint256';
                readonly type: 'uint256';
              },
              {
                readonly name: 'isExist';
                readonly internalType: 'bool';
                readonly type: 'bool';
              },
              {
                readonly name: 'isFuture';
                readonly internalType: 'bool';
                readonly type: 'bool';
              },
              {
                readonly name: 'luckyNumber';
                readonly internalType: 'uint24[6]';
                readonly type: 'uint24[6]';
              },
              {
                readonly name: 'jackpotWinners';
                readonly internalType: 'address[]';
                readonly type: 'address[]';
              },
              {
                readonly name: 'matchFiveWinners';
                readonly internalType: 'address[]';
                readonly type: 'address[]';
              },
            ];
          },
          {
            readonly name: 'totalPage';
            readonly internalType: 'uint256';
            readonly type: 'uint256';
          },
        ];
      },
    ];
    readonly stateMutability: 'view';
  },
  {
    readonly type: 'function';
    readonly inputs: readonly [];
    readonly name: 'getHomeStatistic';
    readonly outputs: readonly [
      {
        readonly name: '';
        readonly internalType: 'struct LotteryDeclaration.HomeStatisticDto';
        readonly type: 'tuple';
        readonly components: readonly [
          {
            readonly name: 'nextDraw';
            readonly internalType: 'struct LotteryDeclaration.DrawStatisticDto';
            readonly type: 'tuple';
            readonly components: readonly [
              {
                readonly name: 'endTime';
                readonly internalType: 'uint256';
                readonly type: 'uint256';
              },
              {
                readonly name: 'frameIdx';
                readonly internalType: 'uint256';
                readonly type: 'uint256';
              },
              {
                readonly name: 'isExist';
                readonly internalType: 'bool';
                readonly type: 'bool';
              },
              {
                readonly name: 'isFuture';
                readonly internalType: 'bool';
                readonly type: 'bool';
              },
              {
                readonly name: 'luckyNumber';
                readonly internalType: 'uint24[6]';
                readonly type: 'uint24[6]';
              },
              {
                readonly name: 'jackpotWinners';
                readonly internalType: 'address[]';
                readonly type: 'address[]';
              },
              {
                readonly name: 'matchFiveWinners';
                readonly internalType: 'address[]';
                readonly type: 'address[]';
              },
            ];
          },
          {
            readonly name: 'lastDraw';
            readonly internalType: 'struct LotteryDeclaration.DrawStatisticDto';
            readonly type: 'tuple';
            readonly components: readonly [
              {
                readonly name: 'endTime';
                readonly internalType: 'uint256';
                readonly type: 'uint256';
              },
              {
                readonly name: 'frameIdx';
                readonly internalType: 'uint256';
                readonly type: 'uint256';
              },
              {
                readonly name: 'isExist';
                readonly internalType: 'bool';
                readonly type: 'bool';
              },
              {
                readonly name: 'isFuture';
                readonly internalType: 'bool';
                readonly type: 'bool';
              },
              {
                readonly name: 'luckyNumber';
                readonly internalType: 'uint24[6]';
                readonly type: 'uint24[6]';
              },
              {
                readonly name: 'jackpotWinners';
                readonly internalType: 'address[]';
                readonly type: 'address[]';
              },
              {
                readonly name: 'matchFiveWinners';
                readonly internalType: 'address[]';
                readonly type: 'address[]';
              },
            ];
          },
        ];
      },
    ];
    readonly stateMutability: 'view';
  },
  {
    readonly type: 'function';
    readonly inputs: readonly [];
    readonly name: 'getMyTicketList';
    readonly outputs: readonly [
      {
        readonly name: '';
        readonly internalType: 'struct LotteryDeclaration.TicketDto[]';
        readonly type: 'tuple[]';
        readonly components: readonly [
          {
            readonly name: 'luckyNumber';
            readonly internalType: 'uint24[6]';
            readonly type: 'uint24[6]';
          },
          {
            readonly name: 'isPowerPlay';
            readonly internalType: 'bool';
            readonly type: 'bool';
          },
          {
            readonly name: 'frameIdx';
            readonly internalType: 'uint256';
            readonly type: 'uint256';
          },
          {
            readonly name: 'endTime';
            readonly internalType: 'uint256';
            readonly type: 'uint256';
          },
          {
            readonly name: 'prize';
            readonly internalType: 'uint256';
            readonly type: 'uint256';
          },
        ];
      },
    ];
    readonly stateMutability: 'view';
  },
  {
    readonly type: 'function';
    readonly inputs: readonly [
      {
        readonly name: '_frameIdx';
        readonly internalType: 'uint256';
        readonly type: 'uint256';
      },
    ];
    readonly name: 'getPrizeOfFrame';
    readonly outputs: readonly [
      {
        readonly name: '';
        readonly internalType: 'uint256';
        readonly type: 'uint256';
      },
    ];
    readonly stateMutability: 'view';
  },
  {
    readonly type: 'function';
    readonly inputs: readonly [
      {
        readonly name: 'frameIdx';
        readonly internalType: 'uint256';
        readonly type: 'uint256';
      },
    ];
    readonly name: 'getTickets';
    readonly outputs: readonly [
      {
        readonly name: '';
        readonly internalType: 'struct LotteryDeclaration.Ticket[]';
        readonly type: 'tuple[]';
        readonly components: readonly [
          {
            readonly name: 'owner';
            readonly internalType: 'address';
            readonly type: 'address';
          },
          {
            readonly name: 'isPowerPlay';
            readonly internalType: 'bool';
            readonly type: 'bool';
          },
          {
            readonly name: 'luckyNumber';
            readonly internalType: 'uint24[6]';
            readonly type: 'uint24[6]';
          },
        ];
      },
    ];
    readonly stateMutability: 'view';
  },
  {
    readonly type: 'function';
    readonly inputs: readonly [
      {
        readonly name: 'frameIdx';
        readonly internalType: 'uint256';
        readonly type: 'uint256';
      },
    ];
    readonly name: 'getWinningHistoryByFrame';
    readonly outputs: readonly [
      {
        readonly name: '';
        readonly internalType: 'struct LotteryDeclaration.Winning[]';
        readonly type: 'tuple[]';
        readonly components: readonly [
          {
            readonly name: 'prize';
            readonly internalType: 'uint72';
            readonly type: 'uint72';
          },
          {
            readonly name: 'ticketIdx';
            readonly internalType: 'uint72';
            readonly type: 'uint72';
          },
        ];
      },
    ];
    readonly stateMutability: 'view';
  },
  {
    readonly type: 'function';
    readonly inputs: readonly [
      {
        readonly name: '_endTime';
        readonly internalType: 'uint128';
        readonly type: 'uint128';
      },
      {
        readonly name: '_frameDuration';
        readonly internalType: 'uint128';
        readonly type: 'uint128';
      },
      {
        readonly name: '_ticketPrice';
        readonly internalType: 'uint128';
        readonly type: 'uint128';
      },
      {
        readonly name: '_powerPlayPrice';
        readonly internalType: 'uint128';
        readonly type: 'uint128';
      },
    ];
    readonly name: 'initialize';
    readonly outputs: readonly [];
    readonly stateMutability: 'nonpayable';
  },
  {
    readonly type: 'function';
    readonly inputs: readonly [
      {
        readonly name: 'frameIdx';
        readonly internalType: 'uint256';
        readonly type: 'uint256';
      },
    ];
    readonly name: 'isPaidForWinners';
    readonly outputs: readonly [
      {
        readonly name: 'isPaid';
        readonly internalType: 'bool';
        readonly type: 'bool';
      },
    ];
    readonly stateMutability: 'view';
  },
  {
    readonly type: 'function';
    readonly inputs: readonly [];
    readonly name: 'isPaused';
    readonly outputs: readonly [
      {
        readonly name: '';
        readonly internalType: 'bool';
        readonly type: 'bool';
      },
    ];
    readonly stateMutability: 'view';
  },
  {
    readonly type: 'function';
    readonly inputs: readonly [
      {
        readonly name: 'frameIdx';
        readonly internalType: 'uint256';
        readonly type: 'uint256';
      },
      {
        readonly name: '';
        readonly internalType: 'uint256';
        readonly type: 'uint256';
      },
    ];
    readonly name: 'luckyNumbers';
    readonly outputs: readonly [
      {
        readonly name: '';
        readonly internalType: 'uint24';
        readonly type: 'uint24';
      },
    ];
    readonly stateMutability: 'view';
  },
  {
    readonly type: 'function';
    readonly inputs: readonly [];
    readonly name: 'owner';
    readonly outputs: readonly [
      {
        readonly name: '';
        readonly internalType: 'address';
        readonly type: 'address';
      },
    ];
    readonly stateMutability: 'view';
  },
  {
    readonly type: 'function';
    readonly inputs: readonly [];
    readonly name: 'pause';
    readonly outputs: readonly [];
    readonly stateMutability: 'nonpayable';
  },
  {
    readonly type: 'function';
    readonly inputs: readonly [
      {
        readonly name: 'frameIdx';
        readonly internalType: 'uint256';
        readonly type: 'uint256';
      },
    ];
    readonly name: 'payForWinners';
    readonly outputs: readonly [];
    readonly stateMutability: 'payable';
  },
  {
    readonly type: 'function';
    readonly inputs: readonly [];
    readonly name: 'powerPlayPrice';
    readonly outputs: readonly [
      {
        readonly name: '';
        readonly internalType: 'uint128';
        readonly type: 'uint128';
      },
    ];
    readonly stateMutability: 'view';
  },
  {
    readonly type: 'function';
    readonly inputs: readonly [];
    readonly name: 'prepareDrawing';
    readonly outputs: readonly [];
    readonly stateMutability: 'nonpayable';
  },
  {
    readonly type: 'function';
    readonly inputs: readonly [];
    readonly name: 'proxiableUUID';
    readonly outputs: readonly [
      {
        readonly name: '';
        readonly internalType: 'bytes32';
        readonly type: 'bytes32';
      },
    ];
    readonly stateMutability: 'view';
  },
  {
    readonly type: 'function';
    readonly inputs: readonly [
      {
        readonly name: 'newEndTime';
        readonly internalType: 'uint256';
        readonly type: 'uint256';
      },
    ];
    readonly name: 'restart';
    readonly outputs: readonly [];
    readonly stateMutability: 'nonpayable';
  },
  {
    readonly type: 'function';
    readonly inputs: readonly [];
    readonly name: 'restart';
    readonly outputs: readonly [];
    readonly stateMutability: 'nonpayable';
  },
  {
    readonly type: 'function';
    readonly inputs: readonly [
      {
        readonly name: 'currentEndTime';
        readonly internalType: 'uint256';
        readonly type: 'uint256';
      },
    ];
    readonly name: 'setCurrentEndTime';
    readonly outputs: readonly [];
    readonly stateMutability: 'nonpayable';
  },
  {
    readonly type: 'function';
    readonly inputs: readonly [];
    readonly name: 'shouldDrawing';
    readonly outputs: readonly [
      {
        readonly name: '';
        readonly internalType: 'bool';
        readonly type: 'bool';
      },
    ];
    readonly stateMutability: 'view';
  },
  {
    readonly type: 'function';
    readonly inputs: readonly [];
    readonly name: 'shouldPreparingDrawing';
    readonly outputs: readonly [
      {
        readonly name: '';
        readonly internalType: 'bool';
        readonly type: 'bool';
      },
    ];
    readonly stateMutability: 'view';
  },
  {
    readonly type: 'function';
    readonly inputs: readonly [
      {
        readonly name: '_luckyNumber';
        readonly internalType: 'uint24[6]';
        readonly type: 'uint24[6]';
      },
    ];
    readonly name: 'testDrawing';
    readonly outputs: readonly [];
    readonly stateMutability: 'nonpayable';
  },
  {
    readonly type: 'function';
    readonly inputs: readonly [];
    readonly name: 'ticketPrice';
    readonly outputs: readonly [
      {
        readonly name: '';
        readonly internalType: 'uint128';
        readonly type: 'uint128';
      },
    ];
    readonly stateMutability: 'view';
  },
  {
    readonly type: 'function';
    readonly inputs: readonly [
      {
        readonly name: 'frameIdx';
        readonly internalType: 'uint256';
        readonly type: 'uint256';
      },
      {
        readonly name: '';
        readonly internalType: 'uint256';
        readonly type: 'uint256';
      },
    ];
    readonly name: 'tickets';
    readonly outputs: readonly [
      {
        readonly name: 'owner';
        readonly internalType: 'address';
        readonly type: 'address';
      },
      {
        readonly name: 'isPowerPlay';
        readonly internalType: 'bool';
        readonly type: 'bool';
      },
    ];
    readonly stateMutability: 'view';
  },
  {
    readonly type: 'function';
    readonly inputs: readonly [
      {
        readonly name: 'newImplementation';
        readonly internalType: 'address';
        readonly type: 'address';
      },
      {
        readonly name: 'data';
        readonly internalType: 'bytes';
        readonly type: 'bytes';
      },
    ];
    readonly name: 'upgradeToAndCall';
    readonly outputs: readonly [];
    readonly stateMutability: 'payable';
  },
  {
    readonly type: 'function';
    readonly inputs: readonly [
      {
        readonly name: 'frameIdx';
        readonly internalType: 'uint256';
        readonly type: 'uint256';
      },
      {
        readonly name: '';
        readonly internalType: 'uint256';
        readonly type: 'uint256';
      },
    ];
    readonly name: 'winningHistories';
    readonly outputs: readonly [
      {
        readonly name: 'prize';
        readonly internalType: 'uint72';
        readonly type: 'uint72';
      },
      {
        readonly name: 'ticketIdx';
        readonly internalType: 'uint72';
        readonly type: 'uint72';
      },
    ];
    readonly stateMutability: 'view';
  },
  {
    readonly type: 'receive';
    readonly stateMutability: 'payable';
  },
];
export declare const payableUupsUpgradeableAbi: readonly [
  {
    readonly type: 'error';
    readonly inputs: readonly [
      {
        readonly name: 'target';
        readonly internalType: 'address';
        readonly type: 'address';
      },
    ];
    readonly name: 'AddressEmptyCode';
  },
  {
    readonly type: 'error';
    readonly inputs: readonly [
      {
        readonly name: 'implementation';
        readonly internalType: 'address';
        readonly type: 'address';
      },
    ];
    readonly name: 'ERC1967InvalidImplementation';
  },
  {
    readonly type: 'error';
    readonly inputs: readonly [];
    readonly name: 'ERC1967NonPayable';
  },
  {
    readonly type: 'error';
    readonly inputs: readonly [];
    readonly name: 'FailedInnerCall';
  },
  {
    readonly type: 'error';
    readonly inputs: readonly [];
    readonly name: 'InvalidInitialization';
  },
  {
    readonly type: 'error';
    readonly inputs: readonly [];
    readonly name: 'NotInitializing';
  },
  {
    readonly type: 'error';
    readonly inputs: readonly [];
    readonly name: 'UUPSUnauthorizedCallContext';
  },
  {
    readonly type: 'error';
    readonly inputs: readonly [
      {
        readonly name: 'slot';
        readonly internalType: 'bytes32';
        readonly type: 'bytes32';
      },
    ];
    readonly name: 'UUPSUnsupportedProxiableUUID';
  },
  {
    readonly type: 'event';
    readonly anonymous: false;
    readonly inputs: readonly [
      {
        readonly name: 'version';
        readonly internalType: 'uint64';
        readonly type: 'uint64';
        readonly indexed: false;
      },
    ];
    readonly name: 'Initialized';
  },
  {
    readonly type: 'event';
    readonly anonymous: false;
    readonly inputs: readonly [
      {
        readonly name: 'implementation';
        readonly internalType: 'address';
        readonly type: 'address';
        readonly indexed: true;
      },
    ];
    readonly name: 'Upgraded';
  },
  {
    readonly type: 'function';
    readonly inputs: readonly [];
    readonly name: 'UPGRADE_INTERFACE_VERSION';
    readonly outputs: readonly [
      {
        readonly name: '';
        readonly internalType: 'string';
        readonly type: 'string';
      },
    ];
    readonly stateMutability: 'view';
  },
  {
    readonly type: 'function';
    readonly inputs: readonly [];
    readonly name: 'proxiableUUID';
    readonly outputs: readonly [
      {
        readonly name: '';
        readonly internalType: 'bytes32';
        readonly type: 'bytes32';
      },
    ];
    readonly stateMutability: 'view';
  },
  {
    readonly type: 'function';
    readonly inputs: readonly [
      {
        readonly name: 'newImplementation';
        readonly internalType: 'address';
        readonly type: 'address';
      },
      {
        readonly name: 'data';
        readonly internalType: 'bytes';
        readonly type: 'bytes';
      },
    ];
    readonly name: 'upgradeToAndCall';
    readonly outputs: readonly [];
    readonly stateMutability: 'payable';
  },
  {
    readonly type: 'receive';
    readonly stateMutability: 'payable';
  },
];
export declare const uupsUpgradeableAbi: readonly [
  {
    readonly type: 'error';
    readonly inputs: readonly [
      {
        readonly name: 'target';
        readonly internalType: 'address';
        readonly type: 'address';
      },
    ];
    readonly name: 'AddressEmptyCode';
  },
  {
    readonly type: 'error';
    readonly inputs: readonly [
      {
        readonly name: 'implementation';
        readonly internalType: 'address';
        readonly type: 'address';
      },
    ];
    readonly name: 'ERC1967InvalidImplementation';
  },
  {
    readonly type: 'error';
    readonly inputs: readonly [];
    readonly name: 'ERC1967NonPayable';
  },
  {
    readonly type: 'error';
    readonly inputs: readonly [];
    readonly name: 'FailedInnerCall';
  },
  {
    readonly type: 'error';
    readonly inputs: readonly [];
    readonly name: 'InvalidInitialization';
  },
  {
    readonly type: 'error';
    readonly inputs: readonly [];
    readonly name: 'NotInitializing';
  },
  {
    readonly type: 'error';
    readonly inputs: readonly [];
    readonly name: 'UUPSUnauthorizedCallContext';
  },
  {
    readonly type: 'error';
    readonly inputs: readonly [
      {
        readonly name: 'slot';
        readonly internalType: 'bytes32';
        readonly type: 'bytes32';
      },
    ];
    readonly name: 'UUPSUnsupportedProxiableUUID';
  },
  {
    readonly type: 'event';
    readonly anonymous: false;
    readonly inputs: readonly [
      {
        readonly name: 'version';
        readonly internalType: 'uint64';
        readonly type: 'uint64';
        readonly indexed: false;
      },
    ];
    readonly name: 'Initialized';
  },
  {
    readonly type: 'event';
    readonly anonymous: false;
    readonly inputs: readonly [
      {
        readonly name: 'implementation';
        readonly internalType: 'address';
        readonly type: 'address';
        readonly indexed: true;
      },
    ];
    readonly name: 'Upgraded';
  },
  {
    readonly type: 'function';
    readonly inputs: readonly [];
    readonly name: 'UPGRADE_INTERFACE_VERSION';
    readonly outputs: readonly [
      {
        readonly name: '';
        readonly internalType: 'string';
        readonly type: 'string';
      },
    ];
    readonly stateMutability: 'view';
  },
  {
    readonly type: 'function';
    readonly inputs: readonly [];
    readonly name: 'proxiableUUID';
    readonly outputs: readonly [
      {
        readonly name: '';
        readonly internalType: 'bytes32';
        readonly type: 'bytes32';
      },
    ];
    readonly stateMutability: 'view';
  },
  {
    readonly type: 'function';
    readonly inputs: readonly [
      {
        readonly name: 'newImplementation';
        readonly internalType: 'address';
        readonly type: 'address';
      },
      {
        readonly name: 'data';
        readonly internalType: 'bytes';
        readonly type: 'bytes';
      },
    ];
    readonly name: 'upgradeToAndCall';
    readonly outputs: readonly [];
    readonly stateMutability: 'payable';
  },
];
