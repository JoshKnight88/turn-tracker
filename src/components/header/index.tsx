import { Stack, Typography } from '@mui/material'
import React from 'react'

export const Header: React.FC = () => {
    return (
      <Stack sx={{textAlign: 'center'}}>
        <Typography variant={'h4'}>D&D Initiative Tracker</Typography>
        <Typography>Managed with Redux Toolkit</Typography>
      </Stack>
    );
}