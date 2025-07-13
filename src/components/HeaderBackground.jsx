import React from 'react';
import { Box } from '@mui/material';

export default function HeaderBackground() {
  return (
    <Box
      sx={{
        height: { xs: '50vh', md: '70vh' },
        width: '100%',
        backgroundImage: 'url(/images/background.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center top',
        backgroundRepeat: 'no-repeat',
        backgroundColor: '#121212',
        '@media (max-width:600px)': {
          backgroundSize: 'contain',
          backgroundPosition: 'top center',
        },
      }}
    />
  );
}
