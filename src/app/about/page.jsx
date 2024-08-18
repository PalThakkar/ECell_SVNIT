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
      <PageIntro eyebrow="About us" title="Welcome to E-Cell" max-w-10xl>
        <p>
          Where business ideas are born from sleep-deprived minds and fueled by an excessive amount of caffeine! If you’ve ever thought, "Hey, I could totally be the next Steve Jobs," or simply wondered why no one’s invented edible textbooks yet, you’re in the right place.
        </p>

        <h2 className="mt-6 text-xl font-bold">What We Do:</h2>
        <div className="mt-10 max-w-none w-full space-y-6 text-base"> {/* Ensured max width is set to none */}
          <p>
            <h3 className="mt-6 text-xl font-semibold">1. Incubate Startups</h3>
            Think of us as your entrepreneurial fairy godparents. We’re here to wave our magic wands and turn your half-baked ideas into fully baked startups. This year, we’re adopting 2-3 lucky startups, providing them with all the resources, mentorship, and support they need. All you need to do is show up with a great idea (and maybe a bribe in the form of coffee).
            
            <h3 className="mt-6 text-xl font-semibold">2. Collaborate & Innovate </h3>
            We’re all about making friends in high places—or at least with other E-Cells and institutes. We’re setting up 10 collaborations this year, which is code for “let’s see how many brains we can cram into one room and hope genius happens.” We’ll be sharing knowledge, trading ideas, and throwing some pretty epic parties, all in the name of innovation.
            
            <h3 className="mt-6 text-xl font-semibold">3. Support Grassroots Businesses </h3>
            We believe in the little guys—or as we like to call them, “future giant corporations.” We’re here to help grassroots businesses grow with a bit of guidance, some opportunities, and a lot of cheering from the sidelines. Who said entrepreneurship had to be all about tech? We’re here for the chaiwalas, the street vendors, and everyone in between.
          </p>
          
          <h2 className="mt-6 text-xl font-bold">What's in store?</h2>
          <p>
            <h3 className="mt-6 text-xl font-semibold">E-Summit & Beyond</h3>
            Buckle up, because this year is going to be a wild ride! We’re kicking off with an intro event, then diving headfirst into our flagship E-Summit, where dreams are made, or at least pitched very convincingly. We’ve got workshops, a pitch deck battle royale, a business fair, and an internship drive that’s basically like The Hunger Games, but with fewer arrows. And don’t miss our podcast, “Chai with E-Cell,” where we spill the entrepreneurial tea.
            
            <h3 className="mt-6 text-xl font-semibold">The Business Wall</h3>
            Got a million-dollar idea? Or just a doodle of a stick figure with a lightbulb over its head? Stick it on our Business Wall! This is where the magic happens—or at least where we collect all the sticky notes that might one day become the next big thing. It’s like Twitter, but with paper, and nobody’s trolling you.
            
            <h3 className="mt-6 text-xl font-semibold">Sell-Out & Merch Madness</h3>
            Can you sell water to a fish? Great! Because we’re putting your sales skills to the test with our Sell-Out challenge. Turn those sales into cold, hard mini-rewards and eternal E-Cell glory. And if that wasn’t enough, we’re tossing out some of our super-cool E-Cell merch. Trust us, you’ll want to be seen in these T-shirts—your mom will be so proud.
          </p>
          
          <h2 className="mt-6 text-xl font-bold">Launchpad – Where Ideas Take Off</h2>
          <p>
            Introducing Launchpad, where your baby startup gets its first wings—or maybe just a gentle push off a very high cliff (with a parachute, of course). This yearlong program offers financial backing, strategic guidance, and the kind of tough love you’d expect from a boot camp. You’ll learn everything from creating an MVP to navigating the treacherous waters of scaling your business. We’ll be there every step of the way, yelling “You got this!” from the sidelines.
          </p>
        </div>
      </PageIntro>
     
      <Cultures />
      <ContactSection />
    </>
  );
};

export default AboutPage;
