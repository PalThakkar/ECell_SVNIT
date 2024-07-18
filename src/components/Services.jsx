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
        eyebrow="Services"
        title="We help you identify, explore and respond to new opportunities."
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
        We provide comprehensive support to help you identify, explore, and respond to new business opportunities. Let us help you turn your ideas into successful ventures.

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
            <ListItem title="Web development">
            Crafting high-quality, dynamic websites tailored to your needs, ensuring a strong online presence.

            </ListItem>
            <ListItem title="Application development">
            Developing robust, user-friendly applications using the latest frameworks.

            </ListItem>
            <ListItem title="E-commerce">
            Designing and developing customized e-commerce platforms to help you reach your customers effectively.

            </ListItem>
            <ListItem title="Custom content management">
            Providing robust and tailored CMS solutions to ensure your website remains engaging and up-to-date.

            </ListItem>
          </List>
        </div>
      </Container>
    </>
  );
};

export default Services;
