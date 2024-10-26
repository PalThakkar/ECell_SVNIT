// src/app/jobs/layout.jsx
export const metadata = {
    title: "Job Opportunities | E-Cell SVNIT",
    description:
      "Explore job opportunities at E-Cell SVNIT, including internships and part-time roles. Find the right opportunity to advance your career.",
    openGraph: {
      title: "Job Opportunities | E-Cell SVNIT",
      description:
        "Explore job opportunities at E-Cell SVNIT, including internships and part-time roles. Find the right opportunity to advance your career.",
      url: "https://www.ecellsvnit.com/jobs",
      siteName: "E-Cell SVNIT",
      images: [
        {
          url: "https://www.ecellsvnit.com/og-image.png",
          width: 1200,
          height: 630,
          alt: "Job Opportunities at E-Cell SVNIT",
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Job Opportunities | E-Cell SVNIT",
      description:
        "Explore job opportunities at E-Cell SVNIT, including internships and part-time roles.",
      images: ["https://www.ecellsvnit.com/og-image.png"],
    },
  };
  
  export default function Layout({ children }) {
    return <>{children}</>;
  }
  