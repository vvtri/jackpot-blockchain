/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  EventFragment,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
  TypedListener,
  TypedContractMethod,
} from "../../common";

export declare namespace LotteryDeclaration {
  export type DrawPrizeDetailDtoStruct = {
    money: BigNumberish;
    winners: AddressLike[];
  };

  export type DrawPrizeDetailDtoStructOutput = [
    money: bigint,
    winners: string[]
  ] & { money: bigint; winners: string[] };

  export type DrawDetailDtoStruct = {
    endTime: BigNumberish;
    luckyNumber: BigNumberish[];
    jackpot: LotteryDeclaration.DrawPrizeDetailDtoStruct;
    matchFive: LotteryDeclaration.DrawPrizeDetailDtoStruct;
    matchFourAndLast: LotteryDeclaration.DrawPrizeDetailDtoStruct;
    matchFour: LotteryDeclaration.DrawPrizeDetailDtoStruct;
    matchThreeAndLast: LotteryDeclaration.DrawPrizeDetailDtoStruct;
    matchThree: LotteryDeclaration.DrawPrizeDetailDtoStruct;
    matchTwoAndLast: LotteryDeclaration.DrawPrizeDetailDtoStruct;
    matchLast: LotteryDeclaration.DrawPrizeDetailDtoStruct;
  };

  export type DrawDetailDtoStructOutput = [
    endTime: bigint,
    luckyNumber: bigint[],
    jackpot: LotteryDeclaration.DrawPrizeDetailDtoStructOutput,
    matchFive: LotteryDeclaration.DrawPrizeDetailDtoStructOutput,
    matchFourAndLast: LotteryDeclaration.DrawPrizeDetailDtoStructOutput,
    matchFour: LotteryDeclaration.DrawPrizeDetailDtoStructOutput,
    matchThreeAndLast: LotteryDeclaration.DrawPrizeDetailDtoStructOutput,
    matchThree: LotteryDeclaration.DrawPrizeDetailDtoStructOutput,
    matchTwoAndLast: LotteryDeclaration.DrawPrizeDetailDtoStructOutput,
    matchLast: LotteryDeclaration.DrawPrizeDetailDtoStructOutput
  ] & {
    endTime: bigint;
    luckyNumber: bigint[];
    jackpot: LotteryDeclaration.DrawPrizeDetailDtoStructOutput;
    matchFive: LotteryDeclaration.DrawPrizeDetailDtoStructOutput;
    matchFourAndLast: LotteryDeclaration.DrawPrizeDetailDtoStructOutput;
    matchFour: LotteryDeclaration.DrawPrizeDetailDtoStructOutput;
    matchThreeAndLast: LotteryDeclaration.DrawPrizeDetailDtoStructOutput;
    matchThree: LotteryDeclaration.DrawPrizeDetailDtoStructOutput;
    matchTwoAndLast: LotteryDeclaration.DrawPrizeDetailDtoStructOutput;
    matchLast: LotteryDeclaration.DrawPrizeDetailDtoStructOutput;
  };

  export type PaginationRequestDtoStruct = {
    page: BigNumberish;
    size: BigNumberish;
  };

  export type PaginationRequestDtoStructOutput = [
    page: bigint,
    size: bigint
  ] & { page: bigint; size: bigint };

  export type DrawStatisticDtoStruct = {
    endTime: BigNumberish;
    frameIdx: BigNumberish;
    isExist: boolean;
    isFuture: boolean;
    luckyNumber: BigNumberish[];
    jackpotWinners: AddressLike[];
    matchFiveWinners: AddressLike[];
  };

  export type DrawStatisticDtoStructOutput = [
    endTime: bigint,
    frameIdx: bigint,
    isExist: boolean,
    isFuture: boolean,
    luckyNumber: bigint[],
    jackpotWinners: string[],
    matchFiveWinners: string[]
  ] & {
    endTime: bigint;
    frameIdx: bigint;
    isExist: boolean;
    isFuture: boolean;
    luckyNumber: bigint[];
    jackpotWinners: string[];
    matchFiveWinners: string[];
  };

  export type DrawListDtoStruct = {
    draws: LotteryDeclaration.DrawStatisticDtoStruct[];
    totalPage: BigNumberish;
  };

  export type DrawListDtoStructOutput = [
    draws: LotteryDeclaration.DrawStatisticDtoStructOutput[],
    totalPage: bigint
  ] & {
    draws: LotteryDeclaration.DrawStatisticDtoStructOutput[];
    totalPage: bigint;
  };

