import React from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '@/components/shared/Input';
import Button from '@/components/shared/Button';

const UserForm = () => {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add validation or form processing logic here if needed
    navigate('/forms/product');
  };

  return (
    <form className="space-y-4 p-6" onSubmit={handleSubmit}>
      <h2 className="text-xl font-bold">User Form</h2>
      <Input label="Name" name="name" required />
      <Input label="Email" name="email" type="email" required />
      <Button type="submit">Submit</Button>
    </form>
  );
};

export default UserForm;