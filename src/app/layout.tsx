/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import "./globals.css";
import AppBar from "@/components/AppBar";

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
      <body className="w-full">
        <img
          className="fixed inset-0 w-full h-full object-cover pointer-events-none -z-10"
          alt="frogo"
          src="/frogbg.png"
        />
        <nav className="fixed z-10 w-full p-2 md:px-4 py-4 ">
          <AppBar />
        </nav>
        <div className="pt-16 md:pt-24">
        {children}
        </div>
      </body>
    </html>
  );
}
