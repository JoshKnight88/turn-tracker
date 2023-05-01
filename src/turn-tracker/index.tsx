import React from 'react';
import { AddPC } from '../components/add-pc';
import { AddMonster } from '../components/add-monster';
import { TurnOrderList } from '../components/turn-order-list';
import { Box, Grid, Stack } from '@mui/material';
import { Graveyard } from '../components/graveyard';
import { TurnCounter } from '../components/turn-counter';
import { ClearAllButton } from '../components/buttons/clear-all-button';
import { Header } from '../components/header';

export const TurnTracker: React.FC = () => {
  return (
    <Box
      sx={{
        height: '100vh',
        display: 'grid',
        gridTemplateRows: 'repeat(5, 20%)',
        gridTemplateColumns: '25% 50% 25%',
        gridTemplateAreas: `'title . counter'
         'pc track counter'
         'pc track grave'
         'mon track grave'
         'mon track clear'`,
      }}
    >
      <Box sx={{gridArea: 'title'}}> 
      <Header/>
      </Box>
      <Box sx={{ gridArea: 'pc', alignContent: 'start' }}>
        <AddPC />
      </Box>
      <Box sx={{ gridArea: 'mon' }}>
        <AddMonster />
      </Box>
      <Box sx={{ gridArea: 'track', textAlign: 'center' }}>
        <TurnOrderList />
      </Box>
      <Box sx={{ gridArea: 'counter', textAlign: 'center' }}>
        <TurnCounter />
      </Box>
      <Box sx={{ gridArea: 'grave', justifyItems: 'center' }}>
        <Graveyard />
      </Box>
      <Box sx={{ gridArea: 'clear', justifyItems: 'end' }}>
        <ClearAllButton />
      </Box>
    </Box>
  );
};
