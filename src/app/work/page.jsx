import Head from "next/head";
import PageIntro from "@/components/PageIntro";
import React from "react";

const WorkPage = () => {
  return (
    <>
      <Head>
        <title>Our Work | E-Cell SVNIT</title>
        <meta
          name="description"
          content="Explore our proven solutions for real-world problems. See how we create impact through our projects."
        />
        <link rel="canonical" href="https://ecellsvnit.com/work" />
      </Head>
      <PageIntro
        eyebrow="Our work"
        title="Proven solutions for real-world problems."
      >
        <p>
          We believe in efficiency and maximizing our resources to provide the
          best value to our clients. The primary way we do that is by re-using
          the same five projects we’ve been developing for the past decade.
        </p>
      </PageIntro>
    </>
  );
};

export default WorkPage;
