import * as React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material';

const footerStyles = {
  backgroundColor: '#C7F9CC',
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
        {/* Box for social media icons */}
        <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
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

        {/* Box for address and subscription elements */}
        <Box>
          <Typography variant="body1" sx={{
            textAlign: 'center', fontWeight: 'bold', marginTop: '2rem',
            marginBottom: '1rem',
          }}>
            Charlotte Office <br />
            333 W. Trade St. Charlotte, NC 20202 <br />
            IBG Consulting <br />
            All rights Reserved 2020-2023
          </Typography>
        </Box>
      </Box>
    </footer>
  );
};

export default Footer;


