import { createSlice, PayloadAction } from '@reduxjs/toolkit';
export interface IPlayerCharProps {
  name: string;
  initiative: number;
}

interface PlayerCharState {
  playerChars: IPlayerCharProps[];
}

const initialState: PlayerCharState = {
  playerChars: [],
};

export const PlayerCharSlice = createSlice({
  name: 'playerChar',
  initialState,
  reducers: {
    addPlayerChar: (
      state,
      action: PayloadAction<{ name: string; initiative: number }>
    ) => {
      state.playerChars.push({
        name: action.payload.name,
        initiative: action.payload.initiative,
      });
    },
  },
});

export default PlayerCharSlice.reducer;

export const { addPlayerChar } = PlayerCharSlice.actions;
