import { useRef, useState } from 'react';
import { conditions } from '../../constants/conditions';
import {
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
  Typography,
} from '@mui/material';
import {
  addCondition,
  removeCondition,
} from '../../store/features/characters-slice';
import { useAppDispatch, useAppSelector } from '../../store';

export const ConditionsSelect = (characterId: { characterId: number }) => {
  const [inputValue, setInputValue] = useState('');

  const ref = useRef<HTMLSelectElement>();
  const dispatch = useAppDispatch();

  const chars = useAppSelector((state) => state.character.characters);

  const mapAllConditions = conditions.map((condition, idx) => {
    return (
      <MenuItem value={condition.name} key={idx}>
        {condition.name}
      </MenuItem>
    );
  });

  const findCharacter = chars.find(
    (char) => char.id === characterId.characterId
  );

  const mapSelectedConditions = findCharacter?.activeConditions.map(
    (cond, idx) => {
      return (
        <Typography
          sx={{ cursor: 'pointer' }}
          onClick={() =>
            dispatch(
              removeCondition({ id: characterId.characterId, condId: cond.id })
            )
          }
          key={idx}
        >
          {cond.name}
        </Typography>
      );
    }
  );

  const changeHandler = (event: SelectChangeEvent) => {
    const filteredCond = conditions.filter(
      (cond) => cond.name === event.target.value
    );
    dispatch(
      addCondition({
        conditionName: filteredCond[0].name,
        conditionId: filteredCond[0].id,
        id: characterId.characterId,
      })
    );
  };

  return (
    <Box sx={{ minWidth: 120 }} ref={ref}>
      <FormControl fullWidth>
        <InputLabel id='condition'>Condition</InputLabel>
        <Select
          labelId='condition'
          id='condition-select'
          value={inputValue}
          defaultValue={''}
          label='Condition'
          onChange={changeHandler}
        >
          {mapAllConditions}
        </Select>
      </FormControl>
      {mapSelectedConditions}
    </Box>
  );
};
