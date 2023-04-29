import React from 'react';
import { Box, Card, CardContent, Typography } from '@mui/material';
import { DeadButton } from '../buttons/dead-button';
import { conditions } from '../../constants/conditions';
import { useAppSelector } from '../../store';

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
    <Card sx={{ width: '50%', mb: 2, ml: 10, mt: 5 }}>
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
        </Box>
        <DeadButton onClick={onClick} />

        <Box sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
          {conditions.map((condition) => {
            return (
              <Typography sx={{ fontSize: 10, margin: 1 }}>
                {condition}
              </Typography>
            );
          })}
        </Box>
      </CardContent>
    </Card>
  );
};
