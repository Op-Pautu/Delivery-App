import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Navbar from "./components/Navbar";
import Notification from "./components/Notification";
import Footer from "./components/Footer";
import AuthProvider from "../providers/AuthProvider";
import QueryProvider from "@/providers/QueryProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
        <AuthProvider>
          <QueryProvider>
            <div>
              <Notification />
              <Navbar />
              {children}
              <Footer />
              <ToastContainer
                position="top-right"
                theme="dark"
                autoClose={3000}
              />
            </div>
          </QueryProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
