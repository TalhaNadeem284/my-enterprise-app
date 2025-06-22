
import React from 'react';
import { Button as MUIButton, ButtonProps } from '@mui/material';

const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <MUIButton variant="contained" color="primary" {...props}>
      {children}
    </MUIButton>
  );
};

export default Button;
