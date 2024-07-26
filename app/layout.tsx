import type { Metadata } from "next";
import { Inter } from "next/font/google";
import {Nunito_Sans} from "next/font/google"
import "./globals.css";
import { SessionProvider } from "next-auth/react";
const inter = Inter({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: "agrivision",
  description: "A new age farming guide",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} `}>
        <SessionProvider>
        {children}
        </SessionProvider>
        </body>
       
    </html>
  );
}
