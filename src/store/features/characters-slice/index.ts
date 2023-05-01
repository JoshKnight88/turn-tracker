import { createSlice, PayloadAction } from '@reduxjs/toolkit';
export interface ICharacterProps {
  name: string;
  initiative: number;
  hp?: number;
  id: number;
  isActive: boolean;
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
        isActive: boolean;
      }>
    ) => {
      state.characters.push({
        name: action.payload.name,
        initiative: action.payload.initiative,
        hp: action.payload.hp,
        id: action.payload.id,
        isActive: action.payload.isActive,
      });
    },
    removeCharacter: (state, action: PayloadAction<{ id: number }>) => {
      const remainingChars = state.characters.filter(
        (char) => char.id !== action.payload.id
      );
      state.characters = remainingChars;
    },
    removeAllCharacters: (state) => {
      state.characters = [];
    },
  },
});

export default CharacterSlice.reducer;

export const { addCharacter, removeCharacter, removeAllCharacters } =
  CharacterSlice.actions;
