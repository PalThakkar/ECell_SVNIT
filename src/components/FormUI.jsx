import React from "react";
import FadeIn from "./FadeIn";
import TextInput from "./TextInput";
import RadioInput from "./RadioInput";
import Button from "./Button";

const JobApplicationForm = ({
  name,
  admissionNo,
  email,
  contactNo,
  resume,
  setName,
  setAdmissionNo,
  setEmail,
  setContactNo,
  setResume,
  handleSubmit,
}) => {
  return (
    <FadeIn>
      <form onSubmit={handleSubmit}>
        <h2 className="font-display text-base font-semibold text-neutral-950">
          Job Application Form
        </h2>
        <div className="isolate mt-6 -space-y-px rounded-2xl bg-white/50">
          <TextInput
            label="Name"
            name="name"
            autoComplete="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextInput
            label="Admission No."
            name="admissionNo"
            autoComplete="off"
            value={admissionNo}
            onChange={(e) => setAdmissionNo(e.target.value)}
          />
          <TextInput
            label="Email"
            type="email"
            name="email"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextInput
            label="Contact No."
            type="tel"
            name="contactNo"
            autoComplete="tel"
            value={contactNo}
            onChange={(e) => setContactNo(e.target.value)}
          />
          <TextInput
            label="Resume Link"
            name="resume"
            autoComplete="off"
            value={resume}
            onChange={(e) => setResume(e.target.value)}
          />
        </div>
        <Button type="submit" className="mt-10">
          Submit Application
        </Button>
      </form>
    </FadeIn>
  );
};

export default JobApplicationForm;
