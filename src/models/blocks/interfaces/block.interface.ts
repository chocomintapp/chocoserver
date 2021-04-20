import { INetwork } from "../../networks/interfaces/network.interface";

export interface IBlock {
  blockNumber: number;
  network: INetwork;
}
