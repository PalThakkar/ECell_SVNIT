import ContactSection from "@/components/ContactSection";
import Container from "@/components/Container";
import Cultures from "@/components/Cultures";
import PageIntro from "@/components/PageIntro";
import { StatList, StatListItem } from "@/components/StatList";
import React from "react";

// Define metadata for the About page
export const metadata = {
  title: "About Us | E-Cell SVNIT",
  description:
    "Discover how collaboration is at the heart of E-Cell SVNIT. Learn more about our values, our team, and our commitment to making a difference.",
  openGraph: {
    title: "About Us | E-Cell SVNIT",
    description:
      "E-Cell SVNIT thrives on collaboration. Learn more about our approach, our team, and our story.",
    url: "https://www.ecellsvnit.com/about",
    siteName: "E-Cell SVNIT",
    images: [
      {
        url: "https://www.ecellsvnit.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "About E-Cell SVNIT",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | E-Cell SVNIT",
    description:
      "Discover how collaboration is at the heart of E-Cell SVNIT. Learn more about our values, our team, and our story.",
    images: ["https://www.ecellsvnit.com/og-image.png"],
  },
};

const AboutPage = () => {
  return (
    <>
      <PageIntro eyebrow="About us" title="Our strength is collaboration">
        <p>
          We believe that our strength lies in our collaborative approach, which
          puts our clients at the center of everything we do.
        </p>
        <div className="mt-10 max-w-2xl space-y-6 text-base">
          <p>
            Studio was started by three friends who noticed that developer
            studios were charging clients double what an in-house team would
            cost. Since the beginning, we have been committed to doing things
            differently by charging triple instead.
          </p>
          <p>
            At Studio, we’re more than just colleagues — we’re a family. This
            means we pay very little and expect people to work late. We want our
            employees to bring their whole selves to work. In return, we just
            ask that they keep themselves there until at least 6:30pm.
          </p>
        </div>
      </PageIntro>
      <Container className="mt-16">
        <StatList>
          <StatListItem value="35" label="Underpaid employees" />
          <StatListItem value="52" label="Placated clients" />
          <StatListItem value="$25M" label="Invoices billed" />
        </StatList>
      </Container>
      <Cultures />
      <ContactSection />
    </>
  );
};

export default AboutPage;
