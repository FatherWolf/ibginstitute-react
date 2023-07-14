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

  const handleMenuClick = (path: string) => {
    console.log(`Clicked ${path}`);
    setIsMobileMenuOpen(false); // Close the mobile menu
  };

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
            sx={{ marginRight: "1.618rem" }} // Golden ratio
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
              onClick={handleMobileMenuToggle}
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
          {/* Mobile menu */}
          <Box>
            <Button
              component={Link}
              to="/"
              variant="contained"
              color="primary"
              sx={{
                marginBottom: isMobileScreen ? "1.618rem" : 0, // Golden ratio
                marginRight: isMobileScreen ? 0 : "1.618rem", // Golden ratio
              }}
              onClick={() => handleMenuClick("/")}
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
              onClick={() => handleMenuClick("/about")}
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
              onClick={() => handleMenuClick("/faqs")}
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
              onClick={() => handleMenuClick("/blog")}
            >
              Blog
            </Button>
            <Button
              component={Link}
              to="/contact"
              variant="contained"
              color="primary"
              sx={{
                marginBottom: isMobileScreen ? "1.618rem" : 0, // Golden ratio
                marginRight: isMobileScreen ? 0 : "1.618rem", // Golden ratio
              }}
              onClick={() => handleMenuClick("/contact")}
            >
              Contact
            </Button>
          </Box>
        </Box>
      )}

      {/* Spacer for center alignment */}
      {isMobileScreen && !isMobileMenuOpen && (
        <Box
          sx={{
            flexGrow: 1,
          }}
        />
      )}
    </Box>
  );
};

export default Header;

