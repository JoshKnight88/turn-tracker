import React from 'react';
import { AddPC } from '../components/add-pc';
import { AddMonster } from '../components/add-monster';
import { TurnOrderList } from '../components/turn-order-list';
import { Box, Grid, Stack } from '@mui/material';
import { Graveyard } from '../components/graveyard';

export const TurnTracker: React.FC = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'row' }}>
      <Stack sx={{ width: '25%', display: 'flex', m: 0 }}>
        <AddPC />
        <AddMonster />
      </Stack>
      <Stack sx={{ width: '50%', display: 'flex', m: 0, textAlign: 'center' }}>
        <TurnOrderList />
      </Stack>
      <Stack sx={{ width: '15%', display: 'flex', m: 0, textAlign: 'center' }}>
        <Graveyard />
      </Stack>
    </Box>
  );
};
