import * as React from 'react';
import { Box, TextField, Button, Typography, Grid, FormControlLabel, Checkbox } from '@mui/material';


interface FormState {
  name: string;
  email: string;
  phone: string;
  acceptTerms: boolean;
}

const ContactForm: React.FC = () => {
  const [values, setValues] = React.useState<FormState>({
    name: '',
    email: '',
    phone: '',
    acceptTerms: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };


  // handles state change for checkbox to agree to terms
  const handleCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [event.target.name]: event.target.checked });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!values.name || !values.email) {
      // Handle the validation error here, e.g., set an error message state
      console.log('Please fill out the required information');
      return;
    }

    // Handle the form submission here 
    console.log('form values: ', values);
  };

  // repeated styling for inputs for name, email address, phone number
  const BottomBorderTextField = (props: any) => (
    <TextField
      variant="standard"
      margin="normal"
      fullWidth
      {...props}
    />
  )

  return (
    <Box sx={{ maxWidth: '475px', margin: 'auto', border: '1px solid black', borderRadius: 2, px: 3, py: 2 }}>
      <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
        <Typography component="h1" variant="h4" sx={{ borderRadius: 2, mb: 2, textAlign: 'center' }}>
          Contact Us
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <BottomBorderTextField
              required
              id="name"
              label="Full Name"
              name="name"
              value={values.name}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <BottomBorderTextField
              required
              id="email"
              label="Email Address"
              name="email"
              value={values.email}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <BottomBorderTextField
              id="phone"
              label="Phone Number"
              name="phone"
              value={values.phone}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              id="message"
              label="Message"
              multiline
              rows={4}
              // defaultValue="Write your message here"
              variant="standard"
            />
          </Grid>

          <Grid item xs={12}>
            <FormControlLabel
              control={<Checkbox color="primary" checked={values.acceptTerms} name="acceptTerms" onChange={handleCheck} />}
              label="I agree. By checking this box, you are opting-in to receive information from IBG Institute. You also agree to Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus gravida arcu sagittis erat posuere, et efficitur quam vestibulum. Ut iaculis vitae nibh eget congue."
            />
          </Grid>

          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{ mt: 3, mb: 2, fontSize: '1.5rem', padding: '20px', mx: 'auto', width: '50%' }}
          >
            Submit
          </Button>

        </Grid>
      </Box>
    </Box>
  );
}

export default ContactForm;