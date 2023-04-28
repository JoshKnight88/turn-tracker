import { configureStore } from '@reduxjs/toolkit';
import { PlayerCharSlice } from './features/playerCharSlice';
import { MonsterSlice } from './features/monstersSlice';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

export const store = configureStore({
  reducer: {
    playerChar: PlayerCharSlice.reducer,
    monsters: MonsterSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
