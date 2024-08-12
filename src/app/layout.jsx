import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import RootLayout from "@/components/RootLayout";
import "./globals.css";

// Define metadata for the site
export const metadata = {
  title: {
    default: "E-Cell SVNIT",
    template: "%s | E-Cell SVNIT",
  },
  description: "E-Cell SVNIT empowers students to transform visionary ideas into successful ventures through networking, mentorship, and resources.",
  openGraph: {
    title: "E-Cell SVNIT",
    description: "Join E-Cell SVNIT, the heart of entrepreneurial spirit on campus. We help turn your concepts into reality.",
    url: "https://www.ecellsvnit.com/",
    siteName: "E-Cell SVNIT",
    images: [
      {
        url: "https://www.ecellsvnit.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "E-Cell SVNIT",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "E-Cell SVNIT",
    description: "Join E-Cell SVNIT and ignite your entrepreneurial journey with us.",
    images: ["https://www.ecellsvnit.com/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function Layout({ children }) {
  return (
    <html lang="en" className="h-full bg-neutral-950 text-base antialiased text-neutral-100">
      <head>
        {/* Additional <head> elements can go here if needed */}
      </head>
      <body className="flex min-h-full flex-col">
        <RootLayout>{children}</RootLayout>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
