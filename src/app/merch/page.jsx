import React from "react";
import ComingSoonMerch from "./ComingSoonMerch";
import MerchTShirt from "./MerchTshirt";

export const metadata = {
  title: "E-Cell Merch | E-Cell SVNIT",
  description:
    "Explore E-Cell SVNIT official merchandise. Premium quality tees and apparel for entrepreneurs and innovators.",
  openGraph: {
    title: "E-Cell Merch | E-Cell SVNIT",
    description:
      "Official E-Cell SVNIT merchandise - Premium tees, apparel and more.",
    url: "https://www.ecellsvnit.com/merch",
    siteName: "E-Cell SVNIT",
    images: [
      {
        url: "https://www.ecellsvnit.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "E-Cell SVNIT Merch",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "E-Cell Merch | E-Cell SVNIT",
    description:
      "Official E-Cell SVNIT merchandise - Premium tees, apparel and more.",
    images: ["https://www.ecellsvnit.com/og-image.png"],
  },
};

const MerchPage = () => {
  return (
    <>
      {/* ==================== MERCH STATUS TOGGLE ==================== */}
      {/* 
        📦 MERCH NOT LIVE YET? 
        - Keep <ComingSoonMerch /> uncommented
        - Keep <MerchTShirt /> commented out
        
        🎉 MERCH IS LIVE NOW?
        - Comment out <ComingSoonMerch />
        - Uncomment <MerchTShirt />
      */}
      {/* ============================================================= */}

      {/* 👇 SHOW THIS WHEN MERCH IS NOT LIVE (COMING SOON) */}
      <ComingSoonMerch />

      {/* 👇 SHOW THIS WHEN MERCH IS LIVE (UNCOMMENT LINE BELOW) */}
      {/* <MerchTShirt /> */}
    </>
  );
};

export default MerchPage;
