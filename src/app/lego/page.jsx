import React from 'react';
import FormDataLego from '../../components/FormDatalego';
import PageIntro from "../../components/PageIntro";
import Container from "../../components/Container";
import LegoDetails from '../../components/LegoDetails';

const LegoFormPage = () => {
  return (
    <>
      <PageIntro eyebrow="LEGO Startup" title="Join the Business Fair">
        <p>Turn your ideas into reality and compete for a grand prize!</p>
      </PageIntro>
      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <div className="grid grid-cols-1 gap-x-8 gap-y-24 lg:grid-cols-2">
          <LegoDetails />
          <FormDataLego />
        </div>
      </Container>
    </>
  );
};

export default LegoFormPage;
