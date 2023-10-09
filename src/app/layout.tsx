import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Navbar from "./components/Navbar";
import Notification from "./components/Notification";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ain & Dino",
  description: "Ain & Dino`s Restaurant",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Notification />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
