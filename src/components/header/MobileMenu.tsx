import React from 'react';
import { Box, Button } from '@mui/material';

interface MobileProps {
  mobileMessage: string;
}

const MobileMenu: React.FC<MobileProps> = ({ mobileMessage }) => {
  // Your existing code
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        marginTop: '1.618rem',
        marginBottom: '1.618rem',
      }}
    >
      {/* Use the mobileMessage prop here */}
      <div>{mobileMessage}</div>
      <Button component="a" href="/" variant="contained" color="primary" sx={{ marginBottom: '1.618rem' }}>
        Home
      </Button>
      <Button component="a" href="/about" variant="contained" color="primary" sx={{ marginBottom: '1.618rem' }}>
        About
      </Button>
      <Button component="a" href="/faqs" variant="contained" color="primary" sx={{ marginBottom: '1.618rem' }}>
        FAQs
      </Button>
      <Button component="a" href="/blog" variant="contained" color="primary" sx={{ marginBottom: '1.618rem' }}>
        Blog
      </Button>
      <Button component="a" href="/contact" variant="contained" color="primary" sx={{ marginBottom: '1.618rem' }}>
        Contact
      </Button>
    </Box>
  );
};

export default MobileMenu;

