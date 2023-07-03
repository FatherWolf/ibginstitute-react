import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Box, Typography, Button, useMediaQuery } from "@mui/material";

import { Menu } from "@mui/icons-material";

import logo from "../../assets/institute-icon.png";

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isMobileScreen = useMediaQuery("(max-width:600px)");

  // const handleLogoClick = () => {
  //   console.log("ibg-logo");
  //   // Add additional logic or navigation code here
  // };

  // const handleButtonClick = (buttonName: string) => {
  //   console.log(`${buttonName} button clicked!`);
  //   // Add additional logic or navigation code here
  // };

  const handleMobileMenuToggle = () => {
    // Are we here?
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleMenuClick = () => {
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
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1.5rem",
        flexDirection: "column",
        "@media (min-width: 600px)": {
          flexDirection: "row",
        },
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
        <Link
          to="/"
          style={{ textDecoration: "none", color: "inherit" }}

        >
          <img src={logo} style={{ width: "2em" }} alt="IBG Institute" />
        </Link>
        <Typography variant="h6" component="div" sx={{ ml: 1 }}>
          IBG Institute
        </Typography>
      </Box>
      {!isMobileScreen && (
        <>
          <Button
            component={Link}
            to="/"
            variant="contained"
            color="primary"
            sx={{ mb: 1 }}

          >
            Home
          </Button>
          <Button
            component={Link}
            to="/about"
            variant="contained"
            color="primary"
            sx={{ mb: 1 }}

          >
            About
          </Button>
          <Button
            component={Link}
            to="/reviews"
            variant="contained"
            color="primary"
            sx={{ mb: 1 }}

          >
            Reviews
          </Button>
          <Button
            component={Link}
            to="/blog"
            variant="contained"
            color="primary"
            sx={{ mb: 1 }}

          >
            Blog
          </Button>
          <Button
            component={Link}
            to="/contact"
            variant="contained"
            color="primary"
            sx={{ mb: 1 }}

          >
            Contact
          </Button>
        </>
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
          <div className={`mobile-menu ${isMobileMenuOpen ? "active" : "hidden"}`}>
            {isMobileMenuOpen && (
              <>
              <Typography>
                Mobile menu will go here.
              </Typography>
              </>
            )}
          </div>
        )}
      </Box>
    </Box>
  );
};

export default Header;


