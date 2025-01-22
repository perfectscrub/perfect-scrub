import React from "react";
import Layout from "@/components/layout/Layout";
// import { GoogleTagManager } from "@next/third-parties/google";

export const metadata = {
  title: {
    default: "Perfect Scrub Cleaning Services",
    template: "Perfect Scrub Cleaning Services - %s",
  },
  description:
    "We operate in the greater toronto area and we specialize in the cleaning of Offices, Schools and Universities, Event Centers, and other facilities",
};

export default function WebsiteLayout({ children }) {
  return (
      <Layout>
      {/* {process.env.NODE_ENV === "production" ? ( 
         <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS} />
       ) : null}*/}
        {children}</Layout>
  );
}
