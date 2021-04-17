import { ethers } from "ethers";
import configs from "../configs.json";

export const sync = async () => {
  console.log("test");
  const jsonRpcProvider = new ethers.providers.JsonRpcProvider(configs.rpc.bsc);
  const blockNumber = await jsonRpcProvider.getBlockNumber();
  console.log(blockNumber);
  // const blockWithTransactions = await jsonRpcProvider.getBlockWithTransactions(9837019);
  // console.log(blockWithTransactions);
};

sync();
