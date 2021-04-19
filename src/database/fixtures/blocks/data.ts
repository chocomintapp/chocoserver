import { IBlock } from "../../../models/blocks/interfaces/block.interface";
import { networks } from "../../seeders/networks/data";
const network = networks[0];

export const blocks: IBlock[] = [
  { number: 1, network },
  { number: 2, network },
  { number: 3, network },
  { number: 4, network },
  { number: 5, network },
  { number: 6, network },
  { number: 7, network },
  { number: 8, network },
  { number: 9, network },
  { number: 10, network },
];
