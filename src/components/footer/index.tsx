import * as React from 'react';
import { Link } from '@mui/material';

export const Footer: React.FC = () => {
  return (
    <Link
      sx={{ color: '#808080', textDecoration: 'none', fontSize: 12, ml: 1 }}
      href='https://www.flaticon.com/free-icons/goblin'
      title='goblin icons'
    >
      Goblin icons created by Freepik - Flaticon
    </Link>
  );
};
