import { Box, Button, Paper, Stack, Typography } from '@mui/material';
import React from 'react';
import { useAppDispatch, useAppSelector } from '../../store';
import { AddButton } from '../buttons/add-button';
import { removeFromGraveyard } from '../../store/features/graveyard-slice';
import { addCharacter } from '../../store/features/characters-slice';

export const Graveyard: React.FC = () => {
  const dispatch = useAppDispatch();

  const chars = useAppSelector((state) => state.graveyard.graveyard);
  const deadChars = [...chars];
  return (
    <Stack>
      <Typography variant={'h6'}>Graveyard</Typography>
      <Box>
        {deadChars.map((char, idx) => {
          return (
            <Paper sx={{m:2}}>
              <Typography>{char.name}</Typography>
              <Button
                onClick={() => {
                  dispatch(removeFromGraveyard({ id: char.id }));
                  dispatch(
                    addCharacter({
                      name: char.name,
                      initiative: char.initiative,
                      hp: char.hp,
                      id: char.id,
                    })
                  );
                }}
              >
                Undo
              </Button>
            </Paper>
          );
        })}
      </Box>
    </Stack>
  );
};
