import * as React from 'react';
import { Box, TextField, Button, Typography, Grid, FormControlLabel, Checkbox } from '@mui/material';


interface FormState {
  name: string;
  email: string;
  phone: string;
  acceptTerms: boolean;
  message: string;
}
interface ErrorState {
  name: string;
  email: string;
  phone: string;
  acceptTerms: string;
  message: string;
}

// repeated styling for inputs for name, email address, phone number
const BottomBorderTextField = (props: any) => (
  <TextField
    variant="standard"
    margin="normal"
    fullWidth
    {...props}
  />
)

const ContactForm: React.FC = () => {
  const [values, setValues] = React.useState<FormState>({
    name: '',
    email: '',
    phone: '',
    acceptTerms: false,
    message: '',
  });

  const [errors, setErrors] = React.useState<ErrorState>({
    name: '',
    email: '',
    phone: '',
    acceptTerms: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [event.target.name]: event.target.checked });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let tempErrors = { ...errors };
    let hasError = false;

    if (!values.name) {
      tempErrors.name = 'Full Name is required';
      hasError = true;
    }
    // regex for email validation
    const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    if (!values.email) {
      tempErrors.email = 'Email Address is required';
      hasError = true;
    } else if (!emailRegex.test(values.email)) {
      tempErrors.email = 'Please provide a valid email address';
      hasError = true;
    }
    // regex for US phone number validation, e.g. (123) 456-7890
    const phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

    if (values.phone && !phoneRegex.test(values.phone)) {
      tempErrors.phone = 'Please provide a valid phone number';
      hasError = true;
    }
    if (!values.message) {
      tempErrors.message = 'Message is required';
      hasError = true;
    }
    if (!values.acceptTerms) {
      tempErrors.acceptTerms = 'You must accept the terms to proceed';
      hasError = true;
    }

    setErrors(tempErrors);
    if (hasError) return;

    // Handle the form submission here 
    console.log('form values: ', values);

    // reset form fields
    setValues({
      name: '',
      email: '',
      phone: '',
      acceptTerms: false,
      message: '',
    });

    // reset error messages
    setErrors({
      name: '',
      email: '',
      phone: '',
      acceptTerms: '',
      message: '',
    });
  };

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
              error={Boolean(errors.name)}
              helperText={errors.name}
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
              error={Boolean(errors.email)}
              helperText={errors.email}
            />
          </Grid>
          <Grid item xs={12}>
            <BottomBorderTextField
              id="phone"
              label="Phone Number"
              name="phone"
              value={values.phone}
              onChange={handleChange}
              error={Boolean(errors.phone)}
              helperText={errors.phone}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              required
              id="message"
              label="Message"
              name="message"
              value={values.message}
              onChange={handleChange}
              multiline
              rows={4}
              variant="standard"
              error={Boolean(errors.message)}
              helperText={errors.message}
            />
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={<Checkbox color="primary" checked={values.acceptTerms} name="acceptTerms" onChange={handleCheck} />}
              label="I agree. By checking this box, you are opting-in to receive information from IBG Institute. You also agree to Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus gravida arcu sagittis erat posuere, et efficitur quam vestibulum. Ut iaculis vitae nibh eget congue."
            />
            {errors.acceptTerms && <Typography textAlign="center" color="error">{errors.acceptTerms}</Typography>}
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