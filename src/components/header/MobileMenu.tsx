import React from 'react';
import { Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

interface MobileProps {
  onClick: () => void;
}

const MobileMenu: React.FC<MobileProps> = ({ onClick }) => {
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
  };

  const linkStyle: React.CSSProperties = {
    marginBottom: '1.618rem',
    textDecoration: 'none'
  };

  const listStyle: React.CSSProperties = {
    listStyle: 'none' // Removes bullets from the list
  };

  return (
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
  );
};

export default MobileMenu;
