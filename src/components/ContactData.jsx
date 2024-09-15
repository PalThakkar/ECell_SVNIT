"use client";
import React, { useState } from 'react';
import ContactFormUI from './ContactFormUI';

const ContactData = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [contactTime, setContactTime] = useState('Anytime'); // New state for contact time

  const handleSubmit = (e) => {
    e.preventDefault();

    const formId = '1FAIpQLSfddEMf2DmCNWmdZedzwyMZFOIoOJ7JxkoeF1ZtF8694VdjqA';
    const entryNames = {
      name: 'entry.2005620554',
      email: 'entry.1045781291',
      company: 'entry.1065046570',
      phone: 'entry.1166974658',
      message: 'entry.839337160',
      contactTime: 'entry.376090836', // New entry ID for contact time
    };

    const url = `https://docs.google.com/forms/d/e/${formId}/formResponse?${entryNames.name}=${encodeURIComponent(
      name
    )}&${entryNames.email}=${encodeURIComponent(email)}&${entryNames.company}=${encodeURIComponent(
      company
    )}&${entryNames.phone}=${encodeURIComponent(phone)}&${entryNames.message}=${encodeURIComponent(
      message
    )}&${entryNames.contactTime}=${encodeURIComponent(contactTime)}`;

    fetch(url, {
      method: 'POST',
      mode: 'no-cors',
    })
      .then(() => {
        alert('Form submitted successfully!');
      })
      .catch((error) => {
        alert('Error submitting form');
        console.error('Error:', error);
      });
  };

  return (
    <ContactFormUI
      name={name}
      email={email}
      company={company}
      phone={phone}
      message={message}
      contactTime={contactTime} // Pass the new state
      setName={setName}
      setEmail={setEmail}
      setCompany={setCompany}
      setPhone={setPhone}
      setMessage={setMessage}
      setContactTime={setContactTime} // New setter for contact time
      handleSubmit={handleSubmit}
    />
  );
};

export default ContactData;
