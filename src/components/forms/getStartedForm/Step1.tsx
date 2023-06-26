import React, {useState} from 'react';
import { Button, TextField, Grid } from '@mui/material';

interface Step1Props {
  onNext: () => void;
  updateFormState: (state: any) => void;
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

const Step1: React.FC<Step1Props> = ({ onNext, updateFormState }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');


  const isValidEmail = (email: string) => {
    const pattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    return pattern.test(email);
  }

  const emailIsValid = isValidEmail(email);

  // checks for empty fields and if email is valid
  const canContinue = firstName && lastName && email && emailIsValid;

  const handleClickNext = () => {
    updateFormState({
      firstName,
      lastName,
      email,
    });
    onNext();
  };

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
          error={!emailIsValid && email !== ''}
          helperText={!emailIsValid && email !== '' ? 'Please enter a valid email address.' : null}
        />
      </Grid>
      <Grid container item xs={12} justifyContent="center">
        <Button variant="contained" color="primary" disabled={!canContinue} onClick={handleClickNext}>
          Next
        </Button>
      </Grid>
    </Grid>
  );
}

export default Step1;