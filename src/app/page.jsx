import Clients from "@/components/Clients";
import ContactSection from "@/components/ContactSection";
import Container from "@/components/Container";
import FadeIn from "@/components/FadeIn";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import logoPhobiaDark from "@/images/clients/phobia/logo-dark.svg";

export default function Home() {
  return (
    <main className="text-black">
      <Container className="mt-24 sm:mt-32">
        <FadeIn className="max-w-3xl">
          <h1 className="font-display text-4xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-6xl">
            Ignite Innovation, Inspire Entrepreneurship
          </h1>
          <p className="mt-6 text-xl text-neutral-600">
          Welcome to E-Cell SVNIT! We are a dynamic team dedicated to fostering entrepreneurial spirit among students. Partnered with Ashine and SVNIT, we provide the resources and mentorship you need to turn your ideas into reality.
          </p>
          <br />
          <i className="mt-6 text-xl text-neutral-600">
          From Concept to Reality, We Bridge the Gap with Entrepreneurial Flair.          
          </i>
        </FadeIn>
      </Container>
      <Clients />
      <Testimonials
        className="mt-24 sm:mt-32 lg:mt-40"
        client={{ name: "Ecell", logo: logoPhobiaDark }}
      >
        The team at E-Cell SVNIT went above and beyond with our onboarding, providing unparalleled support and resources.
      </Testimonials>
      
      <ContactSection />
    </main>
  );
}
