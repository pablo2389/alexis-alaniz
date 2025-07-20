import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Box
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (state) => () => {
    setOpen(state);
  };

  const navLinks = [
    { text: 'Inicio', to: '/', icon: <HomeIcon /> },
    { text: 'Sobre Mí', to: '/sobremi', icon: <InfoIcon /> },
    { text: 'Beneficios', to: '/beneficios', icon: <FitnessCenterIcon /> },
    { text: 'Contacto', to: '/contacto', icon: <ContactMailIcon /> },
  ];

  return (
    <>
      <AppBar position="fixed" sx={{ backgroundColor: '#1c1c1c' }}>
        <Toolbar>
          {/* Logo + Título */}
          <Box
            component={Link}
            to="/"
            sx={{
              flexGrow: 1,
              display: 'flex',
              alignItems: 'center',
              textDecoration: 'none',
            }}
          >
            <img
              src="/images/logo.jpg"
              alt="Logo"
              style={{
                height: '60px',
                marginRight: 10,
                borderRadius: '50%',
              }}
            />
            <Typography
              variant="h6"
              sx={{
                color: '#fbc02d',
                fontWeight: 'bold',
                textAlign: 'center',
                flexGrow: 1,            // Que el texto ocupe todo el espacio restante
                fontSize: { xs: '1rem', md: '1.5rem' },
              }}
            >
              ALEXIS "La Máquina" ALANIZ
            </Typography>
          </Box>

          {/* Botón menú (mobile) */}
          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Drawer */}
      <Drawer
        anchor="right"
        open={open}
        onClose={toggleDrawer(false)}
        transitionDuration={{ enter: 900, exit: 300 }}
      >
        <Box
          sx={{
            width: 250,
            backgroundColor: '#121212',
            height: '100%',
          }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            {navLinks.map((link) => (
              <ListItem
                button
                component={Link}
                to={link.to}
                key={link.text}
                sx={{
                  '& .MuiListItemText-primary': {
                    color: '#fbc02d',
                    fontWeight: 'bold',
                  },
                  '&:hover': {
                    backgroundColor: '#333',
                  },
                }}
              >
                <ListItemIcon sx={{ color: '#fbc02d' }}>
                  {link.icon}
                </ListItemIcon>
                <ListItemText primary={link.text} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
}
