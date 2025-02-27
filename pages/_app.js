import '@/styles/globals.css';
import Layout from '@/components/Layouts/Layout';
import 'bootstrap/dist/css/bootstrap.css';
import Head from 'next/head';
import Script from 'next/script';
import PlausibleProvider from 'next-plausible';
import { useEffect } from 'react';

export default function App({ Component, pageProps: { session, ...pageProps } }) {

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Stock Brain Training Institute",
    "url": "https://www.stockbrain.in",
    "logo": "https://www.stockbrain.in/assets/images/logo-6.png",
    "sameAs": [
      "https://www.facebook.com/people/Stock-brain/61562645010874/?mibextid=ZbWKwL",
      "https://www.linkedin.com/in/stock-brain-4b836531b/",
      "https://www.instagram.com/_stockbrain/"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-99907-99940",
      "contactType": "Customer Support",
      "areaServed": "IN",
      "availableLanguage": "English"
    },
    "description": "Learn stock trading, portfolio management, and financial analysis with Stock Brain. Get expert training in the stock market."
  };

  useEffect(() => {
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }
    gtag('js', new Date());
    gtag('config', 'G-B9T555Y8XR');
  }, []);

  if (globalThis.window !== undefined) {

    import("jquery").then(() => {import("bootstrap");}).then(() => {import("../public/assets/css/style.css");}).then(() => {import("../public/assets/js/script.js");});
  }

  return (
    <>
      <Head>
        <title>SBIFM - Stock Brain Institute Of Financial Market in Noida</title>
        <link rel="canonical" href="https://www.stockbrain.in" />
        <meta name="google-site-verification" content="c3rJ6-5cFdMjC6aPdDNo3eGSrHcHRRjrCbI5mLGWu0o" />
        <meta name="robots" content="all" />
        <meta name="description" content="Welcome to Stock Brain, your ultimate destination to become a pro in the stock market. We offer stock market education, trading strategies, portfolio management." />

        <meta name="keywords" content="stock market education in noida,stock market institute in noida, share market noida, stock trading strategies, investment management, portfolio tracking, financial analysis, trading tips, market trends, day trading, stock market courses, stock market glossary, stock market news, stock chart patterns, swing trading, technical analysis, fundamental analysis, options trading, stock predictions, stock market for beginners in noida, stock alerts, stock price forecast,best share market institute in noida , Brainstrong noida, Brain strong noida sec-2" />

        <meta property="og:title" content="Stock Brain - Expert Trading Tips & Tools for Investment Success" />
        <meta property="og:description" content="Unlock essential trading tips and tools with Stock Brain. Master portfolio tracking, company analysis, and market trends. Our stock market glossary empowers you with key trading terms for smarter decisions." />
        <meta property="og:image" content="/assets/images/myimages/gallery/p1.webp" />
        <meta property="og:url" content="https://www.stockbrain.in/" />
        <link rel="icon" href="/assets/images/myimages/favicon.jpg" type="image/x-icon" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </Head>

      {/* Google Analytics Script */}
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-B9T555Y8XR"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-B9T555Y8XR');
        `}
      </Script>

      <PlausibleProvider domain="stockbrain.in">
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </PlausibleProvider>
    </>
  );
}
