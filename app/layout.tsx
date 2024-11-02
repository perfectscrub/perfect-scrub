import React from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth"; 

export const metadata = {
  title: {
    default: "Perfect Scrub Cleaning Services",
    template: "Perfect Scrub Cleaning Services - %s",
  },
  description:
    "We operate in the greater toronto area and we specialize in the cleaning of Offices, Schools and Universities, Event Centers, and other facilities",
};

const inter = Inter({ subsets: ["latin"] });

export default async function RootLayout({ children }: { children: React.ReactNode }) {

  const session = await auth();
   return (
    <SessionProvider session={session}>
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Toaster position="top-center" richColors pauseWhenPageIsHidden />
      </body>
    </html>
    </SessionProvider>
  );
}
