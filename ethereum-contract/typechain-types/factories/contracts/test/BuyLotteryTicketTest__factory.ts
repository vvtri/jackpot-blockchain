/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../common";
import type {
  BuyLotteryTicketTest,
  BuyLotteryTicketTestInterface,
} from "../../../contracts/test/BuyLotteryTicketTest";

const _abi = [
  {
    inputs: [
      {
        internalType: "address payable",
        name: "lottery",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "ticketAmount",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "isPowerPlay",
        type: "bool",
      },
      {
        internalType: "uint24[]",
        name: "ticketNumber",
        type: "uint24[]",
      },
    ],
    name: "buyLottery",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
] as const;

const _bytecode =
  "0x6080806040523461001657610422908161001c8239f35b600080fdfe608060409080825260049081361015610023575b505050361561002157600080fd5b005b600092833560e01c633f4be6251461003b5750610013565b60807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261036f5782359073ffffffffffffffffffffffffffffffffffffffff821680920361036b57602492604435801515809103610367576064359367ffffffffffffffff9283861161036357366023870112156103635785880135958487116102d9578660051b906020976100d689840185610373565b83528783018981938301019136831161035f579189959396918b8e969401905b82821061032c575050508751958691868301937fd598456600000000000000000000000000000000000000000000000000000000855260848401918d8035908601526044850152606060648501525180915260a483019190865b818110610305575050508495500394610171601f1996878101835282610373565b519134905af1913d156102fd573d908082116102eb5784519161019b8785601f8401160184610373565b82523d898784013e5b845190818601908111828210176102d9576102668a948861025a879661022a8d978c978852601581527f6275794c6f74746572792072657475726e6461746100000000000000000000008582015287519788958601997f4b5c4277000000000000000000000000000000000000000000000000000000008b5286015260648501906103ac565b907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdc8483030160448501526103ac565b03908101835282610373565b51906a636f6e736f6c652e6c6f675afa5015610280578480f35b517f08c379a000000000000000000000000000000000000000000000000000000000815292830152601a908201527f43616e206e6f7420627579206c6f7474657279207469636b65740000000000006044820152606490fd5b878a60418b634e487b7160e01b835252fd5b868960418a634e487b7160e01b835252fd5b6060906101a4565b935093955093958060019262ffffff875116815201940191019286918d95938b9795610150565b919395508092979496503562ffffff8116810361035b57818b9291839252019101918c94928a969497926100f6565b8d80fd5b8c80fd5b8880fd5b8680fd5b8480fd5b8380fd5b90601f601f19910116810190811067ffffffffffffffff82111761039657604052565b634e487b7160e01b600052604160045260246000fd5b919082519283825260005b8481106103d8575050601f19601f8460006020809697860101520116010190565b6020818301810151848301820152016103b756fea2646970667358221220dc85e934dca5728e7b3c8aa9231e4908481b5ca610468d82674f7eba9ab9ed5564736f6c63430008180033";

type BuyLotteryTicketTestConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: BuyLotteryTicketTestConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class BuyLotteryTicketTest__factory extends ContractFactory {
  constructor(...args: BuyLotteryTicketTestConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(overrides || {});
  }
  override deploy(overrides?: NonPayableOverrides & { from?: string }) {
    return super.deploy(overrides || {}) as Promise<
      BuyLotteryTicketTest & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(
    runner: ContractRunner | null
  ): BuyLotteryTicketTest__factory {
    return super.connect(runner) as BuyLotteryTicketTest__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BuyLotteryTicketTestInterface {
    return new Interface(_abi) as BuyLotteryTicketTestInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): BuyLotteryTicketTest {
    return new Contract(
      address,
      _abi,
      runner
    ) as unknown as BuyLotteryTicketTest;
  }
}
