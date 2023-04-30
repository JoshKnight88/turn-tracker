import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../store';
import { Paper, Stack, Typography } from '@mui/material';
import { ListCard } from '../list-card';
import { addToGraveyard } from '../../store/features/graveyard-slice';
import { removeCharacter } from '../../store/features/characters-slice';

export const TurnOrderList: React.FC = () => {
  const dispatch = useAppDispatch();

  const chars = useAppSelector((state) => state.character.characters);
  const sortedChars = [...chars];
  console.log(sortedChars);
  sortedChars.sort((a, b) => {
    return b.initiative - a.initiative;
  });

  return (
    <Stack>
      <Typography variant={'h4'}>Initiative order</Typography>
      <Paper sx={{overflowY: 'scroll'}}>
        {sortedChars.map((char, idx) => {
          return (
            <ListCard
              name={char.name}
              initiative={char.initiative}
              hp={char.hp}
              key={idx}
              onClick={() => {
                dispatch(removeCharacter({ id: char.id }));
                dispatch(
                  addToGraveyard({
                    name: char.name,
                    initiative: char.initiative,
                    hp: char.hp,
                    id: char.id,
                  })
                );
              }}
            />
          );
        })}
      </Paper>
    </Stack>
  );
};
