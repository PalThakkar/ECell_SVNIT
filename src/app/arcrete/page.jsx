"use client";

import React from 'react';
import FormData from '@/components/FormData';
import PageIntro from "@/components/PageIntro";
import Container from "@/components/Container";
import JobDetails from '@/components/JobDetails';

const FormPage = () => {
  return (
    <>
      <PageIntro eyebrow="Arcrete" title="Job Application">
        <p>Submit Your Details</p>
      </PageIntro>
      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <div className="grid grid-cols-1 gap-x-8 gap-y-24 lg:grid-cols-2">
          <JobDetails />
          <FormData />
        </div>
      </Container>
    </>
  );
};

export default FormPage;
