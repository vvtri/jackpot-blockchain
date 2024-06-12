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
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from 'ethers';
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedListener,
  TypedContractMethod,
} from '../../common';

export interface BuyLotteryTicketTestInterface extends Interface {
  getFunction(nameOrSignature: 'buyLottery'): FunctionFragment;

  encodeFunctionData(
    functionFragment: 'buyLottery',
    values: [AddressLike, BigNumberish, boolean, BigNumberish[]],
  ): string;

  decodeFunctionResult(functionFragment: 'buyLottery', data: BytesLike): Result;
}

export interface BuyLotteryTicketTest extends BaseContract {
  connect(runner?: ContractRunner | null): BuyLotteryTicketTest;
  waitForDeployment(): Promise<this>;

  interface: BuyLotteryTicketTestInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined,
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined,
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>,
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>,
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>,
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>,
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent,
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent,
  ): Promise<this>;

  buyLottery: TypedContractMethod<
    [
      lottery: AddressLike,
      ticketAmount: BigNumberish,
      isPowerPlay: boolean,
      ticketNumber: BigNumberish[],
    ],
    [void],
    'payable'
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment,
  ): T;

  getFunction(
    nameOrSignature: 'buyLottery',
  ): TypedContractMethod<
    [
      lottery: AddressLike,
      ticketAmount: BigNumberish,
      isPowerPlay: boolean,
      ticketNumber: BigNumberish[],
    ],
    [void],
    'payable'
  >;

  filters: {};
}
