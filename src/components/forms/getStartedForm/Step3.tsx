import React, { useState } from 'react';
import {
  Button,
  Grid,
  Typography,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  SelectChangeEvent
} from '@mui/material';

import { countries, states } from '../../../constants';

interface Step3Props {
  onBack: () => void;
  onNext: () => void;
}

const Step3: React.FC<Step3Props> = ({ onBack, onNext }) => {
  const [country, setCountry] = useState('');
  const [state, setState] = useState('');

  const handleCountryChange = (event: SelectChangeEvent<string>) => {
    setCountry(event.target.value);
  };

  const handleStateChange = (event: SelectChangeEvent<string>) => {
    setState(event.target.value);
  };

  return (
    <Grid container spacing={2} mb={5}>
      <Grid item xs={12} mt={3}>
        <Typography variant="h6" align="center">Where are you from?</Typography>
      </Grid>
      <Grid item xs={12}>
        <FormControl fullWidth variant="standard">
          <InputLabel required id="country-label">Country</InputLabel>
          <Select
            labelId="country-label"
            id="country"
            name="country"
            value={country}
            label="Country"
            onChange={handleCountryChange}
          >
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
          <InputLabel required id="state-label">State/Province</InputLabel>
          <Select
            labelId="state-label"
            id="state"
            name="state"
            value={state}
            label="State"
            onChange={handleStateChange}
          >
            {states.map((state) => (
              <MenuItem key={state.code} value={state.code}>
                {state.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
      <Grid container item xs={12} justifyContent="space-between">
        <Button variant="contained" color="secondary" onClick={onBack}>
          Back
        </Button>
        <Button variant="contained" color="primary" disabled={!country || !state} onClick={onNext}>
          Next
        </Button>
      </Grid>
    </Grid>
  );
}

export default Step3;
