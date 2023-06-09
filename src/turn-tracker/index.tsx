import React from 'react';
import { AddPC } from '../components/add-pc';
import { AddMonster } from '../components/add-monster';
import { TurnOrderList } from '../components/turn-order-list';
import { Box, Stack } from '@mui/material';
import { Graveyard } from '../components/graveyard';
import { TurnCounter } from '../components/turn-counter';
import { ClearAllButton } from '../components/buttons/clear-all-button';
import { Header } from '../components/header';
import { useIsMobile } from '../hooks/use-is-mobile';
import { TrackerSnackbar } from '../components/snackbar';

export const TurnTracker: React.FC = () => {
  const isMobile = useIsMobile();
  return !isMobile ? (
    <Box sx={{ display: 'flex', bgcolor: '#eaeaea' }}>
      <Stack sx={{ width: '30%', mt: 5 }}>
        <AddPC />
        <AddMonster />
      </Stack>
      <Stack alignItems='center' spacing={10} sx={{ width: '50%', mt: 5 }}>
        <Header />
        <TurnOrderList />
        <TrackerSnackbar />
      </Stack>
      <Stack justifyContent='start' sx={{ width: '25%', mt: 5 }}>
        <TurnCounter />
        <Graveyard />
        <ClearAllButton />
      </Stack>
    </Box>
  ) : (
    <Stack sx={{ bgcolor: '#eaeaea' }}>
      <Header />
      <Box sx={{ mb: 5, mt: 5 }}>
        <AddPC />
        <AddMonster />
      </Box>
      <TurnCounter />
      <TrackerSnackbar />
      <TurnOrderList />
      <Graveyard />
      <ClearAllButton />
    </Stack>
  );
};
