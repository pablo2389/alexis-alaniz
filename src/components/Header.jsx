import { Box } from '@mui/material';

export default function HeaderBackground() {
  return (
    <Box
      sx={{
        height: { xs: '50vh', md: '70vh' },
        width: '100%',
        backgroundImage: 'url(/images/background.png)',
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundColor: '#121212',
      }}
    />
  );
}
