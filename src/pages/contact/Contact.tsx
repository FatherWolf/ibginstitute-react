import { Box, Typography, Grid } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import ContactForm from "../../components/forms/ContactForm";

const Contact: React.FC = () => {
  return (
    <Box>
      <Typography variant="h3" align="center" marginTop={4} marginBottom={4}>
        Drop Us A Line!
      </Typography>
      <Grid container justifyContent="center" alignItems="center" spacing={3}>
        <Grid item xs={12} sm={4}>
          <Typography variant="h6" align="center" display="flex" alignItems="center" justifyContent="center">
            <LocationOnIcon style={{ marginRight: '8px' }} /> Charlotte, NC
          </Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography variant="h6" align="center" display="flex" alignItems="center" justifyContent="center">
            <EmailIcon style={{ marginRight: '8px' }} />info@ibginstitute.com
          </Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography variant="h6" align="center" display="flex" alignItems="center" justifyContent="center">
            <PhoneIcon style={{ marginRight: '8px' }} /> (980) 296-2699
          </Typography>
        </Grid>
      </Grid>
      <Box maxWidth={600} margin="auto" marginTop={2} marginBottom={2}>
        <Typography variant="body1" align="center">
          Our chatbot does its best, but we understand that some questions need a human touch. Drop us a message using the form below, and we'll assist you promptly.
        </Typography>
      </Box>
      <Box padding={3}>
        <ContactForm />
      </Box>
    </Box>
  );
};

export default Contact;
