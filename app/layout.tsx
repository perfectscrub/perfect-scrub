import React from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import { auth } from "@/auth";
import Provider from "@/components/auth/Provider";
import { GoogleTagManager } from "@next/third-parties/google";

export const metadata = {
  title: {
    default: "Perfect Scrub Cleaning Services",
    template: "Perfect Scrub Cleaning Services - %s",
  },
  description:
    "We operate in the greater toronto area and we specialize in the cleaning of Offices, Schools and Universities, Event Centers, and other facilities",
};

const inter = Inter({ subsets: ["latin"] });

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  return (
    <html lang="en">
      {process.env.NODE_ENV === "production" ? (
        <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS} />
      ) : null}
      <body className={inter.className}>
        <Provider session={session}>
          {children}
          <Toaster position="top-center" richColors pauseWhenPageIsHidden />
        </Provider>
      </body>
    </html>
  );
}
