import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  CssBaseline,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => () => setDrawerOpen(open);

  const navLinks = [
    { title: 'Sobre mí', path: '/sobremi' },
    { title: 'Beneficios', path: '/beneficios' },
    { title: 'Contacto', path: '/contacto' },
  ];

  return (
    <>
      <CssBaseline />
      <AppBar position="static" sx={{ backgroundColor: '#121212' }}>
        <Toolbar>
          <Typography
            variant="h6"
            sx={{
              flexGrow: 1,
              fontWeight: 'bold',
              color: '#c0c0c0',
              textShadow: '0 0 8px #fbc02d, 0 0 12px #fbc02d', // brillo dorado/neón
            }}
          >
            Alexis "La Máquina" Alaniz
          </Typography>

          {/* Menú para pantallas grandes */}
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            {navLinks.map(({ title, path }) => (
              <Button
                key={title}
                component={Link}
                to={path}
                sx={{
                  fontWeight: 'bold',
                  mx: 1,
                  color: '#e0e0e0',
                  '&:hover': {
                    color: '#fbc02d',
                    backgroundColor: 'transparent',
                  },
                }}
              >
                {title}
              </Button>
            ))}
          </Box>

          {/* Icono menú hamburguesa para móviles */}
          <IconButton
            color="secondary"
            edge="start"
            onClick={toggleDrawer(true)}
            sx={{ display: { md: 'none' }, color: '#c0c0c0' }} // ícono plateado
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Drawer para menú móvil */}
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box
          sx={{ width: 250, backgroundColor: '#121212', height: '100%' }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            {navLinks.map(({ title, path }) => (
              <ListItem button component={Link} to={path} key={title} sx={{ color: '#e0e0e0' }}>
                <ListItemText
                  primary={title}
                  primaryTypographyProps={{
                    sx: {
                      fontWeight: 'bold',
                      color: '#e0e0e0',
                    },
                  }}
                />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
}

export default Navbar;
