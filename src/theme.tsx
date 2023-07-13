import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#f44336', // Red color
    },
    secondary: {
      main: '#3f51b5', // Blue color
    },
    error: {
      main: '#f44336', // Red color
    },
    warning: {
      main: '#ff9800', // Orange color
    },
    info: {
      main: '#2196f3', // Light blue color
    },
    success: {
      main: '#4caf50', // Green color
    },
  },
});

export default theme;
