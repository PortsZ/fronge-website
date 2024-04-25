// "use client"

// import React, { FC, useCallback } from 'react';
// import { useWallet } from '@solana/wallet-adapter-react';
// import { Connection, PublicKey, SystemProgram } from '@solana/web3.js';
// import { useAnchorWallet } from '@solana/wallet-adapter-react';
// import { IDL } from '../data/token_claimer-keypair.json'; // Make sure to provide the path to your IDL file
// import { Program, AnchorProvider } from '@project-serum/anchor';

// import { WalletError } from '@solana/wallet-adapter-base';

// const ClaimButton = () => {
//     const wallet = useAnchorWallet();
//     const { publicKey, sendTransaction } = useWallet();

//     const handleClaim = useCallback(async () => {
//         if (!wallet || !publicKey) {
//             console.log('Wallet not connected');
//             return;
//         }

//         const programId = new PublicKey('YourDeployedProgramAddressHere');
//         const network = 'https://api.devnet.solana.com';
//         const connection = new Connection(network, 'processed');

//         const provider = new AnchorProvider(connection, wallet, {
//             preflightCommitment: 'processed',
//         });

//         const program = new Program<IDL>(IDL, programId, provider);

//         try {
//             const tx = await program.rpc.claimTokens({
//                 accounts: {
//                     claimRecord: publicKey.toString(),
//                     user: publicKey,
//                     systemProgram: SystemProgram.programId,
//                 },
//             });
//             console.log('Transaction signature', tx);
//         } catch (error: any) {
//             if (error instanceof WalletError) {
//                 console.error('Wallet Error:', error.message);
//             } else {
//                 console.error('Transaction Error:', error);
//             }
//             alert('Error: ' + error.message); // Provide user feedback on error
//         }
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//     }, [wallet, publicKey, sendTransaction]);

//     return (
//         <button onClick={handleClaim}  className="bg-[#512da8] font-bold rounded py-3 tracking-wide px-6 hover:bg-[#1a1f2e]">
//             Claim Tokens
//         </button>
//     );
// };

// export default ClaimButton;
