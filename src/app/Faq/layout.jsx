export const metadata = {
    title: "FAQs | E-Cell SVNIT",
    description: "Find answers to frequently asked questions about E-Cell SVNIT, our events, and how to get involved.",
    openGraph: {
      title: "FAQs | E-Cell SVNIT",
      description: "Find answers to frequently asked questions about E-Cell SVNIT, our events, and how to get involved.",
      url: "https://www.ecellsvnit.com/faqs",
      siteName: "E-Cell SVNIT",
      images: [
        {
          url: "https://www.ecellsvnit.com/og-image.png", // Replace with your image URL
          width: 1200,
          height: 630,
          alt: "FAQs at E-Cell SVNIT",
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "FAQs | E-Cell SVNIT",
      description: "Find answers to frequently asked questions about E-Cell SVNIT, our events, and how to get involved.",
      images: ["https://www.ecellsvnit.com/og-image.png"], // Replace with your image URL
    },
    icons: {
      icon: "/favicon.ico",
    },
  };
  
  export default function Layout({ children }) {
    return <>{children}</>;
  }
  