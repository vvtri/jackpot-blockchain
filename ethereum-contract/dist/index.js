"use strict";
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Address
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
Object.defineProperty(exports, "__esModule", { value: true });
exports.uupsUpgradeableAbi = exports.payableUupsUpgradeableAbi = exports.lotteryTestAbi = exports.lotteryStateAbi = exports.lotteryDeclarationAbi = exports.lotteryAbi = exports.initializableAbi = exports.ierc1822ProxiableAbi = exports.iBeaconAbi = exports.erc1967UtilsAbi = exports.buyLotteryTicketTestAbi = exports.addressAbi = void 0;
exports.addressAbi = [
    {
        type: 'error',
        inputs: [{ name: 'target', internalType: 'address', type: 'address' }],
        name: 'AddressEmptyCode',
    },
    {
        type: 'error',
        inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
        name: 'AddressInsufficientBalance',
    },
    { type: 'error', inputs: [], name: 'FailedInnerCall' },
];
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// BuyLotteryTicketTest
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
exports.buyLotteryTicketTestAbi = [
    {
        type: 'function',
        inputs: [
            { name: 'lottery', internalType: 'address payable', type: 'address' },
            { name: 'ticketAmount', internalType: 'uint256', type: 'uint256' },
            { name: 'isPowerPlay', internalType: 'bool', type: 'bool' },
            { name: 'ticketNumber', internalType: 'uint24[]', type: 'uint24[]' },
        ],
        name: 'buyLottery',
        outputs: [],
        stateMutability: 'payable',
    },
    { type: 'receive', stateMutability: 'payable' },
];
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ERC1967Utils
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
exports.erc1967UtilsAbi = [
    {
        type: 'error',
        inputs: [{ name: 'admin', internalType: 'address', type: 'address' }],
        name: 'ERC1967InvalidAdmin',
    },
    {
        type: 'error',
        inputs: [{ name: 'beacon', internalType: 'address', type: 'address' }],
        name: 'ERC1967InvalidBeacon',
    },
    {
        type: 'error',
        inputs: [
            { name: 'implementation', internalType: 'address', type: 'address' },
        ],
        name: 'ERC1967InvalidImplementation',
    },
    { type: 'error', inputs: [], name: 'ERC1967NonPayable' },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: 'previousAdmin',
                internalType: 'address',
                type: 'address',
                indexed: false,
            },
            {
                name: 'newAdmin',
                internalType: 'address',
                type: 'address',
                indexed: false,
            },
        ],
        name: 'AdminChanged',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: 'beacon',
                internalType: 'address',
                type: 'address',
                indexed: true,
            },
        ],
        name: 'BeaconUpgraded',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: 'implementation',
                internalType: 'address',
                type: 'address',
                indexed: true,
            },
        ],
        name: 'Upgraded',
    },
];
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IBeacon
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
exports.iBeaconAbi = [
    {
        type: 'function',
        inputs: [],
        name: 'implementation',
        outputs: [{ name: '', internalType: 'address', type: 'address' }],
        stateMutability: 'view',
    },
];
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC1822Proxiable
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
exports.ierc1822ProxiableAbi = [
    {
        type: 'function',
        inputs: [],
        name: 'proxiableUUID',
        outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
        stateMutability: 'view',
    },
];
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Initializable
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
exports.initializableAbi = [
    { type: 'error', inputs: [], name: 'InvalidInitialization' },
    { type: 'error', inputs: [], name: 'NotInitializing' },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: 'version',
                internalType: 'uint64',
                type: 'uint64',
                indexed: false,
            },
        ],
        name: 'Initialized',
    },
];
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Lottery
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
exports.lotteryAbi = [
    {
        type: 'error',
        inputs: [{ name: 'target', internalType: 'address', type: 'address' }],
        name: 'AddressEmptyCode',
    },
    {
        type: 'error',
        inputs: [
            { name: 'implementation', internalType: 'address', type: 'address' },
        ],
        name: 'ERC1967InvalidImplementation',
    },
    { type: 'error', inputs: [], name: 'ERC1967NonPayable' },
    { type: 'error', inputs: [], name: 'FailedInnerCall' },
    { type: 'error', inputs: [], name: 'InvalidInitialization' },
    { type: 'error', inputs: [], name: 'NotInitializing' },
    { type: 'error', inputs: [], name: 'UUPSUnauthorizedCallContext' },
    {
        type: 'error',
        inputs: [{ name: 'slot', internalType: 'bytes32', type: 'bytes32' }],
        name: 'UUPSUnsupportedProxiableUUID',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: 'version',
                internalType: 'uint64',
                type: 'uint64',
                indexed: false,
            },
        ],
        name: 'Initialized',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: 'implementation',
                internalType: 'address',
                type: 'address',
                indexed: true,
            },
        ],
        name: 'Upgraded',
    },
    {
        type: 'function',
        inputs: [],
        name: 'LOTTERY_PRIZES_FIVE_FIRST_NUMBER',
        outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [],
        name: 'LOTTERY_PRIZES_FOUR_FIRST_NUMBER',
        outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [],
        name: 'LOTTERY_PRIZES_FOUR_FIRST_NUMBER_AND_LAST_NUMBER',
        outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [],
        name: 'LOTTERY_PRIZES_JACKPOT',
        outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [],
        name: 'LOTTERY_PRIZES_LAST_NUMBER',
        outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [],
        name: 'LOTTERY_PRIZES_NOT_LUCKY',
        outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [],
        name: 'LOTTERY_PRIZES_THREE_FIRST_NUMBER',
        outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [],
        name: 'LOTTERY_PRIZES_THREE_FIRST_NUMBER_AND_LAST_NUMBER',
        outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [],
        name: 'LOTTERY_PRIZES_TWO_FIRST_NUMBER_AND_LAST_NUMBER',
        outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [],
        name: 'MAX_LUCKY_NUMBER_LAST_SLOT_VALUE',
        outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [],
        name: 'MAX_LUCKY_NUMBER_NORMAL_SLOT_VALUE',
        outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [],
        name: 'MAX_TICKET_AMOUNT_EACH_BUY',
        outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [],
        name: 'MIN_LUCKY_NUMBER_SLOT_VALUE',
        outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [],
        name: 'UPGRADE_INTERFACE_VERSION',
        outputs: [{ name: '', internalType: 'string', type: 'string' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [],
        name: 'blockNumber',
        outputs: [{ name: '', internalType: 'uint128', type: 'uint128' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: '_amount', internalType: 'uint256', type: 'uint256' },
            { name: '_isPowerPlay', internalType: 'bool', type: 'bool' },
            { name: '_ticketNumber', internalType: 'uint24[6]', type: 'uint24[6]' },
        ],
        name: 'buyTicket',
        outputs: [],
        stateMutability: 'payable',
    },
    {
        type: 'function',
        inputs: [],
        name: 'currentFrameIdx',
        outputs: [{ name: '', internalType: 'uint96', type: 'uint96' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [],
        name: 'drawing',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [{ name: 'frameIdx', internalType: 'uint256', type: 'uint256' }],
        name: 'endTimes',
        outputs: [{ name: 'endTime', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [],
        name: 'frameDuration',
        outputs: [{ name: '', internalType: 'uint128', type: 'uint128' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [{ name: '_frameIdx', internalType: 'uint256', type: 'uint256' }],
        name: 'getPrizeOfFrame',
        outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [{ name: 'frameIdx', internalType: 'uint256', type: 'uint256' }],
        name: 'getTickets',
        outputs: [
            {
                name: '',
                internalType: 'struct LotteryDeclaration.Ticket[]',
                type: 'tuple[]',
                components: [
                    { name: 'owner', internalType: 'address', type: 'address' },
                    { name: 'isPowerPlay', internalType: 'bool', type: 'bool' },
                    { name: 'luckyNumber', internalType: 'uint24[6]', type: 'uint24[6]' },
                ],
            },
        ],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [{ name: 'frameIdx', internalType: 'uint256', type: 'uint256' }],
        name: 'getWinningHistoryByFrame',
        outputs: [
            {
                name: '',
                internalType: 'struct LotteryDeclaration.Winning[]',
                type: 'tuple[]',
                components: [
                    { name: 'prize', internalType: 'uint72', type: 'uint72' },
                    { name: 'ticketIdx', internalType: 'uint72', type: 'uint72' },
                ],
            },
        ],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: '_endTime', internalType: 'uint128', type: 'uint128' },
            { name: '_frameDuration', internalType: 'uint128', type: 'uint128' },
            { name: '_ticketPrice', internalType: 'uint128', type: 'uint128' },
            { name: '_powerPlayPrice', internalType: 'uint128', type: 'uint128' },
        ],
        name: 'initialize',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [{ name: 'frameIdx', internalType: 'uint256', type: 'uint256' }],
        name: 'isPaidForWinners',
        outputs: [{ name: 'isPaid', internalType: 'bool', type: 'bool' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [],
        name: 'isPaused',
        outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: 'frameIdx', internalType: 'uint256', type: 'uint256' },
            { name: '', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'luckyNumbers',
        outputs: [{ name: '', internalType: 'uint24', type: 'uint24' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [],
        name: 'owner',
        outputs: [{ name: '', internalType: 'address', type: 'address' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [],
        name: 'pause',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [{ name: 'frameIdx', internalType: 'uint256', type: 'uint256' }],
        name: 'payForWinners',
        outputs: [],
        stateMutability: 'payable',
    },
    {
        type: 'function',
        inputs: [],
        name: 'powerPlayPrice',
        outputs: [{ name: '', internalType: 'uint128', type: 'uint128' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [],
        name: 'prepareDrawing',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [],
        name: 'proxiableUUID',
        outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [{ name: 'newEndTime', internalType: 'uint256', type: 'uint256' }],
        name: 'restart',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [],
        name: 'ticketPrice',
        outputs: [{ name: '', internalType: 'uint128', type: 'uint128' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: 'frameIdx', internalType: 'uint256', type: 'uint256' },
            { name: '', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'tickets',
        outputs: [
            { name: 'owner', internalType: 'address', type: 'address' },
            { name: 'isPowerPlay', internalType: 'bool', type: 'bool' },
        ],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: 'newImplementation', internalType: 'address', type: 'address' },
            { name: 'data', internalType: 'bytes', type: 'bytes' },
        ],
        name: 'upgradeToAndCall',
        outputs: [],
        stateMutability: 'payable',
    },
    {
        type: 'function',
        inputs: [
            { name: 'frameIdx', internalType: 'uint256', type: 'uint256' },
            { name: '', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'winningHistories',
        outputs: [
            { name: 'prize', internalType: 'uint72', type: 'uint72' },
            { name: 'ticketIdx', internalType: 'uint72', type: 'uint72' },
        ],
        stateMutability: 'view',
    },
    { type: 'receive', stateMutability: 'payable' },
];
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// LotteryDeclaration
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
exports.lotteryDeclarationAbi = [
    {
        type: 'function',
        inputs: [],
        name: 'LOTTERY_PRIZES_FIVE_FIRST_NUMBER',
        outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [],
        name: 'LOTTERY_PRIZES_FOUR_FIRST_NUMBER',
        outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [],
        name: 'LOTTERY_PRIZES_FOUR_FIRST_NUMBER_AND_LAST_NUMBER',
        outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [],
        name: 'LOTTERY_PRIZES_JACKPOT',
        outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [],
        name: 'LOTTERY_PRIZES_LAST_NUMBER',
        outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [],
        name: 'LOTTERY_PRIZES_NOT_LUCKY',
        outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [],
        name: 'LOTTERY_PRIZES_THREE_FIRST_NUMBER',
        outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [],
        name: 'LOTTERY_PRIZES_THREE_FIRST_NUMBER_AND_LAST_NUMBER',
        outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [],
        name: 'LOTTERY_PRIZES_TWO_FIRST_NUMBER_AND_LAST_NUMBER',
        outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [],
        name: 'MAX_LUCKY_NUMBER_LAST_SLOT_VALUE',
        outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [],
        name: 'MAX_LUCKY_NUMBER_NORMAL_SLOT_VALUE',
        outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [],
        name: 'MAX_TICKET_AMOUNT_EACH_BUY',
        outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [],
        name: 'MIN_LUCKY_NUMBER_SLOT_VALUE',
        outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'view',
    },
];
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// LotteryState
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
exports.lotteryStateAbi = [
    {
        type: 'function',
        inputs: [],
        name: 'LOTTERY_PRIZES_FIVE_FIRST_NUMBER',
        outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [],
        name: 'LOTTERY_PRIZES_FOUR_FIRST_NUMBER',
        outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [],
        name: 'LOTTERY_PRIZES_FOUR_FIRST_NUMBER_AND_LAST_NUMBER',
        outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [],
        name: 'LOTTERY_PRIZES_JACKPOT',
        outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [],
        name: 'LOTTERY_PRIZES_LAST_NUMBER',
        outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [],
        name: 'LOTTERY_PRIZES_NOT_LUCKY',
        outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [],
        name: 'LOTTERY_PRIZES_THREE_FIRST_NUMBER',
        outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [],
        name: 'LOTTERY_PRIZES_THREE_FIRST_NUMBER_AND_LAST_NUMBER',
        outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [],
        name: 'LOTTERY_PRIZES_TWO_FIRST_NUMBER_AND_LAST_NUMBER',
        outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [],
        name: 'MAX_LUCKY_NUMBER_LAST_SLOT_VALUE',
        outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [],
        name: 'MAX_LUCKY_NUMBER_NORMAL_SLOT_VALUE',
        outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [],
        name: 'MAX_TICKET_AMOUNT_EACH_BUY',
        outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [],
        name: 'MIN_LUCKY_NUMBER_SLOT_VALUE',
        outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [],
        name: 'blockNumber',
        outputs: [{ name: '', internalType: 'uint128', type: 'uint128' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [],
        name: 'currentFrameIdx',
        outputs: [{ name: '', internalType: 'uint96', type: 'uint96' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [{ name: 'frameIdx', internalType: 'uint256', type: 'uint256' }],
        name: 'endTimes',
        outputs: [{ name: 'endTime', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [],
        name: 'frameDuration',
        outputs: [{ name: '', internalType: 'uint128', type: 'uint128' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [{ name: 'frameIdx', internalType: 'uint256', type: 'uint256' }],
        name: 'isPaidForWinners',
        outputs: [{ name: 'isPaid', internalType: 'bool', type: 'bool' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [],
        name: 'isPaused',
        outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: 'frameIdx', internalType: 'uint256', type: 'uint256' },
            { name: '', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'luckyNumbers',
        outputs: [{ name: '', internalType: 'uint24', type: 'uint24' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [],
        name: 'owner',
        outputs: [{ name: '', internalType: 'address', type: 'address' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [],
        name: 'powerPlayPrice',
        outputs: [{ name: '', internalType: 'uint128', type: 'uint128' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [],
        name: 'ticketPrice',
        outputs: [{ name: '', internalType: 'uint128', type: 'uint128' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: 'frameIdx', internalType: 'uint256', type: 'uint256' },
            { name: '', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'tickets',
        outputs: [
            { name: 'owner', internalType: 'address', type: 'address' },
            { name: 'isPowerPlay', internalType: 'bool', type: 'bool' },
        ],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: 'frameIdx', internalType: 'uint256', type: 'uint256' },
            { name: '', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'winningHistories',
        outputs: [
            { name: 'prize', internalType: 'uint72', type: 'uint72' },
            { name: 'ticketIdx', internalType: 'uint72', type: 'uint72' },
        ],
        stateMutability: 'view',
    },
];
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// LotteryTest
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
exports.lotteryTestAbi = [
    {
        type: 'error',
        inputs: [{ name: 'target', internalType: 'address', type: 'address' }],
        name: 'AddressEmptyCode',
    },
    {
        type: 'error',
        inputs: [
            { name: 'implementation', internalType: 'address', type: 'address' },
        ],
        name: 'ERC1967InvalidImplementation',
    },
    { type: 'error', inputs: [], name: 'ERC1967NonPayable' },
    { type: 'error', inputs: [], name: 'FailedInnerCall' },
    { type: 'error', inputs: [], name: 'InvalidInitialization' },
    { type: 'error', inputs: [], name: 'NotInitializing' },
    { type: 'error', inputs: [], name: 'UUPSUnauthorizedCallContext' },
    {
        type: 'error',
        inputs: [{ name: 'slot', internalType: 'bytes32', type: 'bytes32' }],
        name: 'UUPSUnsupportedProxiableUUID',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: 'version',
                internalType: 'uint64',
                type: 'uint64',
                indexed: false,
            },
        ],
        name: 'Initialized',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: 'implementation',
                internalType: 'address',
                type: 'address',
                indexed: true,
            },
        ],
        name: 'Upgraded',
    },
    {
        type: 'function',
        inputs: [],
        name: 'LOTTERY_PRIZES_FIVE_FIRST_NUMBER',
        outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [],
        name: 'LOTTERY_PRIZES_FOUR_FIRST_NUMBER',
        outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [],
        name: 'LOTTERY_PRIZES_FOUR_FIRST_NUMBER_AND_LAST_NUMBER',
        outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [],
        name: 'LOTTERY_PRIZES_JACKPOT',
        outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [],
        name: 'LOTTERY_PRIZES_LAST_NUMBER',
        outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [],
        name: 'LOTTERY_PRIZES_NOT_LUCKY',
        outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [],
        name: 'LOTTERY_PRIZES_THREE_FIRST_NUMBER',
        outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [],
        name: 'LOTTERY_PRIZES_THREE_FIRST_NUMBER_AND_LAST_NUMBER',
        outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [],
        name: 'LOTTERY_PRIZES_TWO_FIRST_NUMBER_AND_LAST_NUMBER',
        outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [],
        name: 'MAX_LUCKY_NUMBER_LAST_SLOT_VALUE',
        outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [],
        name: 'MAX_LUCKY_NUMBER_NORMAL_SLOT_VALUE',
        outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [],
        name: 'MAX_TICKET_AMOUNT_EACH_BUY',
        outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [],
        name: 'MIN_LUCKY_NUMBER_SLOT_VALUE',
        outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [],
        name: 'UPGRADE_INTERFACE_VERSION',
        outputs: [{ name: '', internalType: 'string', type: 'string' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [],
        name: 'blockNumber',
        outputs: [{ name: '', internalType: 'uint128', type: 'uint128' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: '_amount', internalType: 'uint256', type: 'uint256' },
            { name: '_isPowerPlay', internalType: 'bool', type: 'bool' },
            { name: '_ticketNumber', internalType: 'uint24[6]', type: 'uint24[6]' },
        ],
        name: 'buyTicket',
        outputs: [],
        stateMutability: 'payable',
    },
    {
        type: 'function',
        inputs: [],
        name: 'currentFrameIdx',
        outputs: [{ name: '', internalType: 'uint96', type: 'uint96' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [],
        name: 'drawing',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [{ name: 'frameIdx', internalType: 'uint256', type: 'uint256' }],
        name: 'endTimes',
        outputs: [{ name: 'endTime', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [],
        name: 'frameDuration',
        outputs: [{ name: '', internalType: 'uint128', type: 'uint128' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [{ name: '_frameIdx', internalType: 'uint256', type: 'uint256' }],
        name: 'getPrizeOfFrame',
        outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [{ name: 'frameIdx', internalType: 'uint256', type: 'uint256' }],
        name: 'getTickets',
        outputs: [
            {
                name: '',
                internalType: 'struct LotteryDeclaration.Ticket[]',
                type: 'tuple[]',
                components: [
                    { name: 'owner', internalType: 'address', type: 'address' },
                    { name: 'isPowerPlay', internalType: 'bool', type: 'bool' },
                    { name: 'luckyNumber', internalType: 'uint24[6]', type: 'uint24[6]' },
                ],
            },
        ],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [{ name: 'frameIdx', internalType: 'uint256', type: 'uint256' }],
        name: 'getWinningHistoryByFrame',
        outputs: [
            {
                name: '',
                internalType: 'struct LotteryDeclaration.Winning[]',
                type: 'tuple[]',
                components: [
                    { name: 'prize', internalType: 'uint72', type: 'uint72' },
                    { name: 'ticketIdx', internalType: 'uint72', type: 'uint72' },
                ],
            },
        ],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: '_endTime', internalType: 'uint128', type: 'uint128' },
            { name: '_frameDuration', internalType: 'uint128', type: 'uint128' },
            { name: '_ticketPrice', internalType: 'uint128', type: 'uint128' },
            { name: '_powerPlayPrice', internalType: 'uint128', type: 'uint128' },
        ],
        name: 'initialize',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [{ name: 'frameIdx', internalType: 'uint256', type: 'uint256' }],
        name: 'isPaidForWinners',
        outputs: [{ name: 'isPaid', internalType: 'bool', type: 'bool' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [],
        name: 'isPaused',
        outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: 'frameIdx', internalType: 'uint256', type: 'uint256' },
            { name: '', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'luckyNumbers',
        outputs: [{ name: '', internalType: 'uint24', type: 'uint24' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [],
        name: 'owner',
        outputs: [{ name: '', internalType: 'address', type: 'address' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [],
        name: 'pause',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [{ name: 'frameIdx', internalType: 'uint256', type: 'uint256' }],
        name: 'payForWinners',
        outputs: [],
        stateMutability: 'payable',
    },
    {
        type: 'function',
        inputs: [],
        name: 'powerPlayPrice',
        outputs: [{ name: '', internalType: 'uint128', type: 'uint128' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [],
        name: 'prepareDrawing',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [],
        name: 'proxiableUUID',
        outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [{ name: 'newEndTime', internalType: 'uint256', type: 'uint256' }],
        name: 'restart',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [
            { name: '_luckyNumber', internalType: 'uint24[6]', type: 'uint24[6]' },
        ],
        name: 'testDrawing',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [],
        name: 'ticketPrice',
        outputs: [{ name: '', internalType: 'uint128', type: 'uint128' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: 'frameIdx', internalType: 'uint256', type: 'uint256' },
            { name: '', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'tickets',
        outputs: [
            { name: 'owner', internalType: 'address', type: 'address' },
            { name: 'isPowerPlay', internalType: 'bool', type: 'bool' },
        ],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: 'newImplementation', internalType: 'address', type: 'address' },
            { name: 'data', internalType: 'bytes', type: 'bytes' },
        ],
        name: 'upgradeToAndCall',
        outputs: [],
        stateMutability: 'payable',
    },
    {
        type: 'function',
        inputs: [
            { name: 'frameIdx', internalType: 'uint256', type: 'uint256' },
            { name: '', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'winningHistories',
        outputs: [
            { name: 'prize', internalType: 'uint72', type: 'uint72' },
            { name: 'ticketIdx', internalType: 'uint72', type: 'uint72' },
        ],
        stateMutability: 'view',
    },
    { type: 'receive', stateMutability: 'payable' },
];
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// PayableUUPSUpgradeable
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
exports.payableUupsUpgradeableAbi = [
    {
        type: 'error',
        inputs: [{ name: 'target', internalType: 'address', type: 'address' }],
        name: 'AddressEmptyCode',
    },
    {
        type: 'error',
        inputs: [
            { name: 'implementation', internalType: 'address', type: 'address' },
        ],
        name: 'ERC1967InvalidImplementation',
    },
    { type: 'error', inputs: [], name: 'ERC1967NonPayable' },
    { type: 'error', inputs: [], name: 'FailedInnerCall' },
    { type: 'error', inputs: [], name: 'InvalidInitialization' },
    { type: 'error', inputs: [], name: 'NotInitializing' },
    { type: 'error', inputs: [], name: 'UUPSUnauthorizedCallContext' },
    {
        type: 'error',
        inputs: [{ name: 'slot', internalType: 'bytes32', type: 'bytes32' }],
        name: 'UUPSUnsupportedProxiableUUID',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: 'version',
                internalType: 'uint64',
                type: 'uint64',
                indexed: false,
            },
        ],
        name: 'Initialized',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: 'implementation',
                internalType: 'address',
                type: 'address',
                indexed: true,
            },
        ],
        name: 'Upgraded',
    },
    {
        type: 'function',
        inputs: [],
        name: 'UPGRADE_INTERFACE_VERSION',
        outputs: [{ name: '', internalType: 'string', type: 'string' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [],
        name: 'proxiableUUID',
        outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: 'newImplementation', internalType: 'address', type: 'address' },
            { name: 'data', internalType: 'bytes', type: 'bytes' },
        ],
        name: 'upgradeToAndCall',
        outputs: [],
        stateMutability: 'payable',
    },
    { type: 'receive', stateMutability: 'payable' },
];
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// UUPSUpgradeable
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
exports.uupsUpgradeableAbi = [
    {
        type: 'error',
        inputs: [{ name: 'target', internalType: 'address', type: 'address' }],
        name: 'AddressEmptyCode',
    },
    {
        type: 'error',
        inputs: [
            { name: 'implementation', internalType: 'address', type: 'address' },
        ],
        name: 'ERC1967InvalidImplementation',
    },
    { type: 'error', inputs: [], name: 'ERC1967NonPayable' },
    { type: 'error', inputs: [], name: 'FailedInnerCall' },
    { type: 'error', inputs: [], name: 'InvalidInitialization' },
    { type: 'error', inputs: [], name: 'NotInitializing' },
    { type: 'error', inputs: [], name: 'UUPSUnauthorizedCallContext' },
    {
        type: 'error',
        inputs: [{ name: 'slot', internalType: 'bytes32', type: 'bytes32' }],
        name: 'UUPSUnsupportedProxiableUUID',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: 'version',
                internalType: 'uint64',
                type: 'uint64',
                indexed: false,
            },
        ],
        name: 'Initialized',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: 'implementation',
                internalType: 'address',
                type: 'address',
                indexed: true,
            },
        ],
        name: 'Upgraded',
    },
    {
        type: 'function',
        inputs: [],
        name: 'UPGRADE_INTERFACE_VERSION',
        outputs: [{ name: '', internalType: 'string', type: 'string' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [],
        name: 'proxiableUUID',
        outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: 'newImplementation', internalType: 'address', type: 'address' },
            { name: 'data', internalType: 'bytes', type: 'bytes' },
        ],
        name: 'upgradeToAndCall',
        outputs: [],
        stateMutability: 'payable',
    },
];
