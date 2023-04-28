import React from 'react';
import { AddPC } from './components/AddPC';
import { AddMonster } from './components/AddMonster';
import { TurnOrderList } from './components/turn-order-list';
import { Box, Grid, Stack } from '@mui/material';

function App() {
  return (
    <Box sx={{display: 'flex', flexDirection: 'row'}}>
      <Stack sx={{ width: '30%', display: 'flex', m:0 }}>
        <AddPC />
        <AddMonster />
      </Stack>
      <Stack>
        <TurnOrderList />
      </Stack>
    </Box>
  );
}

export default App;
