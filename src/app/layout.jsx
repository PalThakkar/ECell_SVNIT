import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import RootLayout from "@/components/RootLayout";
import { constructMetadata } from "@/config/site";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";

/**
 * TYPOGRAPHY SYSTEM — E-Cell SVNIT
 *
 * Plus Jakarta Sans → Display / headlines
 *   Warm, energetic, modern sans-serif. Used widely across startup landing pages.
 *   Has personality without being cold or mechanical like Syne.
 *   Excellent at large weights (700–800) for impactful headings.
 *
 * Inter → Body / UI text
 *   The gold standard for screen readability.
 *   Used by Vercel, Notion, GitHub, Linear, Figma.
 */

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
  display: "swap",
  preload: true,
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
});

export const metadata = constructMetadata({
  title: {
    default: "E-Cell SVNIT",
    template: "%s | E-Cell SVNIT",
  },
  description:
    "E-Cell SVNIT empowers students to transform visionary ideas into successful ventures through networking, mentorship, and resources.",
  image: "https://www.ecellsvnit.com/og-image.png",
  url: "https://www.ecellsvnit.vercel.app/",
  siteName: "E-Cell SVNIT",
});

export default function Layout({ children }) {
  return (
    <html
      lang="en"
      className={`h-full antialiased ${jakarta.variable} ${inter.variable}`}
      suppressHydrationWarning
    >
      <body
        className="flex min-h-full flex-col"
        style={{ fontFamily: "var(--font-inter), system-ui, sans-serif", backgroundColor: "#FEFEFE", color: "#111111" }}
        suppressHydrationWarning
      >
        <RootLayout>{children}</RootLayout>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
