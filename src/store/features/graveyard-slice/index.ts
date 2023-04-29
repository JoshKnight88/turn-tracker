import { createSlice, PayloadAction } from '@reduxjs/toolkit';
export interface ICharacterProps {
  name: string;
  initiative: number;
  hp?: number;
}
