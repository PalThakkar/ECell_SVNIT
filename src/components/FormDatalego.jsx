'use client'
import React, { useState } from 'react';
import FormUI from './FormUILego';

const FormDataLego = () => {
  // Initializing state for each form field
  const [ideaTitle, setIdeaTitle] = useState('');
  const [teamName, setTeamName] = useState('');
  const [teamLeaderPhone, setTeamLeaderPhone] = useState('');
  const [member1Name, setMember1Name] = useState('');
  const [member1Admission, setMember1Admission] = useState('');
  const [member2Name, setMember2Name] = useState('');
  const [member2Admission, setMember2Admission] = useState('');
  const [member3Name, setMember3Name] = useState('');
  const [member3Admission, setMember3Admission] = useState('');
  const [member4Name, setMember4Name] = useState('');
  const [member4Admission, setMember4Admission] = useState('');
  const [problemsSolved, setProblemsSolved] = useState('');
  const [users, setUsers] = useState('');
  const [valueProvided, setValueProvided] = useState('');
  const [executionSteps, setExecutionSteps] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const formId = '1FAIpQLSd2s48X29BGBE6Y5P4mTt7j9LTN36MaLQSuuDOzeXONwebtRw';
    const url = `https://docs.google.com/forms/d/e/${formId}/formResponse?`
      + `entry.643173321=${encodeURIComponent(ideaTitle)}`
      + `&entry.1412765434=${encodeURIComponent(teamName)}`
      + `&entry.216901882=${encodeURIComponent(teamLeaderPhone)}`
      + `&entry.700074886=${encodeURIComponent(member1Name)}`
      + `&entry.1109468122=${encodeURIComponent(member1Admission)}`
      + `&entry.1919825252=${encodeURIComponent(member2Name)}`
      + `&entry.1027554821=${encodeURIComponent(member2Admission)}`
      + `&entry.924549022=${encodeURIComponent(member3Name)}`
      + `&entry.1557713851=${encodeURIComponent(member3Admission)}`
      + `&entry.483986245=${encodeURIComponent(member4Name)}`
      + `&entry.252227893=${encodeURIComponent(member4Admission)}`
      + `&entry.319657586=${encodeURIComponent(problemsSolved)}`
      + `&entry.578747062=${encodeURIComponent(users)}`
      + `&entry.963875126=${encodeURIComponent(valueProvided)}`
      + `&entry.1169513971=${encodeURIComponent(executionSteps)}`;

    fetch(url, {
      method: 'POST',
      mode: 'no-cors', // Needed to avoid CORS errors since Google Forms does not support CORS
    })
    .then(response => alert('Form submitted successfully!'))
    .catch(error => {
      alert('Error submitting form');
      console.error('Error:', error);
    });
  };

  return (
    <FormUI
      ideaTitle={ideaTitle}
      setIdeaTitle={setIdeaTitle}
      teamName={teamName}
      setTeamName={setTeamName}
      teamLeaderPhone={teamLeaderPhone}
      setTeamLeaderPhone={setTeamLeaderPhone}
      member1Name={member1Name}
      setMember1Name={setMember1Name}
      member1Admission={member1Admission}
      setMember1Admission={setMember1Admission}
      member2Name={member2Name}
      setMember2Name={setMember2Name}
      member2Admission={member2Admission}
      setMember2Admission={setMember2Admission}
      member3Name={member3Name}
      setMember3Name={setMember3Name}
      member3Admission={member3Admission}
      setMember3Admission={setMember3Admission}
      member4Name={member4Name}
      setMember4Name={setMember4Name}
      member4Admission={member4Admission}
      setMember4Admission={setMember4Admission}
      problemsSolved={problemsSolved}
      setProblemsSolved={setProblemsSolved}
      users={users}
      setUsers={setUsers}
      valueProvided={valueProvided}
      setValueProvided={setValueProvided}
      executionSteps={executionSteps}
      setExecutionSteps={setExecutionSteps}
      handleSubmit={handleSubmit}
    />
  );
};

export default FormDataLego;
