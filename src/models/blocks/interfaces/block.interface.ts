import { INetwork } from "../../networks/interfaces/network.interface";

export interface IBlock {
  id: number;
  network: INetwork;
}
