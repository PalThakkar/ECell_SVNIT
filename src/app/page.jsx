import Container from "@/components/Container";
import FadeIn from "@/components/FadeIn";
import Testimonials from "@/components/Testimonials";
import Faq from "@/components/Faq";
import Services from "@/components/Services";
import logoPhobiaDark from "@/images/ecell.svg";
import HeroSection from "@/components/HeroSection";

export const metadata = {
  title: "Home | E-Cell SVNIT",
  description:
    "E-Cell SVNIT empowers students to transform visionary ideas into successful ventures.",
};

export default function Home() {
  return (
    <main className="text-black">
      <HeroSection />
      <Testimonials
        className="mt-24 sm:mt-32 lg:mt-40"
        client={{ name: "Ecell", logo: logoPhobiaDark }}
      >
        The team at E-Cell SVNIT went above and beyond with our onboarding,
        providing unparalleled support and resources.
      </Testimonials>
      <Services />
      <Faq />
    </main>
  );
}
