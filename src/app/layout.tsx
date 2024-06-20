import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./views/global/navbar";
import Footer from "./views/global/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Putrarp Dev",
  description: "Your best IT Solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div><Navbar /></div>
        {children}
        <div><Footer /></div>
      </body>
    </html>
  );
}
