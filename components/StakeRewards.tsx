import { TransactionButton, useActiveAccount, useReadContract } from "thirdweb/react";
import { REWARD_TOKEN_CONTRACT, STAKING_CONTRACT } from "../utils/contracts";
import { prepareContractCall, toEther } from "thirdweb";
import { useEffect } from "react";
import { balanceOf } from "thirdweb/extensions/erc721";

export const StakeRewards = () => {
    const account = useActiveAccount();

    const {
        data: tokenBalance,
        isLoading: isTokenBalanceLoading,
        refetch: refetchTokenBalance,
    } = useReadContract(
        balanceOf,
        {
            contract: REWARD_TOKEN_CONTRACT,
            owner: account?.address || "",
        }
    )
    
    const {
        data: stakedInfo,
        refetch: refetchStakedInfo,
    } = useReadContract({
        contract: STAKING_CONTRACT,
        method: "getStakeInfo",
        params: [account?.address || ""],
    });

    const copyToClipboard = () => {
        const el = document.createElement('textarea');
        el.value = '0x8bC85e7deE8a1E70b1a794db14467697d44081B5';
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
        alert('Contract address copied to clipboard!');
    }

    useEffect(() => {
        refetchStakedInfo();
        const interval = setInterval(() => {
            refetchStakedInfo();
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div style={{ width: "100%", margin: "20px 0", display: "flex", flexDirection: "column" }}>
            {!isTokenBalanceLoading && (
                <p>Wallet Balance: {parseFloat(toEther(BigInt(tokenBalance!.toString()))).toFixed(4)}</p>
            )}
            <br></br>
            <h2 style={{ marginBottom: "20px"}}>
                Stake Rewards: {stakedInfo && parseFloat(toEther(BigInt(stakedInfo[1].toString()))).toFixed(2)}
            </h2>
            <TransactionButton
                transaction={() => (
                    prepareContractCall({
                        contract:STAKING_CONTRACT,
                        method: "claimRewards",
                    })
                )}
                onTransactionConfirmed={() => {
                    alert("Rewards claimed!")
                    refetchStakedInfo();
                    refetchTokenBalance();
                }}
                style={{
                    border: "none",
                    backgroundColor: "#333",
                    color: "#fff",
                    padding: "10px",
                    borderRadius: "10px",
                    cursor: "pointer",
                    width: "100%",
                    fontSize: "12px",
                    marginBottom: "10px"
                }}
            >
                Claim Rewards
            </TransactionButton>
            <button
                onClick={copyToClipboard}
                style={{
                    border: "none",
                    backgroundColor: "#333",
                    color: "#fff",
                    padding: "10px",
                    borderRadius: "10px",
                    cursor: "pointer",
                    width: "100%",
                    fontSize: "13px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center"
                }}
            >
                <span style={{ fontWeight: "bold", textTransform: "uppercase", color: 'white' }}>REWARDS CONTRACT</span>
                <span style={{ backgroundColor: "#fff",fontSize: "11px", color: "#000", padding: "5px 10px", borderRadius: "5px" }}>0x8bC85e7deE8a1E70b1a794db14467697d44081B5</span>
            </button>
        </div>
    )
};
