import { configureStore } from '@reduxjs/toolkit';
import { CharacterSlice } from './features/characters-slice';
import { GraveyardSlice } from './features/graveyard-slice';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { CounterSlice } from './features/counter-slice';
import { ConditionSlice } from './features/conditions-slice';

export const store = configureStore({
  reducer: {
    character: CharacterSlice.reducer,
    graveyard: GraveyardSlice.reducer,
    counter: CounterSlice.reducer,
    condition: ConditionSlice.reducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
