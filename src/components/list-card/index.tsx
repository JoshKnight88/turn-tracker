import React, { useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  Typography,
} from '@mui/material';
// import { DeadButton } from '../buttons/dead-button';
import { conditions } from '../../constants/conditions';
import { useAppSelector } from '../../store';
import { ConditionsSelect } from '../conditions-select';

interface IListCardProps {
  name: string;
  initiative: number;
  hp?: number;
  onClick: () => void;
  
}



export const ListCard: React.FC<IListCardProps> = ({
  name,
  initiative,
  hp,
  onClick,
  
}) => {
  return (
    <Card sx={{ width: '80%', mb: 2, ml: 10, mt: 5 }}>
      <CardContent>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <Typography sx={{ ml: 2, mb: 5, fontWeight: 'bold', fontSize: 20 }}>
            {name}
          </Typography>
          <Typography
            sx={{
              mr: 2,
              mb: 5,
            }}
          >
            Initiative {initiative}
          </Typography>
          {hp && (
            <TextField
              id='hp'
              label='hp'
              defaultValue={hp}
              type='number'
              sx={{ width: '20%' }}
            />
          )}
        </Box>
        <Button
          variant='contained'
          onClick={() => onClick()}
          sx={{
            borderRadius: '50%',
            backgroundColor: '#E82B25',
            width: 50,
            height: 50,
            mt: 1,
            mb: 5,
          }}
        >
          Dead
        </Button>
       
        <ConditionsSelect/>
      </CardContent>
    </Card>
  );
};
