import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Box, Typography, Button, useMediaQuery } from "@mui/material";

import { Menu, Close } from "@mui/icons-material";

import logo from "../../assets/institute-icon.png";

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isMobileScreen = useMediaQuery("(max-width:733px)");

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    if (!isMobileScreen) {
      setIsMobileMenuOpen(false);
    }
  }, [isMobileScreen]);

  // Header styles
  const containerStyle: React.CSSProperties = {
    background: "#80ED99",
    display: "flex",
    flexDirection: "column",
    padding: "1.5rem",
  };

  const innerBoxStyle: React.CSSProperties = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "right",
    flexDirection: isMobileScreen ? "column" : "row",
  };

  const logoBoxStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "right",
    marginBottom: isMobileScreen ? "1.618rem" : 0,
  };

  return (
    <Box sx={containerStyle}>
      <Box sx={innerBoxStyle}>
        <Box sx={logoBoxStyle}>
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            <img src={logo} style={{ width: "2em" }} alt="IBG Institute" />
          </Link>
          <Typography variant="h6" component="div" sx={{ ml: 1 }}>
            IBG Institute
          </Typography>
        </Box>
        {isMobileScreen ? (
          <Menu onClick={handleMobileMenuToggle} sx={{ cursor: "pointer" }} />
        ) : (
          <Box
            sx={{
              display: "flex",
              alignItems: "right",
            }}
          >
            <Button component={Link} to="/" variant="contained" color="primary" sx={{ marginRight: "1.618rem" }}>
              Home
            </Button>
            <Button component={Link} to="/about" variant="contained" color="primary" sx={{ marginRight: "1.618rem" }}>
              About
            </Button>
            <Button component={Link} to="/faqs" variant="contained" color="primary" sx={{ marginRight: "1.618rem" }}>
              FAQs
            </Button>
            <Button component={Link} to="/blog" variant="contained" color="primary" sx={{ marginRight: "1.618rem" }}>
              Blog
            </Button>
            <Button component={Link} to="/contact" variant="contained" color="primary">
              Contact
            </Button>
          </Box>
        )}
      </Box>

      {isMobileMenuOpen && (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "right",
            marginTop: "1.618rem",
            marginBottom: "1.618rem",
          }}
        >
          <Close onClick={handleMobileMenuToggle} sx={{ cursor: "pointer", marginBottom: "1.618rem" }} />
          <Button component={Link} to="/" variant="contained" color="primary" sx={{ marginBottom: "1.618rem" }}>
            Home
          </Button>
          <Button component={Link} to="/about" variant="contained" color="primary" sx={{ marginBottom: "1.618rem" }}>
            About
          </Button>
          <Button component={Link} to="/faqs" variant="contained" color="primary" sx={{ marginBottom: "1.618rem" }}>
            FAQs
          </Button>
          <Button component={Link} to="/blog" variant="contained" color="primary" sx={{ marginBottom: "1.618rem" }}>
            Blog
          </Button>
          <Button component={Link} to="/contact" variant="contained" color="primary" sx={{ marginBottom: "1.618rem" }}>
            Contact
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default Header;

