import React, { useEffect, useRef, useState } from 'react';
import { FormControl, Paper, TextField, Typography } from '@mui/material';
import { AddButton } from '../buttons/add-button';
import { useAppDispatch } from '../../store';
import { addCharacter } from '../../store/features/characters-slice';

export const AddMonster: React.FC = () => {
  const dispatch = useAppDispatch();

  const [nameField, setNameField] = useState('');
  const [initField, setInitField] = useState('');
  const [hpField, setHpField] = useState('');
  const [nameIsValid, setNameIsValid] = useState(false);
  const [initIsValid, setInitIsValid] = useState(false);
  const [hpIsValid, setHpIsValid] = useState(false);
  const addCharacterHandler = () => {
    const makeId = Math.floor(Math.random() * 1000);
    dispatch(
      addCharacter({
        name: nameField,
        initiative: parseInt(initField),
        hp: parseInt(hpField),
        id: makeId,
        isActive: false,
        activeConditions: [],
      })
    );
    setNameField('');
    setInitField('');
    setHpField('');
    setNameIsValid(false);
    setInitIsValid(false);
    setHpIsValid(false);
  };

  useEffect(() => {
    if (nameField !== '') {
      setNameIsValid(true);
    }
  }, [nameField]);

  useEffect(() => {
    if (initField !== '') {
      setInitIsValid(true);
    }
  }, [initField]);

  useEffect(() => {
    if (hpField !== '') {
      setHpIsValid(true);
    }
  }, [hpField]);

  const formIsValid = nameIsValid && initIsValid && hpIsValid;

  return (
    <Paper sx={{ mt: 5, ml: 1, p: 2 }}>
      <Typography>Add Monsters/NPCs</Typography>

      <FormControl sx={{ mt: 3, mb: 1, width: '80%' }}>
        <TextField
          id='monster_name'
          label='monster/NPC name'
          value={nameField}
          onChange={(e) => setNameField(e.target.value)}
          fullWidth
          required
        />
      </FormControl>

      <FormControl sx={{ mt: 3, mb: 3, ml: 1, width: '40%' }}>
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
      <FormControl sx={{ mt: 3, mb: 3, ml: 5, width: '40%' }}>
        <TextField
          id='hp'
          label='hp'
          value={hpField}
          type='number'
          onChange={(e) => setHpField(e.target.value)}
          fullWidth
          required
        />
      </FormControl>

      <AddButton onClick={addCharacterHandler} isActiveState={formIsValid} />
    </Paper>
  );
};
