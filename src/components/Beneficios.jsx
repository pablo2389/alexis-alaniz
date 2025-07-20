import React from 'react';
import { Container, Typography, Grid, Paper, Box } from '@mui/material';
import SportsKabaddiIcon from '@mui/icons-material/SportsKabaddi';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import MoodIcon from '@mui/icons-material/Mood';
import GroupIcon from '@mui/icons-material/Group';

const beneficios = [
  {
    icon: <SportsKabaddiIcon sx={{ fontSize: 60, color: '#fbc02d' }} />,
    title: 'Entrenamiento Profesional',
    description: 'Sesiones diseñadas para mejorar técnica, resistencia y fuerza con entrenadores certificados.',
  },
  {
    icon: <FitnessCenterIcon sx={{ fontSize: 60, color: '#fbc02d' }} />,
    title: 'Mejora Tu Condición Física',
    description: 'Entrena todo el cuerpo y aumenta tu resistencia cardiovascular y muscular.',
  },
  {
    icon: <MoodIcon sx={{ fontSize: 60, color: '#fbc02d' }} />,
    title: 'Salud Mental y Disciplina',
    description: 'El boxeo ayuda a liberar estrés, mejorar la concentración y fortalecer la mente.',
  },
  {
    icon: <GroupIcon sx={{ fontSize: 60, color: '#fbc02d' }} />,
    title: 'Ambiente Amigable y Motivador',
    description: 'Únete a una comunidad de deportistas apasionados que te apoyan a crecer.',
  },
];

export default function Beneficios() {
  return (
    <Box
      sx={{
        background: 'linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%)',
        py: 8,
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          sx={{ fontWeight: 'bold', color: '#fbc02d', mb: 5, textShadow: '0 0 10px #fbc02d' }}
        >
          Beneficios de entrenar con Alexis "La Máquina"
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {beneficios.map(({ icon, title, description }, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Paper
                elevation={10}
                sx={{
                  p: 4,
                  textAlign: 'center',
                  backgroundColor: '#121212',
                  borderRadius: 3,
                  color: '#e0e0e0',
                  transition: 'transform 0.4s ease, box-shadow 0.4s ease',
                  cursor: 'default',
                  '&:hover': {
                    transform: 'scale(1.1)',
                    boxShadow: '0 0 20px #fbc02d',
                  },
                  opacity: 0,
                  animation: `fadeInUp 0.6s ease forwards`,
                  animationDelay: `${index * 0.15}s`,
                }}
              >
                <Box mb={2}>{icon}</Box>
                <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#fbc02d', mb: 1 }}>
                  {title}
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.5 }}>
                  {description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>

      <style>
        {`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
    </Box>
  );
}
