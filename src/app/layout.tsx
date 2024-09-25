import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import {Figtree} from "next/font/google"
import Footer from "@/components/shared/Footer";

const figtree = Figtree({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-figtree",
  display: "swap"
})

export const metadata: Metadata = {
  title: {
    default: "Home Page| Chez Tati ",
    template: "%s | Chez tati",
  },
  description: "This is Official Application for Chez Tati",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${figtree.variable} antialiased`}
      >
        <Navbar></Navbar>
        <div className="min-h-[calc(100vh-121px)] pb-5">
        {children}
        </div>
        <Footer></Footer>
      </body>
    </html>
  );
}

