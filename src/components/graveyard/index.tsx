import { Box, Button, Paper, Stack, Typography } from '@mui/material';
import React from 'react';
import { useAppDispatch, useAppSelector } from '../../store';
import { AddButton } from '../buttons/add-button';
import { removeFromGraveyard } from '../../store/features/graveyard-slice';
import { addCharacter } from '../../store/features/characters-slice';
import { isOpenTrue } from '../../store/features/snackbar-slice';

export const Graveyard: React.FC = () => {
  const dispatch = useAppDispatch();

  const chars = useAppSelector((state) => state.graveyard.graveyard);
  const deadChars = [...chars];
  return (
    <Stack
      sx={{
        textAlign: 'center',
        borderColor: '#d1d1d1',
        borderRadius: 10,
        mr: 0,
        border: 3,
        mt: 10,
        mb: 20,
        minHeight: 100,
      }}
    >
      <Typography variant={'h6'} sx={{ pt: 2 }}>
        Graveyard
      </Typography>
      <Box>
        {deadChars.map((char, idx) => {
          return (
            <Paper sx={{ m: 2 }}>
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
                      isActive: char.isActive,
                      activeConditions: [],
                    })
                  );
                  dispatch(
                    isOpenTrue({
                      isOpen: true,
                      message: 'Removed from Graveyard!',
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
