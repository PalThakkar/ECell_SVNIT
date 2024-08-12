"use client";

import React, { useState } from 'react';
import ContactFormUI from './ContactFormUI';

const ContactFormData = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [convenientTime, setConvenientTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Google Form ID and field identifiers
    const formId = '1FAIpQLSfgKK2rXHXdJ-pM6ZobwLYgBwsjpRwV_mNOU09jKSPfCbKg8A';
    const entryNames = {
      name: 'entry.1267831405',
      email: 'entry.726916356',
      company: 'entry.199992336',
      phone: 'entry.1956359972',
      message: 'entry.434038279',
      convenientTime: 'entry.226440297',
    };

    const url = `https://docs.google.com/forms/d/e/${formId}/formResponse`;

    const data = new URLSearchParams({
      [entryNames.name]: name,
      [entryNames.email]: email,
      [entryNames.company]: company,
      [entryNames.phone]: phone,
      [entryNames.message]: message,
      [entryNames.convenientTime]: convenientTime,
    });

    fetch(url, {
      method: 'POST',
      body: data,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    })
      .then(() => {
        alert('Message sent successfully!');
      })
      .catch((error) => {
        alert('Error sending message');
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
      convenientTime={convenientTime}
      setName={setName}
      setEmail={setEmail}
      setCompany={setCompany}
      setPhone={setPhone}
      setMessage={setMessage}
      setConvenientTime={setConvenientTime}
      handleSubmit={handleSubmit}
    />
  );
};

export default ContactFormData;
