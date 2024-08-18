import ContactSection from "@/components/ContactSection";
import Cultures from "@/components/Cultures";
import PageIntro from "@/components/PageIntro";
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
          Where business ideas are born from sleep-deprived minds and fueled by an excessive amount of caffeine! If you&rsquo;ve ever thought, &ldquo;Hey, I could totally be the next Steve Jobs,&rdquo; or simply wondered why no one&rsquo;s invented edible textbooks yet, you&rsquo;re in the right place.
        </p>

        <h2 className="mt-6 text-xl font-bold">What We Do:</h2>
        <div className="mt-10 max-w-none w-full space-y-6 text-base">
          <h3 className="mt-6 text-xl font-semibold">1. Incubate Startups</h3>
          <p>
            Think of us as your entrepreneurial fairy godparents. We&rsquo;re here to wave our magic wands and turn your half-baked ideas into fully baked startups. This year, we&rsquo;re adopting 2-3 lucky startups, providing them with all the resources, mentorship, and support they need. All you need to do is show up with a great idea (and maybe a bribe in the form of coffee).
          </p>
          
          <h3 className="mt-6 text-xl font-semibold">2. Collaborate & Innovate</h3>
          <p>
            We&rsquo;re all about making friends in high places—or at least with other E-Cells and institutes. We&rsquo;re setting up 10 collaborations this year, which is code for “let&rsquo;s see how many brains we can cram into one room and hope genius happens.” We&rsquo;ll be sharing knowledge, trading ideas, and throwing some pretty epic parties, all in the name of innovation.
          </p>
          
          <h3 className="mt-6 text-xl font-semibold">3. Support Grassroots Businesses</h3>
          <p>
            We believe in the little guys—or as we like to call them, “future giant corporations.” We&rsquo;re here to help grassroots businesses grow with a bit of guidance, some opportunities, and a lot of cheering from the sidelines. Who said entrepreneurship had to be all about tech? We&rsquo;re here for the chaiwalas, the street vendors, and everyone in between.
          </p>

          <h2 className="mt-6 text-xl font-bold">What's in store?</h2>
          <h3 className="mt-6 text-xl font-semibold">E-Summit & Beyond</h3>
          <p>
            Buckle up, because this year is going to be a wild ride! We&rsquo;re kicking off with an intro event, then diving headfirst into our flagship E-Summit, where dreams are made, or at least pitched very convincingly. We&rsquo;ve got workshops, a pitch deck battle royale, a business fair, and an internship drive that&rsquo;s basically like The Hunger Games, but with fewer arrows. And don&rsquo;t miss our podcast, &ldquo;Chai with E-Cell,&rdquo; where we spill the entrepreneurial tea.
          </p>
          
          <h3 className="mt-6 text-xl font-semibold">The Business Wall</h3>
          <p>
            Got a million-dollar idea? Or just a doodle of a stick figure with a lightbulb over its head? Stick it on our Business Wall! This is where the magic happens—or at least where we collect all the sticky notes that might one day become the next big thing. It&rsquo;s like Twitter, but with paper, and nobody&rsquo;s trolling you.
          </p>
          
          <h3 className="mt-6 text-xl font-semibold">Sell-Out & Merch Madness</h3>
          <p>
            Can you sell water to a fish? Great! Because we&rsquo;re putting your sales skills to the test with our Sell-Out challenge. Turn those sales into cold, hard mini-rewards and eternal E-Cell glory. And if that wasn&rsquo;t enough, we&rsquo;re tossing out some of our super-cool E-Cell merch. Trust us, you&rsquo;ll want to be seen in these T-shirts—your mom will be so proud.
          </p>

          <h2 className="mt-6 text-xl font-bold">Launchpad – Where Ideas Take Off</h2>
          <p>
            Introducing Launchpad, where your baby startup gets its first wings—or maybe just a gentle push off a very high cliff (with a parachute, of course). This yearlong program offers financial backing, strategic guidance, and the kind of tough love you&rsquo;d expect from a boot camp. You&rsquo;ll learn everything from creating an MVP to navigating the treacherous waters of scaling your business. We&rsquo;ll be there every step of the way, yelling “You got this!” from the sidelines.
          </p>
        </div>
      </PageIntro>
     
      <Cultures />
      <ContactSection />
    </>
  );
};

export default AboutPage;
