import React, { useRef, useState } from 'react';
import { FormControl, Paper, TextField, Typography } from '@mui/material';
import { AddButton } from '../buttons/add-button';
import { useAppDispatch } from '../../store';
import { addCharacter } from '../../store/features/characters-slice';

export const AddPC: React.FC = () => {
  const dispatch = useAppDispatch();

  const [nameField, setNameField] = useState('');
  const [initField, setInitField] = useState('');

  const addCharacterHandler = () => {
    const makeId = Math.floor(Math.random() * 1000);
    dispatch(
      addCharacter({
        name: nameField,
        initiative: parseInt(initField),
        id: makeId,
        isActive: false,
      })
    );
    setNameField('');
    setInitField('');
  };

  return (
    <Paper sx={{ mt: 0, ml: 1, p: 2 }}>
      <Typography>Add PCs</Typography>

      <FormControl sx={{ mt: 3, mb: 3, width: '80%' }}>
        <TextField
          id='PC_name'
          label='PC name'
          value={nameField}
          onChange={(e) => setNameField(e.target.value)}
          fullWidth
          required
        />
      </FormControl>

      <FormControl sx={{ mt: 3, mb: 3, width: '40%', display: 'flex' }}>
        <TextField
          id='initiative'
          label='initiative'
          value={initField}
          fullWidth
          type='number'
          onChange={(e) => setInitField(e.target.value)}
          required
        />
      </FormControl>

      <AddButton onClick={addCharacterHandler} />
    </Paper>
  );
};
