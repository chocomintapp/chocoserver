import { ethers } from "ethers";
import configs from "../configs.json";

export const sync = async () => {
  console.log("test");
  const jsonRpcProvider = new ethers.providers.JsonRpcProvider(configs.rpc.mainnet);
  const blockNumber = await jsonRpcProvider.getBlockNumber();
  console.log(blockNumber);
};

sync();
