import { Box } from '@mui/material';

export default function BannerImagen() {
  return (
    <Box
      sx={{
        width: '100%',
        height: { xs: 600, md: 600 },
        backgroundImage: 'url(/images/background.png)',
        backgroundSize: 'round / space',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
           justifyContent: 'center',
              display: 'flex',
              alignItems: 'center',
              margin: '0 auto',
        mb: 4,
        padding: 2,
        borderRadius: 2,
      }}
    />
  );
}
