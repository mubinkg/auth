import { ConnectEmbed } from "@/app/thirdweb";
import { client } from "./client";
import { chain } from "./chain";
import { Staking } from "../../components/Staking";

export default function Home() {
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      margin: "0px auto",
      maxWidth: "400px",
    }}>
      <h1 style={{
        backgroundColor: "rgb(21, 21, 21)", // Background color
        padding: "20px", // Padding
        borderRadius: "10px", // Rounded corners
        textAlign: "center", // Text alignment
        margin: "20px auto",
        maxWidth: "360px",
      }}>
        Wushi Land NFT Staking App
      </h1>
      <ConnectEmbed
        client={client}
        chain={chain}
      />
      <Staking />
    </div>
  );
}
