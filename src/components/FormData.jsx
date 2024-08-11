"use client";
import React, { useState } from 'react';
import FormUI from './FormUI';

const FormData = () => {
  const [name, setName] = useState('');
  const [admissionNo, setAdmissionNo] = useState('');
  const [email, setEmail] = useState('');
  const [contactNo, setContactNo] = useState('');
  const [resume, setResume] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const formId = '1FAIpQLSfiXBGpC1oThWmAkxcNO7NVm1e2WNW-NQZtwXGJ4XIqugxRow';
    const entryName = 'entry.2092238618';
    const entryAdmissionNo = 'entry.479301265';
    const entryEmail = 'entry.1556369182';
    const entryContactNo = 'entry.1123953175';
    const entryResume = 'entry.1753222212';

    const url = `https://docs.google.com/forms/d/e/${formId}/formResponse?${entryName}=${encodeURIComponent(
      name
    )}&${entryAdmissionNo}=${encodeURIComponent(admissionNo)}&${entryEmail}=${encodeURIComponent(
      email
    )}&${entryContactNo}=${encodeURIComponent(contactNo)}&${entryResume}=${encodeURIComponent(resume)}`;

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
    <FormUI
      name={name}
      admissionNo={admissionNo}
      email={email}
      contactNo={contactNo}
      resume={resume}
      setName={setName}
      setAdmissionNo={setAdmissionNo}
      setEmail={setEmail}
      setContactNo={setContactNo}
      setResume={setResume}
      handleSubmit={handleSubmit}
    />
  );
};

export default FormData;
