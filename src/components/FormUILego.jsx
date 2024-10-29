import React from 'react';
import FadeIn from "./FadeIn";
import TextInput from "./TextInput";
import Button from "./Button";

const FormUILego = ({
  ideaTitle, setIdeaTitle,
  teamName, setTeamName,
  teamLeaderPhone, setTeamLeaderPhone,
  member1Name, setMember1Name,
  member1Admission, setMember1Admission,
  member2Name, setMember2Name,
  member2Admission, setMember2Admission,
  member3Name, setMember3Name,
  member3Admission, setMember3Admission,
  member4Name, setMember4Name,
  member4Admission, setMember4Admission,
  problemsSolved, setProblemsSolved,
  users, setUsers,
  valueProvided, setValueProvided,
  executionSteps, setExecutionSteps,
  handleSubmit
}) => {
  return (
    <FadeIn>
      <div className="space-y-6">
        <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4" role="alert">
          <p className="font-bold">Registration Closed</p>
          <p>We&apos;re sorry, but the registration period for the Lego Startup Idea competition has ended. Thank you for your interest!</p>
          </div>
        <form onSubmit={(e) => e.preventDefault()}>
          <h2 className="font-display text-base font-semibold text-neutral-950">
            Lego Startup Idea Submission Form
          </h2>
          <div className="isolate mt-6 -space-y-px rounded-2xl bg-white/50">
            <TextInput label="Idea Title" value={ideaTitle} onChange={e => setIdeaTitle(e.target.value)} disabled />
            <TextInput label="Team Name" value={teamName} onChange={e => setTeamName(e.target.value)} disabled />
            <TextInput label="Team Leader Phone" type="tel" value={teamLeaderPhone} onChange={e => setTeamLeaderPhone(e.target.value)} disabled />
            
            <TextInput label="Member 1 Name" value={member1Name} onChange={e => setMember1Name(e.target.value)} disabled />
            <TextInput label="Member 1 Admission Number" value={member1Admission} onChange={e => setMember1Admission(e.target.value)} disabled />
            <TextInput label="Member 2 Name" value={member2Name} onChange={e => setMember2Name(e.target.value)} disabled />
            <TextInput label="Member 2 Admission Number" value={member2Admission} onChange={e => setMember2Admission(e.target.value)} disabled />
            <TextInput label="Member 3 Name" value={member3Name} onChange={e => setMember3Name(e.target.value)} disabled />
            <TextInput label="Member 3 Admission Number" value={member3Admission} onChange={e => setMember3Admission(e.target.value)} disabled />
            <TextInput label="Member 4 Name" value={member4Name} onChange={e => setMember4Name(e.target.value)} disabled />
            <TextInput label="Member 4 Admission Number" value={member4Admission} onChange={e => setMember4Admission(e.target.value)} disabled />

            <TextInput label="Problems Being Solved" value={problemsSolved} onChange={e => setProblemsSolved(e.target.value)} disabled />
            <TextInput label="Users" value={users} onChange={e => setUsers(e.target.value)} disabled />
            <TextInput label="Value Provided to Users" value={valueProvided} onChange={e => setValueProvided(e.target.value)} disabled />
            <TextInput label="Execution Steps" value={executionSteps} onChange={e => setExecutionSteps(e.target.value)} disabled />
          </div>
          <Button type="submit" className="mt-10" disabled>
            Registration Closed
          </Button>
        </form>
      </div>
    </FadeIn>
  );
};

export default FormUILego;