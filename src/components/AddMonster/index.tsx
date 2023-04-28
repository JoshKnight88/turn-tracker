import React, { useRef } from 'react';
import { FormControl, Paper, TextField, Typography } from '@mui/material';
import { AddButton } from '../buttons/add-button';
import { useAppDispatch } from '../../store';
import { addMonster } from '../../store/features/monstersSlice';

export const AddMonster: React.FC = () => {
  const dispatch = useAppDispatch();
  const nameRef = useRef('');
  const initiativeRef = useRef('');
  const hpRef = useRef('');


  const addMonsterHandler = () => {
    dispatch(
      addMonster({
        name: nameRef.current,
        initiative: parseInt(initiativeRef.current),
        hp:parseInt(hpRef.current),
      })
    )
    
    console.log('name', nameRef, 'init', initiativeRef, 'hp', hpRef);
  };

  return (
    <Paper sx={{ width: '100%', mt:5, ml: 1, p:2 }}>
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

      <AddButton onClick={addMonsterHandler} />
    </Paper>
  );
};
