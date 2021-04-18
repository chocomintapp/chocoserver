import { IBlock } from '../../blocks/interfaces/block.interface';

export interface INetwork {
  chainId: string;
  name: string;
  blocks?: IBlock[];
}
