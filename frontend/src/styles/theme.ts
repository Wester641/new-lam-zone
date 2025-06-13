// src/styles/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 375,
      md: 768,
      lg: 1440,
      xl: 1440,
    },
  },
  // Добавь сюда другие настройки темы, если нужно, например:
  palette: {
    primary: {
      main: '#1976D2', // Цвет из Figma
    },
    secondary: {
      main: '#FF4081',
    },
    background: {
      default: '#F5F5F5',
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 700,
    },
    body1: {
      fontSize: '1rem',
    },
  },
});

export default theme;
