import React, { useState } from 'react';
import {
  Container,
  Typography,
  TextField,
  Button,
  Box,
  Paper,
} from '@mui/material';

const whatsappNumber = '5492612433521';

export default function Contacto() {
  const [nombre, setNombre] = useState('');
  const [mensaje, setMensaje] = useState('Estoy interesado en las clases de boxeo');

  const handleEnviarWhatsApp = () => {
    const texto = `Hola Alexis! Soy ${nombre || 'un interesado'}, ${mensaje}`;
    const encodedTexto = encodeURIComponent(texto);
    const url = `https://wa.me/${whatsappNumber}?text=${encodedTexto}`;
    window.open(url, '_blank');
  };

  return (
    <Container maxWidth="sm" sx={{ py: 8 }}>
      <Paper
        elevation={8}
        sx={{
          p: 4,
          backgroundColor: '#1e1e1e',
          borderRadius: 3,
          color: '#e0e0e0',
        }}
      >
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', color: '#fbc02d' }}>
          Contacto
        </Typography>
        <Typography variant="body1" sx={{ mb: 3 }}>
          Completa tu nombre y mensaje para enviar una consulta personalizada a través de WhatsApp.
        </Typography>

        <Box component="form" noValidate autoComplete="off" sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
          <TextField
            label="Tu nombre"
            variant="filled"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            InputProps={{ style: { backgroundColor: '#121212', color: '#fff' } }}
            InputLabelProps={{ style: { color: '#fbc02d' } }}
            required
          />
          <TextField
            label="Mensaje"
            variant="filled"
            multiline
            rows={4}
            value={mensaje}
            onChange={(e) => setMensaje(e.target.value)}
            InputProps={{ style: { backgroundColor: '#121212', color: '#fff' } }}
            InputLabelProps={{ style: { color: '#fbc02d' } }}
            required
          />

          <Button
            variant="contained"
            color="success"
            disabled={!nombre.trim()}
            onClick={handleEnviarWhatsApp}
            sx={{ fontWeight: 'bold' }}
          >
            Enviar mensaje por WhatsApp
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}
