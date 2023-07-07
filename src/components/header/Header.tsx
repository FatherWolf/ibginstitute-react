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

  const handleMenuClick = () => {
    console.log(`FAQS`);
    setIsMobileMenuOpen(true);
  };

  const handleMenuClose = () => {
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <Box
      sx={{
        background: "#38A3A5",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "1.5rem",
        flexDirection: isMobileScreen ? "column" : "row",
        flexWrap: "wrap",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          marginBottom: "1.618rem", // Golden ratio
          flexGrow: 1,
          flexBasis: isMobileScreen ? "100%" : "auto",
        }}
      >
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          <img src={logo} style={{ width: "2em" }} alt="IBG Institute" />
        </Link>
        <Typography variant="h6" component="div" sx={{ ml: 1 }}>
          IBG Institute
        </Typography>
      </Box>
      {!isMobileScreen && (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            marginLeft: "auto",
          }}
        >
          <Button
            component={Link}
            to="/"
            variant="contained"
            color="primary"
            sx={{ marginRight: "1.618rem" }} // Golden ratio
          >
            Home
          </Button>
          <Button
            component={Link}
            to="/about"
            variant="contained"
            color="primary"
            sx={{ marginRight: "1.618rem" }} // Golden ratio
          >
            About
          </Button>
          <Button
            component={Link}
            to="/faqs"
            variant="contained"
            color="primary"
            sx={{ marginRight: "1.618rem" }} // Golden ratio
          >
            FAQs
          </Button>
          <Button
            component={Link}
            to="/blog"
            variant="contained"
            color="primary"
            sx={{ marginRight: "1.618rem" }} // Golden ratio
          >
            Blog
          </Button>
          <Button
            component={Link}
            to="/contact"
            variant="contained"
            color="primary"
          >
            Contact
          </Button>
        </Box>
      )}

      {isMobileScreen && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            marginTop: "1.618rem", // Golden ratio
            flexGrow: 1,
            flexBasis: "100%",
          }}
        >
          {!isMobileMenuOpen && (
            <Menu
              sx={{ cursor: "pointer" }}
              onClick={handleMobileMenuToggle}
            />
          )}
          {isMobileMenuOpen && (
            <Close
              sx={{ cursor: "pointer" }}
              onClick={handleMenuClose}
            />
          )}
        </Box>
      )}

      {(isMobileScreen || isMobileMenuOpen) && (
        <Box
          sx={{
            display: "flex",
            flexDirection: isMobileScreen ? "column" : "row",
            alignItems: isMobileScreen ? "center" : "flex-start",
            marginTop: "1.618rem", // Golden ratio
            flexGrow: 1,
            flexBasis: "100%",
          }}
        >
          <Button
            component={Link}
            to="/"
            variant="contained"
            color="primary"
            sx={{
              marginBottom: isMobileScreen ? "1.618rem" : 0, // Golden ratio
              marginRight: isMobileScreen ? 0 : "1.618rem", // Golden ratio
            }}
          >
            Home
          </Button>
          <Button
            component={Link}
            to="/about"
            variant="contained"
            color="primary"
            sx={{
              marginBottom: isMobileScreen ? "1.618rem" : 0, // Golden ratio
              marginRight: isMobileScreen ? 0 : "1.618rem", // Golden ratio
            }}
          >
            About
          </Button>
          <Button
            component={Link}
            to="/faqs"
            variant="contained"
            color="primary"
            sx={{
              marginBottom: isMobileScreen ? "1.618rem" : 0, // Golden ratio
              marginRight: isMobileScreen ? 0 : "1.618rem", // Golden ratio
            }}
          >
            FAQs
          </Button>
          <Button
            component={Link}
            to="/blog"
            variant="contained"
            color="primary"
            sx={{
              marginBottom: isMobileScreen ? "1.618rem" : 0, // Golden ratio
              marginRight: isMobileScreen ? 0 : "1.618rem", // Golden ratio
            }}
          >
            Blog
          </Button>
          <Button
            component={Link}
            to="/contact"
            variant="contained"
            color="primary"
            sx={{ marginBottom: isMobileScreen ? "1.618rem" : 0 }} // Golden ratio
          >
            Contact
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default Header;


