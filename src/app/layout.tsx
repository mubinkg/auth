import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThirdwebProvider } from "@/app/thirdweb";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Wushi Land Staking",
  description: "Generated by NS Studio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} main`}>
        <ThirdwebProvider>
          <div style={{
            position: "fixed",
            top: "0",
            left: "0",
            width: "100%",
            backgroundColor: "rgba(255, 255, 255, 0.9)", // Add a semi-transparent white background
            padding: "20px 0", // Add 20px of padding to the top and bottom of the header
            zIndex: "9999", // Ensure the header stays on top of other content
            textAlign: "center",
            color: "#080022", // Menu text color
            fontFamily: "Roboto, sans-serif", // Font family set to Roboto
            fontWeight: "700", // Font weight set to 700 (bold)
            fontSize: "15px", // Font size set to 13px
          }}>
            <div>
              <a href="#" style={{ fontWeight: "normal", fontSize: "inherit" }}>Home</a>
              <span style={{ margin: "0 10px" }}>|</span>
              <a href="#" style={{ fontWeight: "normal", fontSize: "inherit" }}>Buy NFT</a>
              <span style={{ margin: "0 10px" }}>|</span>
              <a href="#" style={{ fontWeight: "normal", fontSize: "inherit" }}>Stake</a>
              <span style={{ margin: "0 10px" }}>|</span>
              <a href="#" style={{ fontWeight: "normal", fontSize: "inherit" }}>Back to Wushi Land</a>
            </div>
          </div>
          <div style={{ paddingTop: "60px" }}> {/* Add padding to the top to offset content underneath the fixed header */}
            {children}
          </div>
        </ThirdwebProvider>
      </body>
    </html>
  );
}