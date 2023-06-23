import * as React from 'react';
import { Button, TextField, Grid } from '@mui/material';

interface Step1Props {
  onNext: () => void;
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

const Step1: React.FC<Step1Props> = ({ onNext }) => {
  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [email, setEmail] = React.useState('');

  // if fields are empty, users cannot continue to next step
  const canContinue = firstName && lastName && email;

  return (
    <Grid container spacing={2} mb={3}>
      <Grid item xs={12} sm={6}>
        <BottomBorderTextField
          required
          label="First Name"
          value={firstName}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFirstName(e.target.value)}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <BottomBorderTextField
          required
          label="Last Name"
          value={lastName}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setLastName(e.target.value)}
        />
      </Grid>
      <Grid item xs={12}>
        <BottomBorderTextField
          required
          label="Email"
          value={email}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
        />
      </Grid>
      <Grid container item xs={12} justifyContent="center">
        <Button variant="contained" color="primary" disabled={!canContinue} onClick={onNext}>
          Next
        </Button>
      </Grid>
    </Grid>
  );
}

export default Step1;
