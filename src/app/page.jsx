import Navbar from "@/components/home/Navbar";
import PremiumHeroSection from "@/components/PremiumHeroSection";
import StatsSection from "@/components/home/StatsSection";
import Services from "@/components/Services";
import FeaturedEvents from "@/components/FeaturedEvents";
import PartnersMarquee from "@/components/home/PartnersMarquee";
import GallerySection from "@/components/home/GallerySection";
import Testimonials from "@/components/Testimonials";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Home | E-Cell SVNIT",
  description:
    "The Entrepreneurship Cell of SVNIT Surat empowers students to transform visionary ideas into successful ventures through networking, mentorship, seed grants, and national events.",
};

export default function Home() {
  return (
    <div
      className="w-full min-h-screen relative"
      style={{
        backgroundColor: "#FEFEFE",
        color: "#111111",
        fontFamily: "var(--font-inter), system-ui, sans-serif",
      }}
    >
      {/* Fixed Background Image */}
      <div className="fixed inset-0 pointer-events-none -z-20">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.06]"
          style={{ backgroundImage: "url('/e-cell-fam.jpg')" }}
        />
        {/* Subtle gradient overlay to ensure text readability */}
        <div 
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to bottom, rgba(254,254,254,0.3) 0%, rgba(250,249,246,0.8) 100%)",
          }}
        />
      </div>
      {/* Sticky Glass Navbar */}
      <Navbar />

      {/* Main Landing Sections */}
      <main className="w-full">
        <PremiumHeroSection />
        <StatsSection />
        <Services />
        <FeaturedEvents />
        <PartnersMarquee />
        <GallerySection />
        <Testimonials />
        <Faq />
      </main>
    </div>
  );
}
