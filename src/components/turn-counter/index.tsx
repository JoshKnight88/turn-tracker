import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import { useAppDispatch, useAppSelector } from '../../store';
import { increment, reset } from '../../store/features/counter-slice';

export const TurnCounter: React.FC = () => {
  const dispatch = useAppDispatch();

  const turnNumber = useAppSelector((state) => state.counter.value);
  const incrementTurn = () => {
    dispatch(increment());
  };

  const resetCounter = () => {
    dispatch(reset());
  };
  return (
    <Box sx={{display: 'flex', flexDirection: 'column'}}>
      <Typography>Turn</Typography>
      <Button
        onClick={incrementTurn}
        sx={{ fontSize: 40, height: 'auto', decoration: 'none' }}
      >
        {turnNumber}
      </Button>
      <Button sx={{fontSize: 10}} onClick={resetCounter}>reset</Button>
    </Box>
  );
};
