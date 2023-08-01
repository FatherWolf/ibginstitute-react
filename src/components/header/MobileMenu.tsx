import React from 'react';
import { Box, Typography, Slide } from '@mui/material';
import { Link } from 'react-router-dom';

interface MobileProps {
  isOpen: boolean;
  onClick: () => void;
}

const MobileMenu: React.FC<MobileProps> = ({ isOpen, onClick }) => {
  const menuStyle: React.CSSProperties = {
    position: 'fixed',
    top: '4rem',
    right: 0,
    background: 'white',
    borderRadius: '8px',
    padding: '1rem',
    width: '40%',
    maxHeight: '80vh',
    overflowY: 'auto',
    boxShadow: '0px 0px 12px rgba(0, 0, 0, 0.25)',
    transform: 'translateX(100%)',
    transition: 'transform 0.3s ease-in-out',
  };

  const linkStyle: React.CSSProperties = {
    marginBottom: '1.618rem',
    textDecoration: 'none',
  };

  const listStyle: React.CSSProperties = {
    listStyle: 'none',
  };

  return (
    <Slide direction="left" in={isOpen} mountOnEnter unmountOnExit>
      <Box sx={menuStyle}>
        <ul style={listStyle}>
          <li>
            <Typography onClick={onClick} variant="body1" component={Link} to="/" style={linkStyle}>
              Home
            </Typography>
          </li>
          <li>
            <Typography onClick={onClick} variant="body1" component={Link} to="/about" style={linkStyle}>
              About
            </Typography>
          </li>
          <li>
            <Typography onClick={onClick} variant="body1" component={Link} to="/faqs" style={linkStyle}>
              FAQs
            </Typography>
          </li>
          <li>
            <Typography onClick={onClick} variant="body1" component={Link} to="/blog" style={linkStyle}>
              Blog
            </Typography>
          </li>
          <li>
            <Typography onClick={onClick} variant="body1" component={Link} to="/contact" style={linkStyle}>
              Contact
            </Typography>
          </li>
        </ul>
      </Box>
    </Slide>
  );
};

export default MobileMenu;
