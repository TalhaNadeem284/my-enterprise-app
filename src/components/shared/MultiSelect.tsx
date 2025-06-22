import React from 'react';
import { FormControl, InputLabel, Select, MenuItem, SelectChangeEvent, OutlinedInput } from '@mui/material';

type MultiSelectProps = {
  label: string;
  name: string;
  options: string[];
  value?: string[];
  onChange?: (event: SelectChangeEvent<string[]>) => void;
};

const MultiSelect: React.FC<MultiSelectProps> = ({
  label,
  name,
  options,
  value = [],
  onChange,
}) => {
  return (
    <FormControl fullWidth>
      <InputLabel id={`${name}-label`}>{label}</InputLabel>
      <Select
        labelId={`${name}-label`}
        id={name}
        multiple
        value={value}
        onChange={onChange}
        input={<OutlinedInput label={label} />}
        renderValue={(selected) => (selected as string[]).join(', ')}
      >
        {options.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default MultiSelect;
