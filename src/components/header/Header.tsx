import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Box, Typography, Button, useMediaQuery, ThemeProvider, createTheme, PaletteOptions } from "@mui/material";
import { Menu, Close } from "@mui/icons-material";
import logo from "../../assets/institute-icon.png";

// Extend the PaletteOptions interface to add custom properties
declare module "@mui/material/styles/createPalette" {
  interface PaletteOptions {
    btn?: string;
  }
}

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

  // Material-UI theme
  const theme = createTheme({
    palette: {
      primary: {
        main: "#80ED99", // Use the primary color here
      },
      btn: "#33577A", // Define the new button color here
    },
    // Add other theme options as required
    components: {
      MuiButton: {
        styleOverrides: {
          containedPrimary: {
            backgroundColor: "#33577A", // Use the new button color for primary contained buttons
            color: "#FFFFFF", // Use white text for the new button color
          },
          textPrimary: {
            color: "#000000", // Use black text for the primary text buttons
          },
        },
      },
    },
  });

  // Header styles
  const containerStyle: React.CSSProperties = {
    background: theme.palette.primary.main, // Use the primary color from the theme
    display: "flex",
    flexDirection: "column",
    padding: "1.5rem",
  };

  const innerBoxStyle: React.CSSProperties = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: isMobileScreen ? "row" : "row", // Keep it as row for both mobile and web view
  };

  const logoBoxStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    marginBottom: isMobileScreen ? "1.618rem" : 0,
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={containerStyle}>
        <Box sx={innerBoxStyle}>
          <Box sx={logoBoxStyle}>
            <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
              <img src={logo} style={{ width: "2em" }} alt="IBG Institute" />
            </Link>
            {!isMobileScreen && (
              <Typography variant="h6" component="div" sx={{ ml: 1 }}>
                IBG Institute
              </Typography>
            )}
          </Box>
          {isMobileScreen ? (
            <Menu onClick={handleMobileMenuToggle} sx={{ cursor: "pointer" }} />
          ) : (
            <Box // The web view menu is outside the Button component to keep it visible
              sx={{
                display: "flex",
                alignItems: "center",
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
              alignItems: "flex-end", // Align "X" icon to the right in mobile view
              marginTop: "1.618rem",
              marginBottom: "1.618rem",
            }}
          >
            {isMobileScreen && ( // Show menu items only in mobile view
              <>
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
              </>
            )}
            {!isMobileScreen && ( // Hide the icon in web view
              <Close onClick={handleMobileMenuToggle} sx={{ cursor: "pointer", marginBottom: "1.618rem" }} />
            )}
          </Box>
        )}
      </Box>
    </ThemeProvider>
  );
};

export default Header;
