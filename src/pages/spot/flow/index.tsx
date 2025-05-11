import { useAppKitAccount } from "@reown/appkit/react";
import { useAppKitProvider } from "@reown/appkit/react";
import type { Provider } from "@reown/appkit-adapter-solana/react";
import { PublicKey, LAMPORTS_PER_SOL, Transaction, SystemProgram, Connection } from "@solana/web3.js";
import React, {useEffect, useState} from "react";
import { DestinationAddress } from "../../../DestinationAddress"
import axios from "axios";
import {
  getAssociatedTokenAddress,
  createTransferInstruction,
  createAssociatedTokenAccountInstruction,
  TOKEN_PROGRAM_ID,
  ASSOCIATED_TOKEN_PROGRAM_ID,
} from '@solana/spl-token';
import {useTokenStore} from "../../../store/useTokenStore";
import { useWallet } from "@solana/wallet-adapter-react";

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

  const { signTransaction } = useWallet();

  const {
    selectedSellingToken,
  } = useTokenStore()

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
    if (selectedSellingToken.address === 'So11111111111111111111111111111111111111112') {
      const transaction= new Transaction().add(
        SystemProgram.transfer({
          fromPubkey: walletProvider.publicKey,
          toPubkey: new PublicKey(DestinationAddress), // destination address тобто вказати наш кошель
          lamports: sendingCurrency //1000 - 0.000001 SOL
        })
      );

      transaction.feePayer = walletProvider.publicKey;
      transaction.recentBlockhash = (await connection.getLatestBlockhash()).blockhash;

      const signature = await walletProvider.sendTransaction(transaction, connection);

      // print the Transaction Signature
      console.log("Transaction Signature:", signature);
    }
    else {
      console.log('OKAY');
      const mintPublicKey = new PublicKey(selectedSellingToken.address);
      const latestBlockhash = await connection.getLatestBlockhash();

      const ATAtrans = await checkATA({
        tokenMintKey: mintPublicKey,
        sender: walletProvider.publicKey,
        recipient: new PublicKey(DestinationAddress),
        amountToSend: sendingCurrencyValue,
        connection: connection,
      });

      let transaction;

      if (ATAtrans && ATAtrans.instructions.length > 0) {
        transaction = await createTransferTransaction({
          tokenMintKey: mintPublicKey,
          sender: walletProvider.publicKey,
          recipient: new PublicKey(DestinationAddress),
          amountToSend: sendingCurrencyValue,
          connection: connection,
          tx: ATAtrans,
        });

      } else {
        // @ts-ignore
        transaction = await createTransferTransaction({
          tokenMintKey: mintPublicKey,
          sender: walletProvider.publicKey,
          recipient: new PublicKey(DestinationAddress),
          amountToSend: sendingCurrencyValue,
          connection: connection,
        });
      }
      // raise the modal
      const signature = await walletProvider.sendTransaction(transaction, connection);

      // print the Transaction Signature
      console.log("Transaction Signature:", signature);
    }
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

// @ts-ignore
async function createTransferTransaction({
                                           connection,
                                           sender,
                                           recipient,
                                           tokenMintKey,
                                           amountToSend,
                                           tx,
                                         }: {
  connection: any;
  sender: any;
  recipient: any;
  tokenMintKey: any;
  amountToSend: number;
  tx?: Transaction;
}): Promise<Transaction> {
  const senderAta = await getAssociatedTokenAddress(tokenMintKey, sender);
  const receiverAta = await getAssociatedTokenAddress(tokenMintKey, recipient);
  if (!tx) {
    tx = new Transaction();
  }

  tx.add(
    createTransferInstruction(
      senderAta,
      receiverAta,
      sender,
      Math.floor(amountToSend * 10 ** 6), // якщо decimals = 6
    )
  );

  tx.feePayer = sender;
  tx.recentBlockhash = (await connection.getLatestBlockhash()).blockhash;

  return tx;
}

async function checkATA({
                                           connection,
                                           sender,
                                           recipient,
                                           tokenMintKey,
                                           amountToSend,
                                         }: {
  connection: any;
  sender: any;
  recipient: any;
  tokenMintKey: any;
  amountToSend: number;
}): Promise<Transaction> {
  const senderAta = await getAssociatedTokenAddress(tokenMintKey, sender);
  const receiverAta = await getAssociatedTokenAddress(tokenMintKey, recipient);

  const senderBalance = await connection.getTokenAccountBalance(senderAta);
  if (!senderBalance.value || parseFloat(senderBalance.value.amount) < amountToSend) {
    throw new Error("Недостатньо токенів на гаманці");
  }

  const receiverAtaInfo = await connection.getAccountInfo(receiverAta);
  const tx = new Transaction();

  if (!receiverAtaInfo) {
    console.log("ATA отримувача не існує, додаємо інструкцію на створення ATA");
    tx.add(
      createAssociatedTokenAccountInstruction(
        sender,              // payer
        receiverAta,         // ata address
        recipient,           // wallet address
        tokenMintKey,        // mint
        TOKEN_PROGRAM_ID,
        ASSOCIATED_TOKEN_PROGRAM_ID
      )
    );

    tx.feePayer = sender;

    const latestBlockhash = await connection.getLatestBlockhash();
    tx.recentBlockhash = latestBlockhash?.blockhash;

    return tx;
  }

  return tx;
}