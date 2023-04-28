import React from 'react';
import { InputLabel, OutlinedInput } from '@mui/material';
import FormControl from '@mui/material/FormControl/FormControl';

interface IInitiativeInputProps {
  inputLabel: String;
  id: string;
  label: String;
}
export const InitiativeInput: React.FC<IInitiativeInputProps> = ({
  inputLabel,
  id,
  label,
}) => {
  return (
    <FormControl sx={{ mt: 3, mb: 3, width: '100%' }}>
      <InputLabel htmlFor='component-outlined'>{inputLabel}</InputLabel>
      <OutlinedInput id={id} label={label} type='number' fullWidth />
    </FormControl>
  );
};
