import React, { useEffect, useState } from 'react';
import Snackbar, { SnackbarOrigin } from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import { isOpenFalse } from '../../store/features/snackbar-slice';
import { useAppDispatch, useAppSelector } from '../../store';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant='filled' {...props} />;
});

export const TrackerSnackbar: React.FC = () => {
  const dispatch = useAppDispatch();

  const isOpen = useAppSelector((state) => state.snackbar.snackbar.isOpen);

  const message = useAppSelector((state) => state.snackbar.snackbar.message);

  const handleClose = () => {
    dispatch(isOpenFalse({ isOpen: false }));
  };

  return (
    <Snackbar
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      open={isOpen}
      autoHideDuration={1000}
      onClose={handleClose}
    >
      <Alert onClose={handleClose} severity='success' sx={{ width: '100%' }}>
        {message}
      </Alert>
    </Snackbar>
  );
};
