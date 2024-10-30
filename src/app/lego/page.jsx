import React from "react";
import Link from 'next/link';
import FormDataLego from "../../components/FormDatalego";
import PageIntro from "../../components/PageIntro";
import Container from "../../components/Container";
import LegoDetails from "../../components/LegoDetails";
import { Cover } from "@/components/ui/cover";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";

const LegoFormPage = () => {
  return (
    <>
      <PageIntro eyebrow="LEGO Startup" title="Join the Business Fair" />
      <Container className="mt-4 sm:mt-8 lg:mt-10">
        <h1 className="text-2xl italic md:text-2xl lg:text-3xl font-semibold max-w-7xl mx-auto text-center mt-6 relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
          Turn your ideas into <Cover>reality</Cover>
        </h1>
        <Link href="/lego-score">
        <div className=" flex justify-center text-center">
          <HoverBorderGradient
            containerClassName="rounded-full"
            as="button"
            className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
          >
            <span>Go to Leaderboard</span>
          </HoverBorderGradient>
        </div>
        </Link>
      </Container>
      <Container className="mt-12 sm:mt-16 lg:mt-20">
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
          <LegoDetails />
          <FormDataLego />
        </div>
      </Container>
    </>
  );
};

export default LegoFormPage;
