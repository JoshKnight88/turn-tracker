import React from 'react';
import { useAppDispatch, useAppSelector } from '../../store';
import { Stack, Typography } from '@mui/material';
import { ListCard } from '../list-card';

export const TurnOrderList: React.FC = () => {
  const dispatch = useAppDispatch();

  const chars = useAppSelector((state) => state.character.characters);

  const allChars = [...chars];

  allChars.sort((a, b) => {
    return b.initiative - a.initiative;
  });

  const removeCharHandler = () => {
    for(const [index, value] of [allChars].entries()) {
console.log(index, value);
    }
     
    
    }
  
  return (
    <Stack>
      <Typography variant={'h4'} sx={{ ml: 10 }}>
        Initiative order
      </Typography>
      {allChars.map((char, idx) => {
        return (
          <ListCard
            name={char.name}
            initiative={char.initiative}
            key={idx}
            onClick={removeCharHandler}
          />
        );
      })}
    </Stack>
  );
};
