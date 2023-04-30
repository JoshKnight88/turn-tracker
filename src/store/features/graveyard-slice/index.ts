import { createSlice, PayloadAction } from '@reduxjs/toolkit';
export interface IGraveyardProps {
  name: string;
  initiative: number;
  hp?: number;
  id: number;
}

interface GraveyardState {
  graveyard: IGraveyardProps[];
}

const initialState: GraveyardState = {
  graveyard: [],
};

export const GraveyardSlice = createSlice({
  name: 'graveyard',
  initialState,
  reducers: {
    addToGraveyard: (
      state,
      action: PayloadAction<{
        name: string;
        initiative: number;
        hp?: number;
        id: number;
      }>
    ) => {
      state.graveyard.push({
        name: action.payload.name,
        initiative: action.payload.initiative,
        hp: action.payload.hp,
        id: action.payload.id,
      });
    },
    removeFromGraveyard: (state, action: PayloadAction<{ id: number }>) => {
      const remainingChars = state.graveyard.filter(
        (char) => char.id !== action.payload.id
      );
      state.graveyard = remainingChars;
    },
  },
});

export default GraveyardSlice.reducer;

export const { addToGraveyard, removeFromGraveyard } = GraveyardSlice.actions;
