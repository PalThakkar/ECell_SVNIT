import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import RootLayout from "@/components/RootLayout";
import Head from "next/head";
import "./globals.css";

export const metadata = {
  title: {
    template: "E-Cell SVNIT",
    default: "E-Cell SVNIT",
  },
};

export default function Layout({ children }) {
  return (
    <html
      lang="en"
      className="h-full bg-neutral-950 text-base antialiased text-neutral-100"
    >
      <Head>
        <title>E-Cell SVNIT</title>
        <meta
          name="description"
          content="E-Cell SVNIT promotes entrepreneurship among students at SVNIT Surat."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://ecellsvnit.com" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="E-Cell SVNIT" />
        <meta
          property="og:description"
          content="Join E-Cell SVNIT to explore entrepreneurship opportunities."
        />
        <meta property="og:url" content="https://ecellsvnit.com" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://ecellsvnit.com/logo.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="E-Cell SVNIT" />
        <meta
          name="twitter:description"
          content="Learn more about entrepreneurship with E-Cell SVNIT."
        />
        <meta name="twitter:image" content="https://ecellsvnit.com/logo.png" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "E-Cell SVNIT",
            "url": "https://ecellsvnit.com",
            "logo": "https://ecellsvnit.com/logo.png",
            "sameAs": [
              "https://www.facebook.com/ecellsvnit",
              "https://twitter.com/ecellsvnit",
              "https://www.linkedin.com/company/ecellsvnit",
            ],
          })}
        </script>
      </Head>
      <body className="flex min-h-full flex-col">
        <RootLayout>
          {children}
          <SpeedInsights />
          <Analytics />
        </RootLayout>
      </body>
    </html>
  );
}
