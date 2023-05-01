import { Button } from '@mui/material';
import React from 'react';
import { removeAllCharacters } from '../../../store/features/characters-slice';
import { useAppDispatch } from '../../../store';
import { reset } from '../../../store/features/counter-slice';
import { deleteGraveyard } from '../../../store/features/graveyard-slice';

export const ClearAllButton: React.FC = () => {
  const dispatch = useAppDispatch();

  const clearTracker = () => {
    dispatch(reset());
    dispatch(removeAllCharacters());
    dispatch(deleteGraveyard());
  };
  return (
    <Button
      onClick={clearTracker}
      variant='contained'
      type='submit'
      sx={{ backgroundColor: '#E82B25' }}
    >
      Clear Tracker
    </Button>
  );
};
