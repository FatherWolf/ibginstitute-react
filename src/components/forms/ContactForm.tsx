import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { Grid, TextField, Box, Typography, Button, FormControlLabel, Checkbox } from '@mui/material';
import ToastContainer from "../toasts/SuccessToast";
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

const BottomBorderTextField = (props: any) => (
  <TextField
    variant="standard"
    margin="normal"
    fullWidth
    {...props}
  />
)

const ContactForm: React.FC = () => {
  const [values, setValues] = useState<FormState>({
    name: '',
    email: '',
    phone: '',
    acceptTerms: false,
    message: '',
  });

  const [errors, setErrors] = useState<ErrorState>({
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

    setErrors({
      ...errors,
      [e.target.name]: '',
    });
  };

  const handleCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [e.target.name]: e.target.checked });
    setErrors({
      ...errors,
      [e.target.name]: '',
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let tempErrors = { ...errors };
    let hasError = false;

    // Validation code

    if (!values.name) {
      tempErrors.name = 'Full Name is required';
      hasError = true;
    }

    const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    if (!values.email) {
      tempErrors.email = 'Email Address is required';
      hasError = true;
    } else if (!emailRegex.test(values.email)) {
      tempErrors.email = 'Please provide a valid email address';
      hasError = true;
    }

    const phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if (values.phone && !phoneRegex.test(values.phone)) {
      tempErrors.phone = 'Please provide a valid phone eg. number xxx-xxx-xxxx';
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

    // Form submission code would go here


    toast.success("Your message has been successfully submitted.");

    setValues({
      name: '',
      email: '',
      phone: '',
      acceptTerms: false,
      message: '',
    });

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
        <Typography component="h1" variant="h4" sx={{ mb: 2, textAlign: 'center' }}>
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
            <BottomBorderTextField
              required
              id="message"
              label="Message"
              name="message"
              multiline
              rows={4}
              value={values.message}
              onChange={handleChange}
              error={Boolean(errors.message)}
              helperText={errors.message}
            />
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={<Checkbox color="primary" checked={values.acceptTerms} name="acceptTerms" onChange={handleCheck} />}
              label="I agree. By checking this box, you are opting-in to receive information from us."
            />
            {errors.acceptTerms && <Typography color="error">{errors.acceptTerms}</Typography>}
          </Grid>
          <Grid item xs={12}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              disabled={!values.acceptTerms}
              sx={{ mt: 3, mb: 2, fontSize: '1.5rem', padding: '20px', mx: 'auto', width: '50%' }}
            >
              Submit
            </Button>
          </Grid>
          <ToastContainer />
           
          
        </Grid>
      </Box>
    </Box>
  );
}

export default ContactForm;


