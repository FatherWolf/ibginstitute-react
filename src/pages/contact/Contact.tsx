import { Box, Typography } from "@mui/material";
import ContactForm from "../../components/forms/ContactForm";

const Contact: React.FC = () => {


  return (
    <Box>
      <Typography variant="h2" align="center">
        Drop Us A Line!
      </Typography>
      <Typography variant="body1" align="center">
        Our chatbot does its best, but we understand that some questions need a human touch. Drop us a message using the form below, and we'll assist you promptly.
      </Typography>
      <ContactForm />
    </Box>
  );
};

export default Contact;
