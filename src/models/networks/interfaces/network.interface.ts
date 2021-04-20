import { IBlock } from "../../blocks/interfaces/block.interface";

export interface INetwork {
  chainId: number;
  name: string;
  blocks?: IBlock[];
}
