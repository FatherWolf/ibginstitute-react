import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Box, Typography, Button, useMediaQuery } from "@mui/material";

import { Menu } from "@mui/icons-material";

import logo from "../../assets/institute-icon.png";

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isMobileScreen = useMediaQuery("(max-width:600px)");

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleMenuClick = () => {
    setIsMobileMenuOpen(true);
  };

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <Box
      sx={{
        background: "#38A3A5",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-end",
        padding: "1.5rem",
        flexDirection: "column",
        "@media (min-width: 600px)": {
          flexDirection: "row",
        },
      }}
    >
      <Box sx={{ display: "flex", alignItems: "flex-end", mb: 2 }}>
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          <img src={logo} style={{ width: "2em" }} alt="IBG Institute" />
        </Link>
        {/* <Typography variant="h6" component="div" sx={{ ml: 1 }}>
          IBG Institute
        </Typography> */}
      </Box>
      {!isMobileScreen && (
        <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          marginBottom: "1rem",
        }}
      >
        <Button
          component={Link}
          to="/"
          variant="contained"
          color="primary"
          sx={{ marginRight: "3px" }}
        >
          Home
        </Button>
        <Button
          component={Link}
          to="/about"
          variant="contained"
          color="primary"
          sx={{ marginRight: "3px" }}
        >
          About
        </Button>
        <Button
          component={Link}
          to="/reviews"
          variant="contained"
          color="primary"
          sx={{ marginRight: "3px" }}
        >
          FAQs
        </Button>
        <Button
          component={Link}
          to="/blog"
          variant="contained"
          color="primary"
          sx={{ marginRight: "3px" }}
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

      <Box>
        {/* Toggle button for mobile menu */}
        {isMobileScreen && (
          <div className="mobile-menu-toggle" onClick={handleMobileMenuToggle}>
            <Menu />
          </div>
        )}
        {/* Mobile menu */}
        {(isMobileScreen || isMobileMenuOpen) && (
          <div
            className={`Menu Clicked ${isMobileMenuOpen ? "active" : "hidden"}`}
          >
            {isMobileMenuOpen && (
              <>
                <Typography>Home</Typography>
                <Typography>About</Typography>
                <Typography>FAQS</Typography>
                <Typography>Blog</Typography>
                <Typography>Contact</Typography>
              </>
            )}
          </div>
        )}
      </Box>
    </Box>
  );
};

export default Header;
