import React, { useRef, useState } from 'react';
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
} from '../../store/features/conditions-slice';
import { useAppDispatch, useAppSelector } from '../../store';

export const ConditionsSelect = () => {
  const [inputValue, setInputValue] = useState('');

  const dispatch = useAppDispatch();

  const makeId = Math.floor(Math.random() * 1000);

  const selectedConditions = useAppSelector(
    (state) => state.condition.conditions
  );

  console.log(selectedConditions);

  const mapAllConditions = conditions.map((condition, idx) => {
    return (
      <MenuItem value={condition.name} key={idx}>
        {condition.name}
      </MenuItem>
    );
  });

  const mapSelectedConditions = selectedConditions.map(
    (selectedCondition, idx) => {
      return (
        <Typography
          sx={{ cursor: 'pointer' }}
          onClick={() =>
            dispatch(removeCondition({ id: selectedCondition.id }))
          }
          key={idx}
        >
          {selectedCondition.name}
        </Typography>
      );
    }
  );

  const changeHandler = (event: SelectChangeEvent) => {
    dispatch(addCondition({ name: event.target.value, id: makeId }));
    setInputValue('Condition');
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id='condition'>Condition</InputLabel>
        <Select
          labelId='condition'
          id='condition-select'
          value={inputValue}
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
