import { createSlice, PayloadAction } from '@reduxjs/toolkit';
export interface ICharacterProps {
  name: string;
  initiative: number;
  hp?: number;
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
      action: PayloadAction<{ name: string; initiative: number; hp?: number }>
    ) => {
      state.characters.push({
        name: action.payload.name,
        initiative: action.payload.initiative,
        hp: action.payload.hp,
      });
    },
    removeCharacter: (
      state, action: PayloadAction<{ name: string; initiative: number; hp?: number }>
    ) => {

    }
  },
});

export default CharacterSlice.reducer;

export const { addCharacter, removeCharacter } = CharacterSlice.actions;
