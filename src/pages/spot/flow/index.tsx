import { useAppKitConnection } from "@reown/appkit-adapter-solana/react";
import { useAppKitAccount } from "@reown/appkit/react";
import { useAppKitProvider } from "@reown/appkit/react";
import type { Provider } from "@reown/appkit-adapter-solana/react";
import { PublicKey, LAMPORTS_PER_SOL, Transaction, SystemProgram } from "@solana/web3.js";
import React from "react";
import { DestinationAddress } from "../../../DestinationAddress"

const Flow: React.FC = () => {
  const { connection } = useAppKitConnection();
  const { isConnected, address } = useAppKitAccount();

  // Get the wallet provider with the AppKit hook
  const { walletProvider } = useAppKitProvider<Provider>("solana");

  // function to get the balance
  const handleGetBalance = async () => {
    const wallet = new PublicKey(address as string);
    const balance = await connection?.getBalance(wallet); // get the amount in LAMPORTS

    console.log(`${(balance as number) / LAMPORTS_PER_SOL} SOL`);
  };

  // function to sing a msg
  const handleSignMsg = async () => {
    // message to sign
    const encodedMessage = new TextEncoder().encode("Hello Reown AppKit!");

    // Raise the modal
    const sig = await walletProvider.signMessage(encodedMessage);

    // Print the signed message in hexadecimal format
    console.log(Buffer.from(sig).toString("hex"));
  };

  // function to send a TX
  const handleSendTx = async () => {
    if (!connection) {
      console.error("No connection available");
      return;
    }

    if (!address) {
      console.error("No address provided");
      return;
    }

    if (!walletProvider || !walletProvider.publicKey) {
      console.error("No wallet connected");
      return;
    }

    const latestBlockhash = await connection.getLatestBlockhash();

    // create the transaction
    const transaction= new Transaction({
      feePayer: walletProvider.publicKey,
      recentBlockhash: latestBlockhash?.blockhash,
    }).add(
      SystemProgram.transfer({
        fromPubkey: walletProvider.publicKey,
        toPubkey: new PublicKey(DestinationAddress), // destination address тобто вказати наш кошель
        lamports: 1000, //0.000001 SOL
      })
    );

    // raise the modal
    const signature = await walletProvider.sendTransaction(transaction, connection)

    // print the Transaction Signature
    console.log("Transaction Signature:", signature);
  }

  return (
    <>
      {/*{isConnected && (
        <div>
          <button onClick={handleGetBalance}>Get Balance</button>
        </div>
      )}
      {isConnected && (
        <div>
          <button onClick={handleSignMsg}>Sign Message</button>
        </div>
      )}*/}
      {isConnected && (
        <div>
          <div className='instant-connect' onClick={handleSendTx}>Send Transaction</div>
        </div>
      )}
    </>
  );
}

export default Flow