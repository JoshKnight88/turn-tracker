import React, { useRef } from 'react';
import { FormControl, Paper, TextField, Typography } from '@mui/material';
import { AddButton } from '../buttons/add-button';
import { useAppDispatch } from '../../store';
import { addCharacter } from '../../store/features/characters-slice';

export const AddMonster: React.FC = () => {
  const dispatch = useAppDispatch();
  const nameRef = useRef('');
  const initiativeRef = useRef('');
  const hpRef = useRef('');

  const addCharacterHandler = () => {
    dispatch(
      addCharacter({
        name: nameRef.current,
        initiative: parseInt(initiativeRef.current),
        hp: parseInt(hpRef.current),
      })
    );
  };

  return (
    <Paper sx={{ width: '100%', mt: 5, ml: 1, p: 2 }}>
      <Typography>Add Monsters/NPCs</Typography>

      <FormControl sx={{ mt: 3, mb: 3, width: '80%' }}>
        <TextField
          id='monster_name'
          label='monster/NPC name'
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
      <FormControl sx={{ mt: 3, mb: 3, width: '80%' }}>
        <TextField
          id='monster_name'
          label='hp'
          inputRef={hpRef}
          onChange={(e) => (hpRef.current = e.target.value)}
          fullWidth
        />
      </FormControl>

      <AddButton onClick={addCharacterHandler} />
    </Paper>
  );
};
