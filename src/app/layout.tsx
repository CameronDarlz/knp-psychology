import type { Metadata } from "next";
import { Bebas_Neue, DM_Sans } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "KNP Sport Psychology — Performance Psychology for Goalkeepers & Athletes",
  description:
    "Sport psychology for elite and aspiring goalkeepers, athletes across all sports, and golfers. Overcome mistakes, build unshakeable confidence, and perform under pressure.",
  keywords: "goalkeeper psychology, sport psychology, golf psychology, mental performance, Keval Patel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${bebasNeue.variable} ${dmSans.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-[#0a0a0f] text-[#f0ede8]">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
