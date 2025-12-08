"use client"
import React from 'react';

export const metadata = {
  title: "LEGO Startup | E-Cell SVNIT",
  description: "Participate in the LEGO Startup event and bring your entrepreneurial ideas to life!",
  openGraph: {
    title: "LEGO Startup | E-Cell SVNIT",
    description: "Compete in the LEGO Startup event for a chance to win ₹10,000 and more.",
    url: "https://www.ecellsvnit.com/lego",
    siteName: "E-Cell SVNIT",
    images: [{
      url: "/lego.png", // Changed to relative path assuming it's accessible publicly through the site.
      width: 1200,
      height: 630,
      alt: "LEGO Startup Event",
    }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LEGO Startup | E-Cell SVNIT",
    description: "Join the LEGO Startup event and showcase your entrepreneurial skills.",
    images: ["/lego.png"], // Changed to relative path assuming it's accessible publicly through the site.
  },
};

const Layout = ({ children }) => {
  return (
    <div>
      {children}
    </div>
  );
};

export default Layout;
