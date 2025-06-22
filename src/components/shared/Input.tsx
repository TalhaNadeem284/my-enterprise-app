import React from 'react';
import { TextField, TextFieldProps } from '@mui/material';

type InputProps = {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
} & Omit<TextFieldProps, 'variant'>;

const Input = ({ label, name, type = 'text', required = false, ...rest }: InputProps) => (
  <TextField
    fullWidth
    label={label}
    name={name}
    type={type}
    required={required}
    variant="outlined"
    margin="normal"
    {...rest}
  />
);

export default Input;
