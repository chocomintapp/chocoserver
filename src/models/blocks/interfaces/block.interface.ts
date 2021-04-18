import { INetwork } from '../../networks/interfaces/network.interface';

export interface IBlock {
  number: number;
  network: INetwork;
}
