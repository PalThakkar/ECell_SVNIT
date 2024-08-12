import React from 'react';

const RadioInput = ({ label, name, options, value, onChange }) => (
  <div className="border border-neutral-300 px-6 py-8 first:rounded-t-2xl last:rounded-b-2xl">
    <fieldset>
      <legend className="text-base/6 text-neutral-500">{label}</legend>
    </fieldset>
    <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-8">
      {options.map((option) => (
        <label key={option.value} className="flex gap-x-3">
          <input
            className="h-6 w-6 flex-none appearance-none rounded-full border border-neutral-950/20 outline-none checked:border-[0.5rem] checked:border-neutral-950 focus-visible:ring-1 focus-visible:ring-neutral-950 focus-visible:ring-offset-2"
            type="radio"
            value={option.value}
            name={name}
            checked={value === option.value}
            onChange={onChange}
          />
          <span className="text-base/6 text-neutral-950">{option.label}</span>
        </label>
      ))}
    </div>
  </div>
);

export default RadioInput;
