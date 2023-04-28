import React, { useRef } from 'react';
import { FormControl, Paper, TextField, Typography } from '@mui/material';
import { AddButton } from '../buttons/add-button';
import { addPlayerChar } from '../../store/features/playerCharSlice';
import { useAppDispatch } from '../../store';

export const AddPC: React.FC = () => {
  const dispatch = useAppDispatch();
  const nameRef = useRef('');
  const initiativeRef = useRef('');

  const addPlayerHandler = () => {
    dispatch(
      addPlayerChar({
        name: nameRef.current,
        initiative: parseInt(initiativeRef.current),
      })
    );
    console.log('name', nameRef, 'init', initiativeRef);
  };

  return (
    <Paper sx={{ width: '100%', mt: 5, ml: 1, p: 2 }}>
      <Typography>Add PCs</Typography>

      <FormControl sx={{ mt: 3, mb: 3, width: '80%' }}>
        <TextField
          id='PC_name'
          label='PC name'
          inputRef={nameRef}
          onChange={(e) => (nameRef.current = e.target.value)}
          fullWidth
        />
      </FormControl>

      <FormControl sx={{ mt: 3, mb: 3, width: '40%' }}>
        <TextField
          id='initiative'
          label='initiative'
          inputRef={initiativeRef}
          fullWidth
          type='number'
          onChange={(e) => (initiativeRef.current = e.currentTarget.value)}
        />
      </FormControl>

      <AddButton onClick={addPlayerHandler} />
    </Paper>
  );
};