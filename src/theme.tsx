import { createTheme } from '@mui/material/styles';
export const blueColor = '#33577A';


const theme = createTheme({
  palette: {
    //our color palette but i think it needs to be adjusted 
    primary: {
      main: '#023047', // Dark blue color
    },
    secondary: {
      main: '#219EBC', // teal color
    },
    error: {
      main: '#FB8500', // Orange color for text highlighting
    },
    warning: {
      main: '#FFB703', // Yellow color for accent
    },
    info: {
      main: '#8ECAE6', // Light blue color for accent
    },
    success: {
      main: '#4caf50', // Green color extra color
    },
    common: {
      white: '#F5F5F5'
      
    },
   // What should we add here? 
 },
});

export default theme;
