import React from 'react';
import { Box, Typography, Slide, styled } from '@mui/material';
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
    borderRadius: '8px 0 0 8px',
    padding: '1rem 0 1rem 0',
    width: '35%',
    maxHeight: '80vh',
    overflowY: 'auto',
    boxShadow: '0px 0px 12px rgba(0, 0, 0, 0.25)',
    transform: 'translateX(100%)',
    transition: 'transform 0.3s ease-in-out',
  };

  const listStyle: React.CSSProperties = {
    listStyle: 'none',
  };

  const StyledLink = styled(Link)(({ theme }) => ({
    marginBottom: '1.618rem',
    textDecoration: 'none',
    color: 'inherit',
    '&:active': {
      color: theme.palette.secondary.main,
      fontSize: '1.2em',
    },
  }));

  return (
    <Slide direction="left" in={isOpen} mountOnEnter unmountOnExit>
      <Box sx={menuStyle}>
        <ul style={listStyle}>
          <li>
            <Typography onClick={onClick} variant="body1" component={StyledLink} to="/">
              Home
            </Typography>
          </li>
          <li>
            <Typography onClick={onClick} variant="body1" component={StyledLink} to="/about">
              About
            </Typography>
          </li>
          <li>
            <Typography onClick={onClick} variant="body1" component={StyledLink} to="/faqs">
              FAQs
            </Typography>
          </li>
          <li>
            <Typography onClick={onClick} variant="body1" component={StyledLink} to="/blog">
              Blog
            </Typography>
          </li>
          <li>
            <Typography onClick={onClick} variant="body1" component={StyledLink} to="/contact">
              Contact
            </Typography>
          </li>
        </ul>
      </Box>
    </Slide>
  );
};

export default MobileMenu;
