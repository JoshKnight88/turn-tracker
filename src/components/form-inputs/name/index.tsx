import React from 'react';
import { InputLabel, OutlinedInput } from '@mui/material';
import FormControl from '@mui/material/FormControl/FormControl';

interface INameInputProps {
  inputLabel: string;
  id: string;
  label: string;
}
export const NameInput: React.FC<INameInputProps> = ({
  inputLabel,
  id,
  label,
}) => {
  return (
    <FormControl sx={{ mt: 3, mb: 3, width: '0%' }}>
      <InputLabel htmlFor='component-outlined'>{inputLabel}</InputLabel>
      <OutlinedInput id={id} label={label}  type='text' fullWidth />
    </FormControl>
  );
};
