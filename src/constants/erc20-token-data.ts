import { ERC20_ABI } from "@/utils/constants";
import { zeroAddress } from "viem";

export const erc20TokenData =
    [
        {
            ticker: "DEGEN",
            contractAddress: "0x4ed4E862860beD51a9570b96d89aF5E1B0Efefed",
            decimal: 18,
        },
        {
            ticker: "USDC",
            contractAddress: "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
            decimal: 6,
        },
        {
            ticker: "ETH",
            contractAddress: zeroAddress,
            decimal: 18,
        }
    ]