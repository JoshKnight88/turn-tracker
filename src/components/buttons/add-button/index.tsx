import { Button } from '@mui/material';
import React from 'react';

interface IAddButtonProps {
  onClick: () => void;
  isActiveState: boolean;
}
export const AddButton: React.FC<IAddButtonProps> = ({onClick, isActiveState}) => {
  return (
    <Button variant='contained' type='submit' onClick={onClick} sx={{}} disabled={!isActiveState}>
      Add
    </Button>
  );
};
