import { createSlice, PayloadAction } from '@reduxjs/toolkit';
export interface ICharacterProps {
  name: string;
  initiative: number;
  hp?: number;
  id: number;
}

interface CharacterState {
  characters: ICharacterProps[];
}

const initialState: CharacterState = {
  characters: [],
};

export const CharacterSlice = createSlice({
  name: 'character',
  initialState,
  reducers: {
    addCharacter: (
      state,
      action: PayloadAction<{
        name: string;
        initiative: number;
        hp?: number;
        id: number;
      }>
    ) => {
      state.characters.push({
        name: action.payload.name,
        initiative: action.payload.initiative,
        hp: action.payload.hp,
        id: action.payload.id,
      });
    },
    removeCharacter: (state, action: PayloadAction<{ id: number }>) => {
    
      const remainingChars = state.characters.filter(
        (char) => char.id !== action.payload.id
      );
      state.characters = remainingChars;
    },
  },
});

export default CharacterSlice.reducer;

export const { addCharacter, removeCharacter } = CharacterSlice.actions;
