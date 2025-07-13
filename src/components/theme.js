// theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#b71c1c',
    },
    secondary: {
      main: '#fbc02d',
    },
    background: {
      default: '#121212', // gris muy oscuro casi negro
      paper: '#1e1e1e',
    },
    text: {
      primary: '#e0e0e0',
      secondary: '#fbc02d',
    },
  },
  typography: {
    fontFamily: "'Roboto', sans-serif",
    h4: {
      fontWeight: 700,
    },
  },
});

export default theme;
