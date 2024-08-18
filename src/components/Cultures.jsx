import React from "react";
import SectionIntro from "./SectionIntro";
import Container from "./Container";
import { GridList, GridListItem } from "./GridList";

const Cultures = () => {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-24 sm:mt-32 lg:mt-40 lg:py-32">
      <SectionIntro
        eyebrow="E-Cell Team's Mission"
        title="Vision to Venture"
        invert
      >
        <p>
        We’re not just a club; we’re a startup-making machine!
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <GridList>
          <GridListItem title="PR Team" invert>
          Our PR team is out there charming VCs, angel investors, and anyone with a big checkbook.
          </GridListItem>
          <GridListItem title="Events Team" invert>
          The Events team is planning mind-blowing happenings that make Coachella look like a kid’s birthday party.
          </GridListItem>
          <GridListItem title="Start up Team" invert>
          The Startups team is hunting down the next unicorn.
          </GridListItem>
          <GridListItem title="Tech Team" invert>
          Our Tech team is building the coolest website you’ve ever seen (because why not?)
          </GridListItem>
          <GridListItem title="Media and Publicity Team" invert>
          And let’s not forget the Media and Publicity team, who are basically running a full-time content factory to keep you updated, entertained, and just the right amount of hyped.
          </GridListItem>
        </GridList>
      </Container>
      
    </div>
  );
};

export default Cultures;
