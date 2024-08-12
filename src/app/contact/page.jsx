import React from 'react';

import ContactDetails from "@/components/ContactDetails";
import ContactFormData from "@/components/contactFormData";
import Container from "@/components/Container";
import PageIntro from "@/components/PageIntro";

// Define metadata for the Contact page
export const metadata = {
  title: "Contact Us | E-Cell SVNIT",
  description:
    "Get in touch with E-Cell SVNIT to explore collaboration opportunities, ask questions, or learn more about our initiatives. We look forward to hearing from you.",
  openGraph: {
    title: "Contact Us | E-Cell SVNIT",
    description:
      "Reach out to E-Cell SVNIT to explore collaboration opportunities or get your queries answered. We're eager to connect with you.",
    url: "https://www.ecellsvnit.com/contact",
    siteName: "E-Cell SVNIT",
    images: [
      {
        url: "https://www.ecellsvnit.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Contact E-Cell SVNIT",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | E-Cell SVNIT",
    description:
      "Connect with E-Cell SVNIT for collaboration opportunities, inquiries, and more.",
    images: ["https://www.ecellsvnit.com/images/contact-og-image.png"],
  },
};

const ContactPage = () => {
  return (
    <>
      <PageIntro eyebrow="Contact us" title="Let’s work together">
        <p>We cannot wait to hear from you.</p>
      </PageIntro>
      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <div className="grid grid-cols-1 gap-x-8 gap-y-24 lg:grid-cols-2">
          <ContactDetails />
          <ContactFormData />
        </div>
      </Container>
    </>
  );
};

export default ContactPage;
