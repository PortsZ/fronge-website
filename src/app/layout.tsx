/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Fronge",
  description: "Fronge on solana, the wisest pepe frog monk in the world.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" />
      </head>
      <body>
      <img 
      className="fixed w-full -z-10 object-fill overflow-hidden max-h-screen pointer-events-none" 
      alt='frogo' 
      src='/frogbg.png'/>
      {children}
      </body>

    </html>
  );
}
