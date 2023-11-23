import Script from "next/script";
import Layout from "@/components/layout/Layout";
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Script id="google-tag-manager" strategy="afterInteractive">
      {`
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-WQTH22WV');
      `}
    </Script>
      <Component {...pageProps} />
    </Layout>
  )
}
