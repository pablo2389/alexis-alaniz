import React, { useState, useEffect } from 'react';
import { Box, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import ContactMailIcon from '@mui/icons-material/ContactMail';

export default function Header() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 4000); // desaparece a los 4 segundos
    return () => clearTimeout(timer);
  }, []);

  return (
    <Box
      sx={{
        position: 'relative',
        height: { xs: '60vh', md: '80vh' },
        width: '100%',
        backgroundImage: 'url(/images/background.png)',
        backgroundSize: 'auto 100%',
        backgroundPosition: 'center 60%',
        backgroundRepeat: 'no-repeat',
        backgroundColor: '#121212',
        '@media (max-width:600px)': {
          backgroundSize: 'contain',
          backgroundPosition: 'top center',
             justifyContent: 'center',
              display: 'flex',
              alignItems: 'center',
              margin: '0 auto',
        },
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          bgcolor: 'rgba(0, 0, 0, 0.3)',
          zIndex: 1,
        }}
      />

      <Box
        sx={{
          position: 'relative',
          zIndex: 2,
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          color: '#fbc02d',
          px: 2,
          transition: 'opacity 1s ease',
          opacity: visible ? 1 : 0, // aquí controlamos la opacidad para desaparecer
        }}
      >
        <Typography variant="h1" component="h1" sx={{ fontWeight: '900', mb: 1, textShadow: '0 0 12px #fbc02d',margin: '0 auto' }}>
          Aprende boxeo con Alexis "La Máquina" Alaniz
        </Typography>

        <Typography variant="subtitle1" sx={{ mb: 1, color: '#fbc02d', opacity: 0.9 }}>
          Federación Mendocina de Box - Ciudad de Mendoza
        </Typography>

        <Typography variant="body1" sx={{ mb: 4, color: '#fbc02d', opacity: 0.85 }}>
          Horarios: Lunes a Viernes por la mañana
        </Typography>

        <Typography variant="h6" sx={{ mb: 4, textShadow: '0 0 8px #fbc02d', fontWeight: '600' }}>
          Clases de boxeo en la Federación Mendocina de Box <br /> Lunes a Viernes - Mañanas
        </Typography>

        <Button
          component={Link}
          to="/contacto"
          variant="contained"
          color="error"
          size="large"
          startIcon={<ContactMailIcon />}
          sx={{
            fontWeight: 'bold',
            px: 4,
            py: 1.5,
            boxShadow: '0 0 12px #f44336',
            transition: 'all 0.3s ease',
            '&:hover': {
              boxShadow: '0 0 25px #f44336, 0 0 40px #f44336',
              transform: 'scale(1.05)',
            },
          }}
        >
          Contactame
        </Button>
      </Box>
    </Box>
  );
}
