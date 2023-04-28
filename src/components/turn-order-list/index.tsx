import React from 'react';
import { useAppSelector } from '../../store';
import { Stack, Typography } from '@mui/material';
import { ListCard } from '../list-card';

export const TurnOrderList: React.FC = () => {
  const playerChars = useAppSelector((state) => state.playerChar.playerChars);
  const monsters = useAppSelector((state) => state.monsters.monsters);
  const allCharacters = [...playerChars, ...monsters];
  allCharacters.sort((a, b) => {
    console.log(a.initiative)
    return b.initiative-a.initiative
  })
  return (
    <Stack>
      <Typography variant={'h4'} sx={{ ml: 10 }}>
        Initiative order
      </Typography>
      {allCharacters.map((character) => {
        return (
          <ListCard name={character.name} initiative={character.initiative} />
        );
      })}
    </Stack>
  );
};
