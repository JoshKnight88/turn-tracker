import { createSlice, PayloadAction } from '@reduxjs/toolkit';
export interface IMonsterProps {
  name: string;
  initiative: number;
  hp?: number;
}

interface MonsterState {
  monsters: IMonsterProps[];
}

const initialState: MonsterState = {
  monsters: [],
};

export const MonsterSlice = createSlice({
  name: 'monster',
  initialState,
  reducers: {
    addMonster: (
      state,
      action: PayloadAction<{ name: string; initiative: number; hp: number }>
    ) => {
      state.monsters.push({
        name: action.payload.name,
        initiative: action.payload.initiative,
        hp: action.payload.hp,
      });
    },
  },
});

export default MonsterSlice.reducer;

export const { addMonster } = MonsterSlice.actions;
