"use client";
import {motion} from "framer-motion"; 
import React, { useEffect } from "react";
import { Connection, Keypair } from '@solana/web3.js';
import bs58 from 'bs58';

const PingButton = () => {
  useEffect(() => {
    async function getWallet() {
      const privateKeyBase58 = process.env.NEXT_PUBLIC_SOL_WALLET_PRIVATE_KEY;
      if (privateKeyBase58) {
        try {
          const privateKeyUint8Array = bs58.decode(privateKeyBase58);
          const wallet = Keypair.fromSecretKey(privateKeyUint8Array);
          // console.log(wallet.publicKey.toBase58());
        } catch (error) {
          console.error('Error decoding the private key:', error);
        }
      } else {
        console.error('Private key not found.');
      }
    }

    getWallet();
  }, []);

  return (
    <button
     className="bg-[#512da8] font-bold rounded py-3 tracking-wide px-6 hover:bg-[#1a1f2e]">
      Claim Airdrop!
    </button>
  );
};

export default PingButton;
