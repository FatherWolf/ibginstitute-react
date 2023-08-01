import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Box } from "@mui/system";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Footer from "./components/Footer/Footer";
import Header from "./components/header/Header";
import Blog from "./pages/blog/Blog";
import ToastContainer from "./components/toasts/SuccessToast";


import BlogDetail from "./pages/blog/BlogDetail";
import ContactForm from "./components/forms/ContactForm";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import Faq from "./pages/faq/Faq";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box display="flex" flexDirection="column" minHeight="100vh">
        <Router>
          <Header />
          <Box flexGrow={1}>
            <Routes>
                <Route path="/about" element={<About />} />
                <Route path="/" element={<Home />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/:blogId" element={<BlogDetail />} />
                <Route path="/contact" element={<ContactForm />} />
                <Route path="/faqs" element={<Faq />} />
            </Routes>
            <ToastContainer />
          </Box>
          <Footer />
        </Router>
      </Box>
    </ThemeProvider>
  );
}

export default App;
