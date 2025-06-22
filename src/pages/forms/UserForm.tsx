import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Paper,
  Typography,
  Stack,
} from '@mui/material';

import Input from '@/components/shared/Input';
import Button from '@/components/shared/Button';
import RadioGroup from '@/components/shared/RadioGroup';
import MultiSelect from '@/components/shared/MultiSelect';

const UserForm = () => {
  const navigate = useNavigate();

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [gender, setGender] = useState('');
  const [hobbies, setHobbies] = useState<string[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ fullName, email, phone, gender, hobbies });
    navigate('/forms/product');
  };

  return (
    <Box mt={6} display="flex" justifyContent="center">
      <Paper elevation={3} sx={{ p: 5, width: '100%', maxWidth: 720 }}>
        <Typography variant="h4" align="center" color="primary" gutterBottom>
          User Registration
        </Typography>
        <Typography variant="body2" align="center" color="textSecondary" mb={3}>
          Please fill out the form below
        </Typography>

        <form onSubmit={handleSubmit}>
          <Stack spacing={3}>
            <Input
              label="Full Name"
              name="fullName"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
            <Input
              label="Email Address"
              name="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Input
              label="Phone Number"
              name="phone"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
            <RadioGroup
              label="Gender"
              name="gender"
              options={['Male', 'Female', 'Other']}
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              required
            />
            <MultiSelect
              label="Hobbies"
              name="hobbies"
              options={['Reading', 'Gaming', 'Traveling', 'Music']}
              value={hobbies}
              onChange={(e) => setHobbies(e.target.value as string[])}
            />
            <Box textAlign="center" mt={2}>
              <Button type="submit">Continue</Button>
            </Box>
          </Stack>
        </form>
      </Paper>
    </Box>
  );
};

export default UserForm;
