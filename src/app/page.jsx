import Container from "@/components/Container"; // Add this import
import FadeIn from "@/components/FadeIn";
import HeroSection from "@/components/HeroSection";
import Clients from "@/components/Clients";
import Testimonials from "@/components/Testimonials";
import Faq from "@/components/Faq";
import Services from "@/components/Services";
import ContactSection from "@/components/ContactSection";
import logoPhobiaDark from "@/images/ecell.svg";

export const metadata = {
  title: "Home | E-Cell SVNIT",
  description:
    "E-Cell SVNIT empowers students to transform visionary ideas into successful ventures.",
};

export default function Home() {
  return (
    <main className="text-black">
      {/* <Container className="mt-24 sm:mt-32">
        <FadeIn className="max-w-3xl">
          <h1 className="font-display text-4xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-6xl">
            Ignite Innovation, Inspire Entrepreneurship Ignite Innovation,
            Inspire Entrepreneurship
          </h1>
          <p className="mt-6 text-xl text-neutral-600">
            E-cell is the heartbeat of Entrepreneurial Spirit on Campus. We are
            dedicated to empowering students to transform their visionary ideas
            into Successful Ventures by offering the right mix of Networking,
            Mentorship, and Resources.
          </p>
          <br />
          <i className="mt-6 text-xl text-neutral-600">
            From Concept to Reality, We Bridge the Gap with Entrepreneurial
            Flair.
          </i>
        </FadeIn>
      </Container> */}
      <HeroSection />
      <Clients />
      <Testimonials
        className="mt-24 sm:mt-32 lg:mt-40"
        client={{ name: "Ecell", logo: logoPhobiaDark }}
      >
        The team at E-Cell SVNIT went above and beyond with our onboarding,
        providing unparalleled support and resources.
      </Testimonials>
      <Faq />
      <Services />
      <ContactSection />
    </main>
  );
}
