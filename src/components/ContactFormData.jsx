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
    const formId = '1FAIpQLSe1tswz9CoTUek_SvjG9ku19Dm4Bs9GXF3PVFsuHoNsr-4PTA';
    const entryNames = {
      name: 'entry.2005620554',
      email: 'entry.1045781291',
      company: 'entry.1065046570',
      phone: 'entry.1166974658',
      message: 'entry.839337160',
      convenientTime: 'entry.550692642',
    };

    const url = `https://docs.google.com/forms/u/0/d/e/1FAIpQLSe1tswz9CoTUek_SvjG9ku19Dm4Bs9GXF3PVFsuHoNsr-4PTA/formResponse`;

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
        alert('Error in sending the message');
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
