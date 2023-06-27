import * as React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { Home } from '@mui/icons-material';

const Header: React.FC = () => {
  const handleLogoClick = () => {
    console.log('Logo clicked!');
    // Add additional logic or navigation code here
  };

  const handleButtonCLick = (buttonName: string) => {
    console.log(`${buttonName} button clicked!`);
    // Add additional logic or navigation code here
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1.5rem'
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center' }}>

        <Typography variant="h6" component="div" sx={{ ml: 1 }}>
          
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }} onClick={handleLogoClick}>
            <Home sx={{ fontSize: 32 }} />
          </Link>
        </Typography>
      </Box>
      <Box>
        <Button
          component={Link}
          to="/faqs"
          variant="contained"
          color="primary"
          sx={{ mx: 1 }}
          onClick={() => handleButtonCLick('FAQs')}
        >
          FAQs
        </Button>
        <Button
          component={Link}
          to="/about"
          variant="contained"
          color="primary"
          sx={{ mx: 1 }}
          onClick={() => handleButtonCLick('About Us')}
        >
          About Us
        </Button>
        <Button
          component={Link}
          to="/blog"
          variant="contained"
          color="primary"
          sx={{ mx: 1 }}
          onClick={() => handleButtonCLick('Blog Link')}
        >
          Blog Link
        </Button>
        <Button
          component={Link}
          to="/contact"
          variant="contained"
          color="primary"
          sx={{ mx: 1 }}
          onClick={() => handleButtonCLick('Contact')}
        >
          Contact
        </Button>
      </Box>
    </Box>
  );
};

export default Header;
