import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    //our color palette but i think it needs to be adjusted 
    primary: {
      main: '#22577A', // Dark blue color
    },
    secondary: {
      main: '#38A3A5', // teal color
    },
    error: {
      main: '#57CC99', // Light green color
    },
    warning: {
      main: '#80ED99', // Sea green color
    },
    info: {
      main: '#C7F9CC', // Pastel green color
    },
    success: {
      main: '#4caf50', // Green color
    },
  },
});

export default theme;
