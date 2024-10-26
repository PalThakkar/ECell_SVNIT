// src/app/events/layout.jsx
export const metadata = {
  title: "Events & Workshops | E-Cell SVNIT",
  description:
    "Join exciting events and workshops at E-Cell SVNIT to learn, innovate, and grow. Participate in entrepreneurial activities and connect with like-minded individuals.",
  openGraph: {
    title: "Events & Workshops | E-Cell SVNIT",
    description:
      "Join exciting events and workshops at E-Cell SVNIT to learn, innovate, and grow. Participate in entrepreneurial activities and connect with like-minded individuals.",
    url: "https://www.ecellsvnit.com/events",
    siteName: "E-Cell SVNIT",
    images: [
      {
        url: "/logo.png", // Relative path for use in code that translates correctly when accessed
        width: 1200,
        height: 630,
        alt: "E-Cell SVNIT Logo",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Events & Workshops | E-Cell SVNIT",
    description:
      "Discover engaging events and workshops hosted by E-Cell SVNIT, perfect for aspiring entrepreneurs.",
    images: ["/logo.png"], // Relative path for Twitter image
  },
};

export default function Layout({ children }) {
  return <>{children}</>;
}
