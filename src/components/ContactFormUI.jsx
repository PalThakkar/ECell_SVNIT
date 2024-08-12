import React from "react";
import FadeIn from "./FadeIn";
import TextInput from "./TextInput";
import RadioInput from "./RadioInput";
import Button from "./Button";

const ContactFormUI = ({
  name,
  email,
  company,
  phone,
  message,
  convenientTime,
  setName,
  setEmail,
  setCompany,
  setPhone,
  setMessage,
  setConvenientTime,
  handleSubmit,
}) => {
  return (
    <FadeIn>
      <form onSubmit={handleSubmit}>
        <h2 className="font-display text-base font-semibold text-neutral-950">
          Contact Us
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
            label="Email"
            type="email"
            name="email"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextInput
            label="Company"
            name="company"
            autoComplete="organization"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          />
          <TextInput
            label="Phone"
            type="tel"
            name="phone"
            autoComplete="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <TextInput
            label="Message"
            name="message"
            autoComplete="off"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <RadioInput
            label="Convenient Time to Message You"
            name="convenientTime"
            options={[
              { label: "Morning", value: "Morning" },
              { label: "Afternoon", value: "Afternoon" },
              { label: "Evening", value: "Evening" },
              { label: "Anytime", value: "Anytime" },
            ]}
            value={convenientTime}
            onChange={(e) => setConvenientTime(e.target.value)}
          />
        </div>
        <Button type="submit" className="mt-10">
          Send Message
        </Button>
      </form>
    </FadeIn>
  );
};

export default ContactFormUI;