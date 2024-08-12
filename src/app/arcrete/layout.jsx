// This is a server component by default in Next.js 13+
export const metadata = {
    title: "Job Application | Arcrete | E-Cell SVNIT",
    description:
      "Apply for part-time or internship positions at Arcrete through E-Cell SVNIT. Submit your details to join our team and contribute to innovative projects.",
    openGraph: {
      title: "Job Application | Arcrete | E-Cell SVNIT",
      description:
        "Looking for part-time or internship opportunities? Apply now to join Arcrete through E-Cell SVNIT and work on cutting-edge projects.",
      url: "https://www.ecellsvnit.com/jobs/arcrete-application",
      siteName: "E-Cell SVNIT",
      images: [
        {
          url: "https://www.ecellsvnit.com/images/arcrete-job-og-image.png",
          width: 1200,
          height: 630,
          alt: "Apply for a job at Arcrete through E-Cell SVNIT",
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Job Application | Arcrete | E-Cell SVNIT",
      description:
        "Apply for part-time or internship positions at Arcrete through E-Cell SVNIT. Join our team and contribute to innovative projects.",
      images: ["https://www.ecellsvnit.com/og-image.png"],
    },
  };
  
  export default function Layout({ children }) {
    return (
      <div>
        {children}
      </div>
    );
  }
  