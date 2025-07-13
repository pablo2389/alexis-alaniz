import React from 'react';
import { Container, Grid, Typography, Box, Paper } from '@mui/material';
import SportsKabaddiIcon from '@mui/icons-material/SportsKabaddi';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import MoodIcon from '@mui/icons-material/Mood';
import GroupIcon from '@mui/icons-material/Group';

const beneficios = [
  {
    icon: <SportsKabaddiIcon sx={{ fontSize: 50, color: '#b71c1c' }} />,
    title: 'Entrenamiento Profesional',
    description: 'Sesiones diseñadas para mejorar técnica, resistencia y fuerza con entrenadores certificados.',
  },
  {
    icon: <FitnessCenterIcon sx={{ fontSize: 50, color: '#b71c1c' }} />,
    title: 'Mejora Tu Condición Física',
    description: 'Entrena todo el cuerpo y aumenta tu resistencia cardiovascular y muscular.',
  },
  {
    icon: <MoodIcon sx={{ fontSize: 50, color: '#b71c1c' }} />,
    title: 'Salud Mental y Disciplina',
    description: 'El boxeo ayuda a liberar estrés, mejorar la concentración y fortalecer la mente.',
  },
  {
    icon: <GroupIcon sx={{ fontSize: 50, color: '#b71c1c' }} />,
    title: 'Ambiente Amigable y Motivador',
    description: 'Únete a una comunidad de deportistas apasionados que te apoyan a crecer.',
  },
];

export default function Beneficios() {
  return (
    <Container id="beneficios" sx={{ py: 8 }}>
      <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: 'bold', color: '#fbc02d' }}>
        Beneficios de entrenar con Alexis "La Máquina"
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {beneficios.map(({ icon, title, description }, index) => (
          <Grid item key={index} xs={12} sm={6} md={3}>
            <Paper
              elevation={6}
              sx={{
                p: 3,
                textAlign: 'center',
                backgroundColor: '#1e1e1e',
                borderRadius: 3,
                color: '#e0e0e0',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'center',
                height: '100%',
                minHeight: 300, // alto mínimo uniforme
                transition: 'transform 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.05)',
                  boxShadow: '0 0 15px #fbc02d',
                },
              }}
            >
              <Box mb={1}>{icon}</Box>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 'bold',
                  color: '#fbc02d',
                  mb: 1, // menos margen abajo
                }}
              >
                {title}
              </Typography>
              <Typography variant="body1" sx={{ lineHeight: 1.4 }}>
                {description}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
