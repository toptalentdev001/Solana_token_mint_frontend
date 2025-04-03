import React from "react";
import {
  WalletProvider,
  ConnectionProvider,
} from "@solana/wallet-adapter-react";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import { useMemo } from "react";

interface ChildrenProps {
  children: React.ReactNode;
}

const WalletContextProvider = ({ children }: ChildrenProps) => {
  const wallets = useMemo(() => [], []);
  const endpoint = import.meta.env.VITE_HELIUS_RPC_ENDPOINT;
  console.log(endpoint);

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets}>
        <WalletModalProvider>{children}</WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
};

export default WalletContextProvider;
