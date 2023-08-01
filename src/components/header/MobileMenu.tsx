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
    width: '40%', // or your preferred width
    maxHeight: '80vh', // to prevent the menu from filling the whole screen
    overflowY: 'auto', // to enable scrolling if the content exceeds the max height
    boxShadow: '0px 0px 12px rgba(0, 0, 0, 0.25)', // optional shadow for "lifted" effect
  };

  return (
    <Box sx={menuStyle}>
      <ul>
        <li>
          <Typography onClick={onClick} variant="body1" component={Link} to="/" sx={{ marginBottom: '1.618rem', textDecoration: 'none' }}>
            Home
          </Typography>
        </li>
        <li>
          <Typography onClick={onClick} variant="body1" component={Link} to="/about" sx={{ marginBottom: '1.618rem', textDecoration: 'none' }}>
            About
          </Typography>
        </li>
        <li>
          <Typography onClick={onClick} variant="body1" component={Link} to="/faqs" sx={{ marginBottom: '1.618rem', textDecoration: 'none' }}>
            FAQs
          </Typography>
        </li>
        <li>
          <Typography onClick={onClick} variant="body1" component={Link} to="/blog" sx={{ marginBottom: '1.618rem', textDecoration: 'none' }}>
            Blog
          </Typography>
        </li>
        <li>
          <Typography onClick={onClick} variant="body1" component={Link} to="/contact" sx={{ marginBottom: '1.618rem', textDecoration: 'none' }}>
            Contact
          </Typography>
        </li>
      </ul>
    </Box>
  );
};


export default MobileMenu;
