import * as React from 'react';
import { Box, TextField, Button, Typography, Grid, FormControl, InputLabel, Select, MenuItem, FormControlLabel, Checkbox } from '@mui/material';
import { countries, states } from '../../constants/index';

interface FormState {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  country: string;
  stateProvince: string;
  program: string;
  referralSource: string;
  acceptTerms: boolean;
}

const GetStartedForm: React.FC = () => {
  const [values, setValues] = React.useState<FormState>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    country: '',
    stateProvince: '',
    program: '',
    referralSource: '',
    acceptTerms: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  // handles state  of user choice in drop down menus
  const handleSelectChange = (name: keyof typeof values) => (
    e: React.ChangeEvent<{ name?: string; value: unknown }>
  ) => {
    setValues({
      ...values,
      [name]: e.target.value,
    });
  };

  // handles state change for checkbox to agree to terms
  const handleCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [event.target.name]: event.target.checked });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!values.firstName || !values.lastName || !values.email || !values.program) {
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
      variant="outlined"
      sx={{
        "& .MuiOutlinedInput-root": {
          "& fieldset": {
            border: 'none',
            borderBottom: '1px solid',
            borderRadius: 0,
          },
          "&:hover fieldset": {
            borderBottom: '2px solid',
          },
          "&.Mui-focused fieldset": {
            borderBottom: '2px solid',
          },
        },
      }}
      {...props}
    />
  )

  return (
    <Box sx={{ maxWidth: '75%', margin: 'auto', border: '1px solid black', borderRadius: 2, px: 3, py: 2 }}>
      <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
        <Typography component="h1" variant="h4" sx={{ borderRadius: 2, mb: 2, textAlign: 'center', backgroundColor: 'lightgrey', p: 2 }}>
          Get Started
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <BottomBorderTextField
              margin="normal"
              required
              fullWidth
              id="firstName"
              label="First Name"
              name="firstName"
              autoFocus
              value={values.firstName}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <BottomBorderTextField
              margin="normal"
              required
              fullWidth
              id="lastName"
              label="Last Name"
              name="lastName"
              autoFocus
              value={values.lastName}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <BottomBorderTextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              value={values.email}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <BottomBorderTextField
              fullWidth
              id="phone"
              label="Phone Number"
              name="phone"
              value={values.phone}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth variant="standard">
              <InputLabel id="country-label">Country</InputLabel>
              <Select
                labelId="country-label"
                id="country"
                name="country"
                value={values.country}
                label="Country"
                onChange={handleSelectChange('country') as any}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {countries.map((country) => (
                  <MenuItem key={country.code} value={country.code}>
                    {country.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth variant="standard">
              <InputLabel id="stateProvince-label">State/Province</InputLabel>
              <Select
                labelId="stateProvince-label"
                id="stateProvince"
                name="stateProvince"
                value={values.stateProvince}
                label="State/Province"
                onChange={handleSelectChange('stateProvince') as any}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {states.map((state) => (
                  <MenuItem key={state.code} value={state.code}>
                    {state.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth variant="standard">
              <InputLabel required id="program-label">Program</InputLabel>
              <Select
                labelId="program-label"
                id="program"
                name="program"
                value={values.program}
                label="Program"
                onChange={handleSelectChange('program') as any}
              >
                <MenuItem value={'Fast Track'}>Fast Track</MenuItem>
                <MenuItem value={'Crash Course'}>Crash Course</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth variant="standard">
              <InputLabel id="referralSource-label">How did you hear about us?</InputLabel>
              <Select
                labelId="referralSource-label"
                id="referralSource"
                name="referralSource"
                value={values.referralSource}
                label="How did you hear about us?"
                onChange={handleSelectChange('referralSource') as any}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={'Social Media'}>Social Media</MenuItem>
                <MenuItem value={'IBG Referral'}>IBG Referral</MenuItem>
                <MenuItem value={'Google/Search Engine'}>Google/Search Engine</MenuItem>
                <MenuItem value={'Other'}>Other (please specify)</MenuItem>
              </Select>
            </FormControl>
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

export default GetStartedForm;
