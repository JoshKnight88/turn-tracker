import { Snackbar } from '@mui/material';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ISnackbarProps {
  isOpen: boolean;
  message: string;
}

interface SnackbarState {
  snackbar: ISnackbarProps;
}

const initialState: SnackbarState = {
  snackbar: {
    isOpen: false,
    message: '',
  },
};

export const SnackbarSlice = createSlice({
  name: 'snackbar',
  initialState,
  reducers: {
    isOpenTrue: (
      state,
      action: PayloadAction<{
        isOpen: boolean;
        message: string;
      }>
    ) => {
      if (action.payload.isOpen === true) {
        state.snackbar.isOpen = true;
      }
      state.snackbar.message = action.payload.message;
    },
    isOpenFalse: (
      state,
      action: PayloadAction<{
        isOpen: boolean;
      }>
    ) => {
      if (action.payload.isOpen === false) {
        state.snackbar.isOpen = false;
      }
    },
  },
});

export default SnackbarSlice.reducer;

export const { isOpenTrue, isOpenFalse } = SnackbarSlice.actions;
