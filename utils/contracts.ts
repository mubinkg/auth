import { chain } from "@/app/chain";
import { client } from "@/app/client";
import { getContract } from "thirdweb";
import { stakingABI } from "./stakingABI";

const nftContractAddress = "0x4D5553825Ffb5f9B002DF2b11ED55bffC1145ecd";
const rewardTokenContractAddress = "0x8bC85e7deE8a1E70b1a794db14467697d44081B5";
const stakingContractAddress = "0xd3f10E12FA824307295335830F04A13BEa6833b3";

export const NFT_CONTRACT = getContract({
    client: client,
    chain: chain,
    address: nftContractAddress
});

export const REWARD_TOKEN_CONTRACT = getContract({
    client: client,
    chain: chain,
    address: rewardTokenContractAddress
});

export const STAKING_CONTRACT = getContract({
    client: client,
    chain: chain,
    address: stakingContractAddress,
    abi: stakingABI
});