  export type HomeStatisticDtoStruct = {
    nextDraw: LotteryDeclaration.DrawStatisticDtoStruct;
    lastDraw: LotteryDeclaration.DrawStatisticDtoStruct;
  };

  export type HomeStatisticDtoStructOutput = [
    nextDraw: LotteryDeclaration.DrawStatisticDtoStructOutput,
    lastDraw: LotteryDeclaration.DrawStatisticDtoStructOutput
  ] & {
    nextDraw: LotteryDeclaration.DrawStatisticDtoStructOutput;
    lastDraw: LotteryDeclaration.DrawStatisticDtoStructOutput;
  };

  export type TicketDtoStruct = {
    luckyNumber: BigNumberish[];
    isPowerPlay: boolean;
    frameIdx: BigNumberish;
    endTime: BigNumberish;
    prize: BigNumberish;
  };

  export type TicketDtoStructOutput = [
    luckyNumber: bigint[],
    isPowerPlay: boolean,
    frameIdx: bigint,
    endTime: bigint,
    prize: bigint
  ] & {
    luckyNumber: bigint[];
    isPowerPlay: boolean;
    frameIdx: bigint;
    endTime: bigint;
    prize: bigint;
  };

  export type TicketStruct = {
    owner: AddressLike;
    isPowerPlay: boolean;
    luckyNumber: BigNumberish[];
  };

  export type TicketStructOutput = [
    owner: string,
    isPowerPlay: boolean,
    luckyNumber: bigint[]
  ] & { owner: string; isPowerPlay: boolean; luckyNumber: bigint[] };

  export type WinningStruct = { prize: BigNumberish; ticketIdx: BigNumberish };

  export type WinningStructOutput = [prize: bigint, ticketIdx: bigint] & {
    prize: bigint;
    ticketIdx: bigint;
  };
}

