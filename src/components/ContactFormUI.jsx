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
  contactTime,
  setName,
  setEmail,
  setCompany,
  setPhone,
  setMessage,
  setContactTime,
  handleSubmit,
}) => {
  return (
    <FadeIn>
      <form onSubmit={handleSubmit}>
        <h2 className="font-display text-base font-semibold text-neutral-950">
          Contact Form
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
          
          {/* Radio buttons for convenient time */}
          <div className="border border-neutral-300 px-6 py-8 first:rounded-t-2xl last:rounded-b-2xl">
            <fieldset>
              <legend className="text-base/6 text-neutral-500">Convenient time to contact you</legend>
            </fieldset>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-8">
              <RadioInput
                label="Morning"
                name="contactTime"
                value="Morning"
                checked={contactTime === "Morning"}
                onChange={(e) => setContactTime(e.target.value)}
              />
              <RadioInput
                label="Afternoon"
                name="contactTime"
                value="Afternoon"
                checked={contactTime === "Afternoon"}
                onChange={(e) => setContactTime(e.target.value)}
              />
              <RadioInput
                label="Evening"
                name="contactTime"
                value="Evening"
                checked={contactTime === "Evening"}
                onChange={(e) => setContactTime(e.target.value)}
              />
              <RadioInput
                label="Anytime"
                name="contactTime"
                value="Anytime"
                checked={contactTime === "Anytime"}
                onChange={(e) => setContactTime(e.target.value)}
              />
            </div>
          </div>
        </div>
        <Button type="submit" className="mt-10">
          Let’s work together
        </Button>
      </form>
    </FadeIn>
  );
};

export default ContactFormUI;
