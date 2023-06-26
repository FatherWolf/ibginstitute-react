import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Box } from "@mui/system";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Footer from "./components/Footer/Footer";
import Header from "./components/header/Header";
import ContactForm from "./components/forms/ContactForm";

const App: React.FC = () => {
  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      <Router>
        <Header />
        <Box flexGrow={1}>
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<ContactForm />} />
          </Routes>
        </Box>
        <Footer />
      </Router>
    </Box>
  );
}

export default App;
