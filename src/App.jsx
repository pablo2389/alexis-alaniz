import { Box, CssBaseline, ThemeProvider, Toolbar } from '@mui/material';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import Navbar from './components/Navbar.jsx';
import Header from './components/Header.jsx';
import SobreMi from './components/SobreMi.jsx';
import Beneficios from './components/Beneficios.jsx';
import Contacto from './components/Contacto.jsx';
import BannerImagen from './components/BannerImagen.jsx'; // import Banner

import theme from './components/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ backgroundColor: '#121212', minHeight: '100vh', color: '#fbc02d' }}>
        <Router>
          <Navbar />

          {/* Deja espacio igual al Navbar (fixed) */}
          <Toolbar />

          <Routes>
            <Route
              path="/"
              element={
                <>
                  {/* Banner en inicio */}
                  <BannerImagen />
                  <Header />
                </>
              }
            />
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
