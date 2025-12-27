"use client"
import type { Metadata } from "next";
import { Roboto, DM_Sans, Manrope, Work_Sans, Nunito } from "next/font/google";
import "./globals.css";
import { CartProvider } from "../context/CartContext";
import { useState } from "react";
import Toast from "../components/Toast";

// Modern E-commerce Font Configurations (Similar to AliExpress, Flipkart)
const roboto = Roboto({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const workSans = Work_Sans({
  variable: "--font-accent",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const nunito = Nunito({
  variable: "--font-modern",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [toast, setToast] = useState({ show: false, message: "" });
  // Provide a global function for showing toast
  (globalThis as any).showToast = (msg: string) => setToast({ show: true, message: msg });
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${dmSans.variable} ${manrope.variable} ${workSans.variable} ${nunito.variable} antialiased`}
      >
        <CartProvider>
          <Toast message={toast.message} show={toast.show} onClose={() => setToast({ show: false, message: "" })} />
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
