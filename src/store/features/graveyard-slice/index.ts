import { createSlice, PayloadAction } from '@reduxjs/toolkit';
export interface IGraveyardProps {
  name: string;
  initiative: number;
  hp?: number;
  id: number;
  isActive: boolean;
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
        isActive: boolean;
      }>
    ) => {
      state.graveyard.push({
        name: action.payload.name,
        initiative: action.payload.initiative,
        hp: action.payload.hp,
        id: action.payload.id,
        isActive: action.payload.isActive,
      });
    },
    removeFromGraveyard: (state, action: PayloadAction<{ id: number }>) => {
      const remainingChars = state.graveyard.filter(
        (char) => char.id !== action.payload.id
      );
      state.graveyard = remainingChars;
    },
    deleteGraveyard: (state) => {
      state.graveyard = [];
    },
  },
});

export default GraveyardSlice.reducer;

export const { addToGraveyard, removeFromGraveyard, deleteGraveyard } =
  GraveyardSlice.actions;
