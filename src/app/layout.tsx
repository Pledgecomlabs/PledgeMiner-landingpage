import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "../globals.css";

export const metadata: Metadata = {
  title: "Pledge Miner",
  description: "",
};

const opensans = Open_Sans({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={opensans.className}>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
