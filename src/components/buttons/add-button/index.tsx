import { Button } from '@mui/material';
import React from 'react';

interface IAddButtonProps {
  onClick: () => void;
}
export const AddButton: React.FC<IAddButtonProps> = ({onClick}) => {
  return (
    <Button variant='contained' onClick={onClick} sx={{}}>
      Add
    </Button>
  );
};
