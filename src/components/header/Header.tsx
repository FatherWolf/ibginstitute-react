import * as React from 'react';
import { useState } from 'react';
import { Box, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { Home, Menu } from '@mui/icons-material';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLogoClick = () => {
    console.log('ibg-logo');
    // Add additional logic or navigation code here
  };

  const handleButtonCLick = (buttonName: string) => {
    console.log(`${buttonName} button clicked!`);
    // Add additional logic or navigation code here
  };

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
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
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }} onClick={handleLogoClick}>
          <Home sx={{ fontSize: 32 }} />
        </Link>
        <Typography variant="h6" component="div" sx={{ ml: 1 }}>
          Test Header
        </Typography>
      </Box>
      <Box>
        {/* Toggle button for mobile menu */}
        <div className="mobile-menu-toggle" onClick={handleMobileMenuToggle}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Mobile menu */}
        <div className={`mobile-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          <Button
            component={Link}
            to="/faqs"
            variant="contained"
            color="primary"
            sx={{ mb: 1 }}
            onClick={() => {
              handleButtonCLick('FAQs');
              handleMobileMenuToggle();
            }}
          >
            FAQs
          </Button>
          <Button
            component={Link}
            to="/about"
            variant="contained"
            color="primary"
            sx={{ mb: 1 }}
            onClick={() => {
              handleButtonCLick('About Us');
              handleMobileMenuToggle();
            }}
          >
            About Us
          </Button>
          <Button
            component={Link}
            to="/blog"
            variant="contained"
            color="primary"
            sx={{ mb: 1 }}
            onClick={() => {
              handleButtonCLick('Blog Link');
              handleMobileMenuToggle();
            }}
          >
            Blog Link
          </Button>
          <Button
            component={Link}
            to="/contact"
            variant="contained"
            color="primary"
            sx={{ mb: 1 }}
            onClick={() => {
              handleButtonCLick('Contact');
              handleMobileMenuToggle();
            }}
          >
            Contact
          </Button>
        </div>
      </Box>
    </Box>
  );
};

export default Header;


