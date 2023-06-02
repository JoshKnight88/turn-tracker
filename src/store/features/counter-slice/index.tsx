import { createSlice } from '@reduxjs/toolkit';

export interface CounterState {
  value: number;
}

const initialState = {
  value: 0,
};

export const CounterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    reset: (state) => {
      state.value = 0;
    },
  },
});

export const { increment, reset } = CounterSlice.actions;

export default CounterSlice.reducer;
