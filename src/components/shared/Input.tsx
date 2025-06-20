import React from 'react';

type InputProps = {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
};

const Input = ({ label, name, type = 'text', required = false }: InputProps) => (
  <div className="flex flex-col">
    <label htmlFor={name} className="mb-1 font-medium">
      {label}
    </label>
    <input
      id={name}
      name={name}
      type={type}
      required={required}
      className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  </div>
);

export default Input;