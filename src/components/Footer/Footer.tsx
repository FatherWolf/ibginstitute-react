import * as React from 'react';
import { Box, Typography, Button, TextField } from '@mui/material';

const Footer: React.FC = () => {
  return (
    <footer>
      <Box
        sx={{
          backgroundColor: 'grey',
          color: 'white',
          textAlign: 'center',
          padding: '2rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start'
        }}
      >
        <Typography variant="body1">
          Charlotte Office <br />
          333 W. Trade St. Charlotte, NC 20202 <br />
          IBG Consulting <br />
          All rights Reserved 2020-2023
        </Typography>
        <Box sx={{ marginLeft: '1rem', marginTop: '1rem' }}>
          <TextField label="Subscribe" variant="outlined" size="small" sx={{ marginRight: '1rem' }} />
          <Button variant="contained" color="primary">
            Subscribe
          </Button>
        </Box>
      </Box>
    </footer>
  );
};

export default Footer;
