import React from 'react';
import { Container, Typography, Box, List, ListItem, Grid } from '@mui/material';
import SportsMmaIcon from '@mui/icons-material/SportsMma';
import StarIcon from '@mui/icons-material/Star';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function SobreMi() {
  return (
    <Container sx={{ py: 6, backgroundColor: '#121212', borderRadius: 2, color: '#e0e0e0' }}>
      <Typography variant="h2" sx={{ fontWeight: 'bold', mb: 3, color: '#fbc02d', textAlign: 'center' }}>
        🥊 Alexis “La Máquina” Alaniz
      </Typography>

      {/* Imágenes en Grid responsive */}
      <Grid container spacing={2} justifyContent="center" mb={3}>
        <Grid item xs={6} md={4}>
          <Box
            component="img"
            src="/images/nombre.jpg"
            alt="Alexis Alaniz"
            sx={{
              width: '50%',
              borderRadius: 2,
              boxShadow: '0 0 12px #fbc02d',
              justifyContent: 'right',
              display: 'flex',
              alignItems: 'center',
              margin: '0 auto',
              padding: 3,
            }}
          />
        </Grid>
        <Grid item xs={6} md={3}>
          <Box
            component="img"
            src="/images/guante.jpg"
            alt="Guante de boxeo"
            sx={{
              width: '50%',
              borderRadius: 2,
              boxShadow: '0 0 12px #fbc02d',
                 justifyContent: 'left',
              display: 'flex',
              alignItems: 'center',
              margin: '0 auto',
              padding: 3,
            }}
          />
        </Grid>
      </Grid>

      <Typography variant="subtitle1" sx={{ mb: 2, fontWeight: 'medium', color: '#c0c0c0', textAlign: 'center' }}>
        Boxeador profesional | Godoy Cruz, Mendoza
      </Typography>

      <Typography variant="body1" sx={{ mb: 3, fontSize: '1.1rem', textAlign: 'center' }}>
        Alexis Alaniz, conocido como “La Máquina”, es un boxeador profesional mendocino reconocido por su estilo agresivo y su gran corazón arriba del ring. Ha competido en las divisiones welter y superwelter, destacándose por su fuerza, resistencia y entrega en cada combate.
      </Typography>

      <Box sx={{ mb: 3 }}>
        <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#fbc02d', mb: 1, display: 'flex', alignItems: 'center' }}>
          <SportsMmaIcon sx={{ mr: 1 }} /> Récord profesional:
        </Typography>
        <Typography sx={{ ml: 3, fontSize: '1.1rem', color: '#ddd' }}>
          10 victorias (5 por KO) – 3 empates – 5 derrotas
        </Typography>
      </Box>

      <Box sx={{ mb: 3 }}>
        <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#fbc02d', mb: 1, display: 'flex', alignItems: 'center' }}>
          <StarIcon sx={{ mr: 1 }} /> Logros y momentos destacados:
        </Typography>
        <List sx={{ ml: 3, color: '#ddd' }}>
          <ListItem disablePadding>Disputó el título Latino welter de la FIB en Chile en 2024</ListItem>
          <ListItem disablePadding>Protagonizó un empate vibrante ante Nahuel Galesi en el Estadio Pascual Pérez</ListItem>
          <ListItem disablePadding>Conocido por su estilo ofensivo e incansable energía que le valieron su apodo “La Máquina”</ListItem>
        </List>
      </Box>

      <Box sx={{ mb: 4 }}>
        <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#fbc02d', mb: 1, display: 'flex', alignItems: 'center' }}>
          <ArrowForwardIcon sx={{ mr: 1 }} /> Próximos objetivos:
        </Typography>
        <Typography sx={{ ml: 3, fontSize: '1.1rem', color: '#ddd' }}>
          Seguir creciendo en su carrera profesional, sumando experiencia y peleas internacionales para llegar a lo más alto del boxeo argentino y sudamericano.
        </Typography>
      </Box>

      <Typography
        variant="body1"
        sx={{ fontStyle: 'italic', color: '#fbc02d', fontWeight: 'bold', textAlign: 'center', fontSize: '1.2rem' }}
      >
        “La Máquina no se detiene, siempre voy para adelante y dejo todo en el ring.”
      </Typography>
    </Container>
  );
}
