import React from "react";
import SectionIntro from "./SectionIntro";
import Container from "./Container";
import FadeIn from "./FadeIn";
import StylizedImage from "./StylizedImage";
import imageLaptop from "../images/laptop.jpg";
import List, { ListItem } from "./List";

const Services = () => {
  return (
    <>
      <SectionIntro
        eyebrow="Vision"
        title="E-Cell SVNIT fosters vibrant entrepreneurship, innovation, creativity, collaboration, and student leadership."
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
        E-Cell at SVNIT envisions a vibrant campus where entrepreneurship thrives as a driving force of innovation and impact. Guided by our vision, we aspire to create a dynamic ecosystem that nurtures creativity, collaboration, and leadership among students.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
              <StylizedImage
                src={imageLaptop}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div>
          {/* List item */}
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
            <ListItem title="Lead the Way">
            Make SVNIT a top spot for entrepreneurial activities in India.

            </ListItem>
            <ListItem title="Grow a Startup Ecosystem">
            Build a thriving, sustainable startup culture on campus.

            </ListItem>
            <ListItem title="Forge Global Partnerships:">
            Connect with industry leaders, investors, and top universities around the world.

            </ListItem>
            <ListItem title="Solve Real Problems">
            Support startups that tackle important challenges and make a difference.

            </ListItem>
            <ListItem title="Empower Future Leaders">
            Equip students with the skills and confidence to become innovative entrepreneurs and changemakers.
            
            </ListItem>
          </List>
        </div>
      </Container>
    </>
  );
};

export default Services;
