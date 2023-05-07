import { createSlice, PayloadAction } from '@reduxjs/toolkit';
export interface ICharacterProps {
  name: string;
  initiative: number;
  hp?: number;
  id: number;
  isActive: boolean;
  activeConditions: Array<{ name: string; id: number }>;
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
        activeConditions: Array<{ name: string; id: number }>;
      }>
    ) => {
      state.characters.push({
        name: action.payload.name,
        initiative: action.payload.initiative,
        hp: action.payload.hp,
        id: action.payload.id,
        isActive: action.payload.isActive,
        activeConditions: action.payload.activeConditions,
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
    addCondition: (
      state,
      action: PayloadAction<{
        conditionName: string;
        conditionId: number;
        id: number;
      }>
    ) => {
      const foundChar = state.characters.find(
        ({ id }) => id === action.payload.id
      );

      foundChar?.activeConditions.push({
        name: action.payload.conditionName,
        id: action.payload.conditionId,
      });
    },
    removeCondition: (
      state,
      action: PayloadAction<{ id: number; condId: number }>
    ) => {
      const char = state.characters.find(({ id }) => id === action.payload.id);
      const remainingConditions = char?.activeConditions.filter(
        (cond) => cond.id !== action.payload.condId
      );
      if (char !== undefined) {
        char.activeConditions = remainingConditions as Array<{
          name: string;
          id: number;
        }>;
      }
    },
  },
});

export default CharacterSlice.reducer;

export const {
  addCharacter,
  removeCharacter,
  removeAllCharacters,
  addCondition,
  removeCondition,
} = CharacterSlice.actions;
