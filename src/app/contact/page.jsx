import Head from "next/head";
import ContactDetails from "@/components/ContactDetails";
import ContactForm from "@/components/ContactForm";
import Container from "@/components/Container";
import PageIntro from "@/components/PageIntro";

const ContactPage = () => {
  return (
    <>
      <Head>
        <title>Contact Us | E-Cell SVNIT</title>
        <meta
          name="description"
          content="Get in touch with E-Cell SVNIT to collaborate or learn more about our initiatives."
        />
        <link rel="canonical" href="https://ecellsvnit.com/contact" />
      </Head>
      <PageIntro eyebrow="Contact us" title="Let’s work together">
        <p>We cannot wait to hear from you.</p>
      </PageIntro>
      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <div className="grid grid-cols-1 gap-x-8 gap-y-24 lg:grid-cols-2">
          <ContactDetails />
          <ContactForm />
        </div>
      </Container>
    </>
  );
};

export default ContactPage;
