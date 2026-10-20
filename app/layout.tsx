import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Plexus",
  description: "Plexus - Sistema de estudo de gRPC Fullstack",
  authors: [{ name: "Robson Ferreira", url: "https://github.com/RobsonFe" }],
  creator: "Robson Ferreira",
  keywords: ["Plexus", "gRPC", "Fullstack", "Estudo", "Sistema", "Robson Ferreira"],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
