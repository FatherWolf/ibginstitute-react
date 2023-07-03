import * as React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material';

const footerStyles = {
  backgroundColor: '#38A3A5',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '8vh', // Set a minimum height to occupy the entire viewport vertically
};

const Footer: React.FC = () => {
  // Function for opening social media links
  const handleSocialMediaIconClick = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <footer>
      <Box sx={footerStyles}>
        {/* Box for address and subscription elements on the left margin */}
        <Box>

          <Typography variant="body1" sx={{ textAlign: 'center', fontWeight: 'bold' }}>
            Charlotte Office <br />
            333 W. Trade St. Charlotte, NC 20202 <br />
            IBG Consulting <br />
            All rights Reserved 2020-2023
          </Typography>


          <Box sx={{
            marginTop: '1rem',
            background: '#38A3A5',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '1.5rem',
            flexDirection: 'column',
            '@media (min-width: 600px)': {
              flexDirection: 'row',
            },

          }}>
            {/* <TextField label="Subscribe" variant="outlined" size="small" sx={{ marginRight: '1rem' }} /> */}
            {/* <Button variant="contained" color="primary">
              Subscribe
            </Button> */}
          </Box>
        </Box>
        {/* Created a Box for social media icons on the right margin */}
        <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end' }}>
          <IconButton onClick={() => handleSocialMediaIconClick("https://facebook.com")}>
            <Facebook />
          </IconButton>
          <IconButton onClick={() => handleSocialMediaIconClick("https://twitter.com")}>
            <Twitter />
          </IconButton>
          <IconButton onClick={() => handleSocialMediaIconClick("https://instagram.com")}>
            <Instagram />
          </IconButton>
          <IconButton onClick={() => handleSocialMediaIconClick("https://linkedin.com")}>
            <LinkedIn />
          </IconButton>
        </Box>
      </Box>
    </footer>
  );
};

export default Footer;

