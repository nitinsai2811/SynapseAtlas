
import type { Metadata } from "next";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


export const metadata: Metadata = {
  title: "Synapse Atlas",
  description: "Discover MUNs and student opportunities",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">

      <body>

        <Navbar />

        {children}

        <Footer />

      </body>

    </html>
  );
}