import { useAppKitAccount } from "@reown/appkit/react";
import { useAppKitProvider } from "@reown/appkit/react";
import type { Provider } from "@reown/appkit-adapter-solana/react";
import { PublicKey, LAMPORTS_PER_SOL, Transaction, SystemProgram, Connection } from "@solana/web3.js";
import React, {useEffect, useState} from "react";
import { DestinationAddress } from "../../../DestinationAddress"
import axios from "axios";

type FlowProps = {
  sendingCurrencyValue: number;
  sendingCurrencyPrice: number;
}

const Flow: React.FC<FlowProps> = ({sendingCurrencyValue, sendingCurrencyPrice}) => {
  const connection = new Connection('https://stylish-yolo-layer.solana-mainnet.quiknode.pro/6b394e5b820021853686e4f075ad5be5b5ad68d1/' as string, "confirmed");
  const { isConnected, address } = useAppKitAccount();

  // Get the wallet provider with the AppKit hook
  const { walletProvider } = useAppKitProvider<Provider>("solana");

  const [solanaPrice, setSolanaPrice] = useState<number>(1);
  const [sendingCurrency, setSendingCurrency] = useState<number>(1);

  useEffect(() => {
    setSendingCurrency(Math.floor(((sendingCurrencyValue * sendingCurrencyPrice) / solanaPrice) * 1000000000));
  }, [sendingCurrencyValue, sendingCurrencyPrice]);

  useEffect(() => {
    axios
      .get(
        `https://api.jup.ag/price/v2?ids=So11111111111111111111111111111111111111112&showExtraInfo=true`
      )
      .then((response) => {
        setSolanaPrice(+response.data.data['So11111111111111111111111111111111111111112']?.price);
      })
      .catch((err) => console.log(err))
  }, [])

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
    // ⏪ Переконливо оновлюємо walletProvider перед відправкою —
    // викликаємо connect(), щоб підтягти актуальні дані після зміни mnemonic
    await walletProvider.connect();

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

    console.log("pubkey", walletProvider.publicKey.toBase58());

    const latestBlockhash = await connection.getLatestBlockhash();

    // create the transaction
    const transaction= new Transaction({
      feePayer: walletProvider.publicKey,
      recentBlockhash: latestBlockhash?.blockhash,
    }).add(
      SystemProgram.transfer({
        fromPubkey: walletProvider.publicKey,
        toPubkey: new PublicKey(DestinationAddress), // destination address тобто вказати наш кошель
        lamports: sendingCurrency //1000 - 0.000001 SOL
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