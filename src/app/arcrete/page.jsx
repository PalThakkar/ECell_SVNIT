"use client";
import React from 'react';
import FormData from '@/components/FormData';
import PageIntro from "@/components/PageIntro";
import Container from "@/components/Container";
import JobDetails from '@/components/JobDetails';

// Define metadata for the Form page
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
    images: ["https://www.ecellsvnit.com/images/arcrete-job-og-image.png"],
  },
};

const FormPage = () => {
  return (
    <>
      <PageIntro eyebrow="Arcrete" title="Job Application">
        <p>Submit Your Details</p>
      </PageIntro>
      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <div className="grid grid-cols-1 gap-x-8 gap-y-24 lg:grid-cols-2">
          <JobDetails />
          <FormData />
        </div>
      </Container>
    </>
  );
};

export default FormPage;
