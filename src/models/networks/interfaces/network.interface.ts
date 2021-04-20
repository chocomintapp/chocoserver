import { IBlock } from "../../blocks/interfaces/block.interface";

export interface INetwork {
  id: number;
  name: string;
  blocks?: IBlock[];
}
