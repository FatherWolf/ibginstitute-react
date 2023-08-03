import { Box, Typography, Grid } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import ContactForm from "../../components/forms/ContactForm";
import theme from "../../theme";

const Contact: React.FC = () => {
  const locationLink = "https://www.google.com/maps/search/?api=1&query=333+W+Trade+St+Charlotte,+NC+20202";
  const emailLink = "mailto:info@ibginstitute.com";
  const phoneLink = "tel:+19802962699";


  return (
    <Box
      sx={{
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.info.main,
        padding: 3
      }}
    >
      <Typography variant="h3" align="center" marginTop={4} marginBottom={4}>
        Drop Us A Line!
      </Typography>
      <Grid container justifyContent="center" alignItems="center" spacing={3}>
        <Grid item xs={12} sm={4}>
          <Typography variant="h6" align="center" display="flex" alignItems="center" justifyContent="center">
            <LocationOnIcon style={{ marginRight: '8px', color: theme.palette.warning.main }} />
            <a target="_blank" href={locationLink} style={{ display: 'block', textAlign: 'center', color: theme.palette.warning.main, textDecoration: 'none' }} rel="noreferrer">
              Charlotte, NC
            </a>
          </Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography variant="h6" align="center" display="flex" alignItems="center" justifyContent="center" sx={{ color: theme.palette.success.main }}>
            <EmailIcon style={{ marginRight: '8px', color: theme.palette.success.main }} />
            <a href={emailLink} style={{ display: 'block', textAlign: 'center', color: theme.palette.success.main, textDecoration: 'none' }} rel="noreferrer">
              info@ibginstitute.com
            </a>
          </Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography variant="h6" align="center" display="flex" alignItems="center" justifyContent="center" sx={{ color: theme.palette.error.main }}>
            <PhoneIcon style={{ marginRight: '8px', color: theme.palette.error.main }} />
            <a href={phoneLink} style={{ display: 'block', textAlign: 'center', color: theme.palette.error.main, textDecoration: 'none' }} rel="noreferrer">
              (980) 296-2699
            </a>

          </Typography>
        </Grid>
      </Grid>
      <Box
        maxWidth={600}
        margin="auto"
        marginTop={{ xs: 2, lg: 3.5 }}
        marginBottom={2}
        sx={{
          padding: { xs: 2, sm: 0 },
          margin: { xs: 2, sm: 'auto' },
        }}
      >
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
