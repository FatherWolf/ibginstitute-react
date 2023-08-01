import * as React from 'react';
import { Box, Typography, IconButton, ThemeProvider, createTheme } from '@mui/material';
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material';

const footerStyles = {
  backgroundColor: '#023047',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '8vh', // Set a minimum height to occupy the entire viewport vertically
};

// Extend the CommonColors interface to add the whiteSmoke property
declare module '@mui/material/styles/createPalette' {
  interface CommonColors {
    whiteSmoke: string;
  }
}

const Footer: React.FC = () => {
  // Function for opening social media links
  const handleSocialMediaIconClick = (url: string) => {
    window.open(url, "_blank");
  };

  // Material-UI theme with the provided palette
  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          primary: {
            main: '#023047', // Dark blue color
          },
          common: {
            whiteSmoke: '#F5F5F5', // White smoke color
          },
        },
      }),
    [] // Use an empty dependency array to ensure the theme is created only once
  );

  return (
    <ThemeProvider theme={theme}>
      <footer>
        <Box sx={{ ...footerStyles, background: theme.palette.primary.main }}>
          {/* Box for social media icons */}
          <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
            <IconButton onClick={() => handleSocialMediaIconClick("https://facebook.com")} style={{ color: 'white' }}>
              <Facebook />
            </IconButton>
            <IconButton onClick={() => handleSocialMediaIconClick("https://twitter.com")} style={{ color: 'white' }}>
              <Twitter />
            </IconButton>
            <IconButton onClick={() => handleSocialMediaIconClick("https://instagram.com")} style={{ color: 'white' }}>
              <Instagram />
            </IconButton>
            <IconButton onClick={() => handleSocialMediaIconClick("https://linkedin.com")} style={{ color: 'white' }}>
              <LinkedIn />
            </IconButton>
          </Box>

          {/* Box for address and subscription elements */}
          <Box>
            <Typography variant="body1" sx={{
              textAlign: 'center', fontWeight: 'bold', marginTop: '2rem',
              marginBottom: '1rem', color: theme.palette.common.whiteSmoke,
            }}>
              Charlotte Office <br />
              333 W. Trade St. Charlotte, NC 20202 <br />
              IBG Consulting <br />
              All rights Reserved 2020-2023
            </Typography>
          </Box>
        </Box>
      </footer>
    </ThemeProvider>
  );
};

export default Footer;



