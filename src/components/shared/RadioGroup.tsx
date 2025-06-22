import React from 'react';
import {
  FormControl,
  FormLabel,
  RadioGroup as MUIRadioGroup,
  FormControlLabel,
  Radio,
} from '@mui/material';

type RadioGroupProps = {
  label: string;
  name: string;
  options: string[];
  required?: boolean;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const RadioGroup: React.FC<RadioGroupProps> = ({
  label,
  name,
  options,
  required = false,
  value,
  onChange,
}) => {
  return (
    <FormControl component="fieldset" required={required}>
      <FormLabel component="legend">{label}</FormLabel>
      <MUIRadioGroup row name={name} value={value} onChange={onChange}>
        {options.map((option) => (
          <FormControlLabel
            key={option}
            value={option}
            control={<Radio />}
            label={option}
          />
        ))}
      </MUIRadioGroup>
    </FormControl>
  );
};

export default RadioGroup;
