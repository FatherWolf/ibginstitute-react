import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Button, useMediaQuery, ThemeProvider, Typography } from '@mui/material';
import { Menu, Close } from '@mui/icons-material';
import institute from '../../assets/institute-icon.png';
import theme from '../../theme';
import MobileMenu from './MobileMenu';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const isMobileScreen = useMediaQuery('(max-width:733px)');

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  React.useEffect(() => {
    if (!isMobileScreen) {
      setIsMobileMenuOpen(false);
    }
  }, [isMobileScreen]);

  // Header styles
  const containerStyle: React.CSSProperties = {
    background: theme.palette.secondary.main, // Use the primary color from the theme
    display: 'flex',
    flexDirection: 'column',
    padding: '1.5rem',
  };

  const innerBoxStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  };

  const logoBoxStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
  };


  return (
    <ThemeProvider theme={theme}>
      <Box sx={containerStyle}>
        <Box sx={innerBoxStyle}>
          <Box sx={logoBoxStyle}>
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
              <img src={institute} style={{ width: '2em' }} alt="IBG Institute" />
            </Link>
            <Box sx={{ ml: 1, color: theme.palette.primary.main }}>
              <Typography variant="h6" component="div">
                IBG Institute
              </Typography>
            </Box>

          </Box>
          {isMobileScreen ? (
            <Menu onClick={handleMobileMenuToggle} sx={{ cursor: 'pointer', alignSelf: 'center' }} />
          ) : (
            <Box // The web view menu is outside the Button component to keep it visible
              sx={{
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <Button component={Link} to="/" variant="contained" sx={{ marginRight: '1.618rem' }}>
                Home
              </Button>
              <Button component={Link} to="/about" variant="contained" sx={{ marginRight: '1.618rem' }}>
                About
              </Button>
              <Button component={Link} to="/faqs" variant="contained" sx={{ marginRight: '1.618rem' }}>
                FAQs
              </Button>
              <Button component={Link} to="/blog" variant="contained" sx={{ marginRight: '1.618rem' }}>
                Blog
              </Button>
              <Button component={Link} to="/contact" variant="contained" sx={{ marginRight: '1.618rem' }}>
                Contact
              </Button>
            </Box>
          )}
        </Box>
        {isMobileMenuOpen && (
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-end',
              marginTop: '1.618rem',
              marginBottom: '1.618rem',
            }}
          >
            {isMobileScreen && (

              <MobileMenu mobileMessage="Mobile Menu Will Go Here" /> // I want this to drop down outside of tyhe box: 
              /**
               * Home
               * About
               * FAQS
               * Contact
               */

            )}
            {!isMobileScreen && (
              <Close onClick={handleMobileMenuToggle} sx={{ cursor: 'pointer', marginBottom: '1.618rem' }} />
            )}
          </Box>
        )}
      </Box>
    </ThemeProvider>
  );
};

export default Header;