export interface LotteryTestInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "LOTTERY_PRIZES_FIVE_FIRST_NUMBER"
      | "LOTTERY_PRIZES_FOUR_FIRST_NUMBER"
      | "LOTTERY_PRIZES_FOUR_FIRST_NUMBER_AND_LAST_NUMBER"
      | "LOTTERY_PRIZES_JACKPOT"
      | "LOTTERY_PRIZES_LAST_NUMBER"
      | "LOTTERY_PRIZES_NOT_LUCKY"
      | "LOTTERY_PRIZES_THREE_FIRST_NUMBER"
      | "LOTTERY_PRIZES_THREE_FIRST_NUMBER_AND_LAST_NUMBER"
      | "LOTTERY_PRIZES_TWO_FIRST_NUMBER_AND_LAST_NUMBER"
      | "MAX_LUCKY_NUMBER_LAST_SLOT_VALUE"
      | "MAX_LUCKY_NUMBER_NORMAL_SLOT_VALUE"
      | "MAX_TICKET_AMOUNT_EACH_BUY"
      | "MIN_LUCKY_NUMBER_SLOT_VALUE"
      | "UPGRADE_INTERFACE_VERSION"
      | "automationOracle"
      | "automationOracleDrawing"
      | "blockNumber"
      | "buyTicket"
      | "currentFrameIdx"
      | "drawing"
      | "endTimes"
      | "frameDuration"
      | "getDrawDetail"
      | "getDrawList"
      | "getHomeStatistic"
      | "getMyTicketList"
      | "getPrizeOfFrame"
      | "getTickets"
      | "getWinningHistoryByFrame"
      | "initialize"
      | "isPaidForWinners"
      | "isPaused"
      | "luckyNumbers"
      | "owner"
      | "pause"
      | "payForWinners"
      | "powerPlayPrice"
      | "prepareDrawing"
      | "proxiableUUID"
      | "restart(uint256)"
      | "restart()"
      | "setAutomationOracle"
      | "setAutomationOracleDrawing"
      | "setCurrentEndTime"
      | "shouldDrawing"
      | "shouldPreparingDrawing"
      | "testDrawing"
      | "ticketPrice"
      | "tickets"
      | "upgradeToAndCall"
      | "winningHistories"
      | "withdraw"
  ): FunctionFragment;

  getEvent(nameOrSignatureOrTopic: "Initialized" | "Upgraded"): EventFragment;

  encodeFunctionData(
    functionFragment: "LOTTERY_PRIZES_FIVE_FIRST_NUMBER",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "LOTTERY_PRIZES_FOUR_FIRST_NUMBER",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "LOTTERY_PRIZES_FOUR_FIRST_NUMBER_AND_LAST_NUMBER",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "LOTTERY_PRIZES_JACKPOT",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "LOTTERY_PRIZES_LAST_NUMBER",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "LOTTERY_PRIZES_NOT_LUCKY",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "LOTTERY_PRIZES_THREE_FIRST_NUMBER",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "LOTTERY_PRIZES_THREE_FIRST_NUMBER_AND_LAST_NUMBER",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "LOTTERY_PRIZES_TWO_FIRST_NUMBER_AND_LAST_NUMBER",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "MAX_LUCKY_NUMBER_LAST_SLOT_VALUE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "MAX_LUCKY_NUMBER_NORMAL_SLOT_VALUE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "MAX_TICKET_AMOUNT_EACH_BUY",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "MIN_LUCKY_NUMBER_SLOT_VALUE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "UPGRADE_INTERFACE_VERSION",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "automationOracle",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "automationOracleDrawing",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "blockNumber",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "buyTicket",
    values: [BigNumberish, boolean, BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "currentFrameIdx",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "drawing", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "endTimes",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "frameDuration",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getDrawDetail",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getDrawList",
    values: [LotteryDeclaration.PaginationRequestDtoStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "getHomeStatistic",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getMyTicketList",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getPrizeOfFrame",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getTickets",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getWinningHistoryByFrame",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [BigNumberish, BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "isPaidForWinners",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "isPaused", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "luckyNumbers",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(functionFragment: "pause", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "payForWinners",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "powerPlayPrice",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "prepareDrawing",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "proxiableUUID",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "restart(uint256)",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "restart()", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "setAutomationOracle",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setAutomationOracleDrawing",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setCurrentEndTime",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "shouldDrawing",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "shouldPreparingDrawing",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "testDrawing",
    values: [BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "ticketPrice",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "tickets",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "upgradeToAndCall",
    values: [AddressLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "winningHistories",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "withdraw", values?: undefined): string;

  decodeFunctionResult(
    functionFragment: "LOTTERY_PRIZES_FIVE_FIRST_NUMBER",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "LOTTERY_PRIZES_FOUR_FIRST_NUMBER",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "LOTTERY_PRIZES_FOUR_FIRST_NUMBER_AND_LAST_NUMBER",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "LOTTERY_PRIZES_JACKPOT",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "LOTTERY_PRIZES_LAST_NUMBER",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "LOTTERY_PRIZES_NOT_LUCKY",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "LOTTERY_PRIZES_THREE_FIRST_NUMBER",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "LOTTERY_PRIZES_THREE_FIRST_NUMBER_AND_LAST_NUMBER",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "LOTTERY_PRIZES_TWO_FIRST_NUMBER_AND_LAST_NUMBER",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "MAX_LUCKY_NUMBER_LAST_SLOT_VALUE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "MAX_LUCKY_NUMBER_NORMAL_SLOT_VALUE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "MAX_TICKET_AMOUNT_EACH_BUY",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "MIN_LUCKY_NUMBER_SLOT_VALUE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "UPGRADE_INTERFACE_VERSION",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "automationOracle",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "automationOracleDrawing",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "blockNumber",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "buyTicket", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "currentFrameIdx",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "drawing", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "endTimes", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "frameDuration",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getDrawDetail",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getDrawList",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getHomeStatistic",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getMyTicketList",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getPrizeOfFrame",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getTickets", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getWinningHistoryByFrame",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "isPaidForWinners",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "isPaused", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "luckyNumbers",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "pause", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "payForWinners",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "powerPlayPrice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "prepareDrawing",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "proxiableUUID",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "restart(uint256)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "restart()", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setAutomationOracle",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setAutomationOracleDrawing",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setCurrentEndTime",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "shouldDrawing",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "shouldPreparingDrawing",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "testDrawing",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "ticketPrice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "tickets", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "upgradeToAndCall",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "winningHistories",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;
}

export namespace InitializedEvent {
  export type InputTuple = [version: BigNumberish];
  export type OutputTuple = [version: bigint];
  export interface OutputObject {
    version: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace UpgradedEvent {
  export type InputTuple = [implementation: AddressLike];
  export type OutputTuple = [implementation: string];
  export interface OutputObject {
    implementation: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface LotteryTest extends BaseContract {
  connect(runner?: ContractRunner | null): LotteryTest;
  waitForDeployment(): Promise<this>;

  interface: LotteryTestInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  LOTTERY_PRIZES_FIVE_FIRST_NUMBER: TypedContractMethod<[], [bigint], "view">;

  LOTTERY_PRIZES_FOUR_FIRST_NUMBER: TypedContractMethod<[], [bigint], "view">;

  LOTTERY_PRIZES_FOUR_FIRST_NUMBER_AND_LAST_NUMBER: TypedContractMethod<
    [],
    [bigint],
    "view"
  >;

  LOTTERY_PRIZES_JACKPOT: TypedContractMethod<[], [bigint], "view">;

  LOTTERY_PRIZES_LAST_NUMBER: TypedContractMethod<[], [bigint], "view">;

  LOTTERY_PRIZES_NOT_LUCKY: TypedContractMethod<[], [bigint], "view">;

  LOTTERY_PRIZES_THREE_FIRST_NUMBER: TypedContractMethod<[], [bigint], "view">;

  LOTTERY_PRIZES_THREE_FIRST_NUMBER_AND_LAST_NUMBER: TypedContractMethod<
    [],
    [bigint],
    "view"
  >;

  LOTTERY_PRIZES_TWO_FIRST_NUMBER_AND_LAST_NUMBER: TypedContractMethod<
    [],
    [bigint],
    "view"
  >;

  MAX_LUCKY_NUMBER_LAST_SLOT_VALUE: TypedContractMethod<[], [bigint], "view">;

  MAX_LUCKY_NUMBER_NORMAL_SLOT_VALUE: TypedContractMethod<[], [bigint], "view">;

  MAX_TICKET_AMOUNT_EACH_BUY: TypedContractMethod<[], [bigint], "view">;

  MIN_LUCKY_NUMBER_SLOT_VALUE: TypedContractMethod<[], [bigint], "view">;

  UPGRADE_INTERFACE_VERSION: TypedContractMethod<[], [string], "view">;

  automationOracle: TypedContractMethod<[], [string], "view">;

  automationOracleDrawing: TypedContractMethod<[], [string], "view">;

  blockNumber: TypedContractMethod<[], [bigint], "view">;

  buyTicket: TypedContractMethod<
    [
      _amount: BigNumberish,
      _isPowerPlay: boolean,
      _ticketNumber: BigNumberish[]
    ],
    [void],
    "payable"
  >;

  currentFrameIdx: TypedContractMethod<[], [bigint], "view">;

  drawing: TypedContractMethod<[], [void], "nonpayable">;

  endTimes: TypedContractMethod<[frameIdx: BigNumberish], [bigint], "view">;

  frameDuration: TypedContractMethod<[], [bigint], "view">;

  getDrawDetail: TypedContractMethod<
    [frameIdx: BigNumberish],
    [LotteryDeclaration.DrawDetailDtoStructOutput],
    "view"
  >;

  getDrawList: TypedContractMethod<
    [paginationDto: LotteryDeclaration.PaginationRequestDtoStruct],
    [LotteryDeclaration.DrawListDtoStructOutput],
    "view"
  >;

  getHomeStatistic: TypedContractMethod<
    [],
    [LotteryDeclaration.HomeStatisticDtoStructOutput],
    "view"
  >;

  getMyTicketList: TypedContractMethod<
    [],
    [LotteryDeclaration.TicketDtoStructOutput[]],
    "view"
  >;

  getPrizeOfFrame: TypedContractMethod<
    [_frameIdx: BigNumberish],
    [bigint],
    "view"
  >;

  getTickets: TypedContractMethod<
    [frameIdx: BigNumberish],
    [LotteryDeclaration.TicketStructOutput[]],
    "view"
  >;

  getWinningHistoryByFrame: TypedContractMethod<
    [frameIdx: BigNumberish],
    [LotteryDeclaration.WinningStructOutput[]],
    "view"
  >;

  initialize: TypedContractMethod<
    [
      _endTime: BigNumberish,
      _frameDuration: BigNumberish,
      _ticketPrice: BigNumberish,
      _powerPlayPrice: BigNumberish
    ],
    [void],
    "nonpayable"
  >;

  isPaidForWinners: TypedContractMethod<
    [frameIdx: BigNumberish],
    [boolean],
    "view"
  >;

  isPaused: TypedContractMethod<[], [boolean], "view">;

  luckyNumbers: TypedContractMethod<
    [frameIdx: BigNumberish, arg1: BigNumberish],
    [bigint],
    "view"
  >;

  owner: TypedContractMethod<[], [string], "view">;

  pause: TypedContractMethod<[], [void], "nonpayable">;

  payForWinners: TypedContractMethod<
    [frameIdx: BigNumberish],
    [void],
    "payable"
  >;

  powerPlayPrice: TypedContractMethod<[], [bigint], "view">;

  prepareDrawing: TypedContractMethod<[], [void], "nonpayable">;

  proxiableUUID: TypedContractMethod<[], [string], "view">;

  "restart(uint256)": TypedContractMethod<
    [newEndTime: BigNumberish],
    [void],
    "nonpayable"
  >;

  "restart()": TypedContractMethod<[], [void], "nonpayable">;

  setAutomationOracle: TypedContractMethod<
    [_automationOracle: AddressLike],
    [void],
    "nonpayable"
  >;

  setAutomationOracleDrawing: TypedContractMethod<
    [_automationOracleDrawing: AddressLike],
    [void],
    "nonpayable"
  >;

  setCurrentEndTime: TypedContractMethod<
    [currentEndTime: BigNumberish],
    [void],
    "nonpayable"
  >;

  shouldDrawing: TypedContractMethod<[], [boolean], "view">;

  shouldPreparingDrawing: TypedContractMethod<[], [boolean], "view">;

  testDrawing: TypedContractMethod<
    [_luckyNumber: BigNumberish[]],
    [void],
    "nonpayable"
  >;

  ticketPrice: TypedContractMethod<[], [bigint], "view">;

  tickets: TypedContractMethod<
    [frameIdx: BigNumberish, arg1: BigNumberish],
    [[string, boolean] & { owner: string; isPowerPlay: boolean }],
    "view"
  >;

  upgradeToAndCall: TypedContractMethod<
    [newImplementation: AddressLike, data: BytesLike],
    [void],
    "payable"
  >;

  winningHistories: TypedContractMethod<
    [frameIdx: BigNumberish, arg1: BigNumberish],
    [[bigint, bigint] & { prize: bigint; ticketIdx: bigint }],
    "view"
  >;

  withdraw: TypedContractMethod<[], [void], "nonpayable">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "LOTTERY_PRIZES_FIVE_FIRST_NUMBER"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "LOTTERY_PRIZES_FOUR_FIRST_NUMBER"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "LOTTERY_PRIZES_FOUR_FIRST_NUMBER_AND_LAST_NUMBER"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "LOTTERY_PRIZES_JACKPOT"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "LOTTERY_PRIZES_LAST_NUMBER"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "LOTTERY_PRIZES_NOT_LUCKY"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "LOTTERY_PRIZES_THREE_FIRST_NUMBER"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "LOTTERY_PRIZES_THREE_FIRST_NUMBER_AND_LAST_NUMBER"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "LOTTERY_PRIZES_TWO_FIRST_NUMBER_AND_LAST_NUMBER"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "MAX_LUCKY_NUMBER_LAST_SLOT_VALUE"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "MAX_LUCKY_NUMBER_NORMAL_SLOT_VALUE"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "MAX_TICKET_AMOUNT_EACH_BUY"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "MIN_LUCKY_NUMBER_SLOT_VALUE"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "UPGRADE_INTERFACE_VERSION"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "automationOracle"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "automationOracleDrawing"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "blockNumber"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "buyTicket"
  ): TypedContractMethod<
    [
      _amount: BigNumberish,
      _isPowerPlay: boolean,
      _ticketNumber: BigNumberish[]
    ],
    [void],
    "payable"
  >;
  getFunction(
    nameOrSignature: "currentFrameIdx"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "drawing"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "endTimes"
  ): TypedContractMethod<[frameIdx: BigNumberish], [bigint], "view">;
  getFunction(
    nameOrSignature: "frameDuration"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "getDrawDetail"
  ): TypedContractMethod<
    [frameIdx: BigNumberish],
    [LotteryDeclaration.DrawDetailDtoStructOutput],
    "view"
  >;
  getFunction(
    nameOrSignature: "getDrawList"
  ): TypedContractMethod<
    [paginationDto: LotteryDeclaration.PaginationRequestDtoStruct],
    [LotteryDeclaration.DrawListDtoStructOutput],
    "view"
  >;
  getFunction(
    nameOrSignature: "getHomeStatistic"
  ): TypedContractMethod<
    [],
    [LotteryDeclaration.HomeStatisticDtoStructOutput],
    "view"
  >;
  getFunction(
    nameOrSignature: "getMyTicketList"
  ): TypedContractMethod<
    [],
    [LotteryDeclaration.TicketDtoStructOutput[]],
    "view"
  >;
  getFunction(
    nameOrSignature: "getPrizeOfFrame"
  ): TypedContractMethod<[_frameIdx: BigNumberish], [bigint], "view">;
  getFunction(
    nameOrSignature: "getTickets"
  ): TypedContractMethod<
    [frameIdx: BigNumberish],
    [LotteryDeclaration.TicketStructOutput[]],
    "view"
  >;
  getFunction(
    nameOrSignature: "getWinningHistoryByFrame"
  ): TypedContractMethod<
    [frameIdx: BigNumberish],
    [LotteryDeclaration.WinningStructOutput[]],
    "view"
  >;
  getFunction(
    nameOrSignature: "initialize"
  ): TypedContractMethod<
    [
      _endTime: BigNumberish,
      _frameDuration: BigNumberish,
      _ticketPrice: BigNumberish,
      _powerPlayPrice: BigNumberish
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "isPaidForWinners"
  ): TypedContractMethod<[frameIdx: BigNumberish], [boolean], "view">;
  getFunction(
    nameOrSignature: "isPaused"
  ): TypedContractMethod<[], [boolean], "view">;
  getFunction(
    nameOrSignature: "luckyNumbers"
  ): TypedContractMethod<
    [frameIdx: BigNumberish, arg1: BigNumberish],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "owner"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "pause"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "payForWinners"
  ): TypedContractMethod<[frameIdx: BigNumberish], [void], "payable">;
  getFunction(
    nameOrSignature: "powerPlayPrice"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "prepareDrawing"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "proxiableUUID"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "restart(uint256)"
  ): TypedContractMethod<[newEndTime: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "restart()"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "setAutomationOracle"
  ): TypedContractMethod<
    [_automationOracle: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setAutomationOracleDrawing"
  ): TypedContractMethod<
    [_automationOracleDrawing: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setCurrentEndTime"
  ): TypedContractMethod<[currentEndTime: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "shouldDrawing"
  ): TypedContractMethod<[], [boolean], "view">;
  getFunction(
    nameOrSignature: "shouldPreparingDrawing"
  ): TypedContractMethod<[], [boolean], "view">;
  getFunction(
    nameOrSignature: "testDrawing"
  ): TypedContractMethod<[_luckyNumber: BigNumberish[]], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "ticketPrice"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "tickets"
  ): TypedContractMethod<
    [frameIdx: BigNumberish, arg1: BigNumberish],
    [[string, boolean] & { owner: string; isPowerPlay: boolean }],
    "view"
  >;
  getFunction(
    nameOrSignature: "upgradeToAndCall"
  ): TypedContractMethod<
    [newImplementation: AddressLike, data: BytesLike],
    [void],
    "payable"
  >;
  getFunction(
    nameOrSignature: "winningHistories"
  ): TypedContractMethod<
    [frameIdx: BigNumberish, arg1: BigNumberish],
    [[bigint, bigint] & { prize: bigint; ticketIdx: bigint }],
    "view"
  >;
  getFunction(
    nameOrSignature: "withdraw"
  ): TypedContractMethod<[], [void], "nonpayable">;

  getEvent(
    key: "Initialized"
  ): TypedContractEvent<
    InitializedEvent.InputTuple,
    InitializedEvent.OutputTuple,
    InitializedEvent.OutputObject
  >;
  getEvent(
    key: "Upgraded"
  ): TypedContractEvent<
    UpgradedEvent.InputTuple,
    UpgradedEvent.OutputTuple,
    UpgradedEvent.OutputObject
  >;

  filters: {
    "Initialized(uint64)": TypedContractEvent<
      InitializedEvent.InputTuple,
      InitializedEvent.OutputTuple,
      InitializedEvent.OutputObject
    >;
    Initialized: TypedContractEvent<
      InitializedEvent.InputTuple,
      InitializedEvent.OutputTuple,
      InitializedEvent.OutputObject
    >;

    "Upgraded(address)": TypedContractEvent<
      UpgradedEvent.InputTuple,
      UpgradedEvent.OutputTuple,
      UpgradedEvent.OutputObject
    >;
    Upgraded: TypedContractEvent<
      UpgradedEvent.InputTuple,
      UpgradedEvent.OutputTuple,
      UpgradedEvent.OutputObject
    >;
  };
}
