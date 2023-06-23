import React from 'react';
import { Box, Typography, Button, TextField, IconButton } from '@mui/material';
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material';
import exp from 'constants';

const footerStyles = {
  backgroundColor: 'grey',
  color: 'white',
  textAlign: 'center',
  padding: '2rem',
  display: 'flex',
  justifyContent: 'space-between',
};

const Footer: React.FC = () => {
  const handleSocialMediaIconClick = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <Box sx={footerStyles}>
      <Box>
        <Typography variant="body1">
          Charlotte Office <br />
          333 W. Trade St. Charlotte, NC 20202 <br />
          IBG Consulting <br />
          All rights Reserved 2020-2023
        </Typography>
        <Box sx={{ marginTop: '1rem' }}>
          <TextField label="Subscribe" variant="outlined" size="small" sx={{ marginRight: '1rem' }} />
          <Button variant="contained" color="primary">
            Subscribe
          </Button>
        </Box>
      </Box>
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
  );
};

export default Footer;