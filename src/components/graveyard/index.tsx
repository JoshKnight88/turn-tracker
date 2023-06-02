import { Box, Button, Card, Paper, Typography } from '@mui/material';
import React from 'react';
import { useAppDispatch, useAppSelector } from '../../store';
import { removeFromGraveyard } from '../../store/features/graveyard-slice';
import { addCharacter } from '../../store/features/characters-slice';
import { isOpenTrue } from '../../store/features/snackbar-slice';

export const Graveyard: React.FC = () => {
  const dispatch = useAppDispatch();

  const chars = useAppSelector((state) => state.graveyard.graveyard);
  const deadChars = [...chars];
  return (
    <Card
      sx={{
        mb: 1,
        ml: 1,
        mr: 1,
        mt: 2.4,
        textAlign: 'center',
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
    </Card>
  );
};
