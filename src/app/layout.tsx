import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Navbar from "@/components/views/Navbar/Navbar";
import { DataContextProvider } from "@/context/data-context";

import StyledComponentsRegistry from "./registry";

const inter = Inter({ subsets: ["latin"] });

let title = "Chat with AI";
let description = "Chat with AI using GPT-4.";
let url = "https://ai-chat-one-gules.vercel.app/";
let sitename = "ai-chat-one-gules.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(url),
  title,
  description,
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    images: [
      {
        url: "../../public/Welcome.png",
      },
    ],
    title,
    description,
    url: url,
    siteName: sitename,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    images: [
      {
        url: "../../public/Welcome.png",
      },
    ],
    title,
    description,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <DataContextProvider>
        <body className={inter.className} style={{ position: "relative" }}>
          <Navbar />
          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        </body>
      </DataContextProvider>
    </html>
  );
}
