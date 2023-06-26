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

interface Step2Props {
  onBack: () => void;
  onNext: () => void;
  updateFormState: (state: any) => void;
}

const Step2: React.FC<Step2Props> = ({ onBack, onNext, updateFormState }) => {
  const [program, setProgram] = useState('');

  const handleProgramChange = (event: SelectChangeEvent<string>) => {
    setProgram(event.target.value);
  };

  const handleClickNext = () => {
    updateFormState({
      program,
    });
    onNext();
  };

  return (
    <Grid container spacing={2} mb={3}>
      <Grid item xs={12} mt={3}>
        <Typography variant="h6" align="center">IBG Institute Courses:</Typography>
        <Typography variant="body1" align="center">Crash Course - 8 week program</Typography>
        <Typography variant="body1" align="center">Fast Track - 24 week program</Typography>
      </Grid>
      <Grid item xs={12}>
        <FormControl fullWidth variant="standard">
          <InputLabel required id="program-label">Which program are you interested in?</InputLabel>
          <Select
            labelId="program-label"
            id="program"
            name="program"
            value={program}
            label="Program"
            onChange={handleProgramChange}
          >
            <MenuItem value={'Fast Track'}>Fast Track</MenuItem>
            <MenuItem value={'Crash Course'}>Crash Course</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid container item xs={12} justifyContent="space-between">
        <Button variant="contained" color="secondary" onClick={onBack}>
          Back
        </Button>
        <Button variant="contained" color="primary" disabled={!program} onClick={handleClickNext}>
          Next
        </Button>
      </Grid>
    </Grid>
  );
}

export default Step2;
