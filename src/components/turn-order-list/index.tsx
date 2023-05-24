import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../store';
import { Box, Button, Card, Paper, Stack, Typography } from '@mui/material';
import { ListCard } from '../list-card';
import { addToGraveyard } from '../../store/features/graveyard-slice';
import { removeCharacter } from '../../store/features/characters-slice';
import { isOpenTrue } from '../../store/features/snackbar-slice';

export const TurnOrderList: React.FC = () => {
  const dispatch = useAppDispatch();

  const chars = useAppSelector((state) => state.character.characters);

  const sortedChars = [...chars];

  sortedChars.sort((a, b) => {
    return b.initiative - a.initiative;
  });

  return (
    <Card
      sx={{
        ml: 2,
        mt: 10,
        mb: 20,
        minHeight: 100,
        width: '90%',
      }}
    >
      <Typography variant={'h4'} sx={{ textAlign: 'center', pt: 2 }}>
        Initiative order
      </Typography>

      {sortedChars.map((char, idx) => {
        return (
          <ListCard
            id={char.id}
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
                  isActive: false,
                })
              );
              dispatch(
                isOpenTrue({ isOpen: true, message: 'Added to Graveyard!' })
              );
            }}
          />
        );
      })}
    </Card>
  );
};
