import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IConditionsProps {
  name: string;
  id: number;
}

interface ConditionsState {
  conditions: IConditionsProps[];
}

const initialState: ConditionsState = {
  conditions: [],
};

export const ConditionSlice = createSlice({
  name: 'condition',
  initialState,
  reducers: {
    addCondition: (
      state,
      action: PayloadAction<{
        name: string;
        id: number;
      }>
    ) => {
      state.conditions.push({
        name: action.payload.name,
        id: action.payload.id,
      });
    },
    removeCondition: (state, action: PayloadAction<{ id: number }>) => {
      const remainingConditions = state.conditions.filter(
        (con) => con.id !== action.payload.id
      );
      state.conditions = remainingConditions;
    },
  },
});

export default ConditionSlice.reducer;

export const { addCondition, removeCondition } = ConditionSlice.actions;
