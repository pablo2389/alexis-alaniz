import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, CssBaseline, Box } from '@mui/material';
import Navbar from './components/Navbar.jsx';
import Header from './components/Header.jsx';
import SobreMi from './components/SobreMi.jsx';
import Beneficios from './components/Beneficios.jsx';
import Contacto from './components/Contacto.jsx';
import HeaderBackground from './components/HeaderBackground.jsx';
import theme from './components/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ backgroundColor: '#121212', minHeight: '100vh' }}>
        <Router>
          <Navbar />

          {/* Header con imagen */}
          <HeaderBackground />

          {/* Resto de la app */}
          <Routes>
            <Route path="/" element={<Header />} />
            <Route path="/sobremi" element={<SobreMi />} />
            <Route path="/beneficios" element={<Beneficios />} />
            <Route path="/contacto" element={<Contacto />} />
          </Routes>
        </Router>
      </Box>
    </ThemeProvider>
  );
}

export default App;
