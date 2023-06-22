import * as React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom'; // Assuming you are using React Router for page navigation.

const Header: React.FC = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '2.5rem' // Padding of about 2.5
      }}
    >
      <Typography variant="body1">
        Test Header
      </Typography>
      <Box>
        <Button component={Link} to="/faqs" variant="contained" color="primary" sx={{ mx: 1 }}>
          FAQs
        </Button>
        <Button component={Link} to="/about" variant="contained" color="primary" sx={{ mx: 1 }}>
          About Us
        </Button>
        <Button component={Link} to="/blog" variant="contained" color="primary" sx={{ mx: 1 }}>
          Blog Link
        </Button>
        <Button component={Link} to="/contact" variant="contained" color="primary" sx={{ mx: 1 }}>
          Contact
        </Button>
      </Box>
    </Box>
  );
};

export default Header;
