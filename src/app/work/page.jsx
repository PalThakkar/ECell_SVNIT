import PageIntro from "@/components/PageIntro";
import React from "react";

export const metadata = {
  title: "Our Work | E-Cell SVNIT",
  description:
    "Explore the proven solutions by E-Cell SVNIT that address real-world problems. We focus on efficiency, maximizing resources, and delivering the best value.",
  openGraph: {
    title: "Our Work | E-Cell SVNIT",
    description:
      "Discover how E-Cell SVNIT reuses tried and tested projects to solve real-world challenges efficiently and effectively.",
    url: "https://www.ecellsvnit.com/our-work",
    siteName: "E-Cell SVNIT",
    images: [
      {
        url: "https://www.ecellsvnit.com/images/work-og-image.png",
        width: 1200,
        height: 630,
        alt: "E-Cell SVNIT Work",
      },
    ],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Work | E-Cell SVNIT",
    description:
      "Explore proven solutions by E-Cell SVNIT that address real-world problems with efficiency and effectiveness.",
    images: ["https://www.ecellsvnit.com/images/work-og-image.png"],
  },
};

const WorkPage = () => {
  return (
    <>
      <PageIntro
        eyebrow="Our work"
        title="Proven solutions for real-world problems."
      >
        <p>
          We believe in efficiency and maximizing our resources to provide the
          best value to our clients. The primary way we do that is by re-using
          the same five projects we’ve been developing for the past decade.
        </p>
      </PageIntro>
    </>
  );
};

export default WorkPage;
