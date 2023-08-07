import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';

import {
  Button,
  Grid,
  Typography,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  SelectChangeEvent,
  FormControlLabel,
  Checkbox,
  TextField
} from '@mui/material';

interface Step4Props {
  onBack: () => void;
  updateFormState: (state: any) => void;
  onSubmit: () => void;
}

const Step4: React.FC<Step4Props> = ({ onBack, onSubmit, updateFormState }) => {
  const [referral, setReferral] = useState('');
  const [otherReferral, setOtherReferral] = useState('');
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleReferralChange = (event: SelectChangeEvent<string>) => {
    setReferral(event.target.value);
  };

  const handleOtherReferralChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setOtherReferral(event.target.value);
  };

  const handleCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAcceptTerms(event.target.checked);
  };

  const handleSubmit = () => {
    updateFormState({
      referral: referral === 'Other' ? otherReferral : referral,
      acceptTerms,
    });
    onSubmit();
    setIsSubmitted(true);
    toast.success('Your responses have been successfully submitted.', {
      position: 'bottom-right',
      autoClose: 3000,
      // Add more options as needed based on the documentation of react-toastify
    });
  };



  console.log('Your responses have been successfully submitted.'); // TODO: Log toast message

  return isSubmitted ? (
    <Grid container spacing={2} mb={3}>
      <Grid item xs={12} mt={3}>
        <Typography variant="h6" align="center">Thank You!</Typography>
        <Typography variant="subtitle1" align="center">Your responses have been successfully submitted.</Typography>
      </Grid>
    </Grid>
  ) : (
    <Grid container spacing={2} mb={3}>
      <Grid item xs={12} mt={3}>
        <Typography variant="h6" align="center">How did you hear about us?</Typography>
      </Grid>
      <Grid item xs={12}>
        <FormControl fullWidth variant="standard">
          <InputLabel required id="referral-label">Referral Source</InputLabel>
          <Select
            labelId="referral-label"
            id="referral"
            name="referral"
            value={referral}
            label="Referral"
            onChange={handleReferralChange}
          >
            <MenuItem value={'Social Media'}>Social Media</MenuItem>
            <MenuItem value={'IBG Referral'}>IBG Referral</MenuItem>
            <MenuItem value={'Google/Search Engine'}>Google/Search Engine</MenuItem>
            <MenuItem value={'Other'}>Other (please specify)</MenuItem>
          </Select>
        </FormControl>
        {referral === 'Other' && (
          <TextField
            label="Please specify"
            value={otherReferral}
            onChange={handleOtherReferralChange}
            fullWidth
            variant="standard"
          />
        )}
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h6" align="center">Terms & Conditions</Typography>
      </Grid>
      <Grid item xs={12}>
        <FormControlLabel
          control={<Checkbox color="primary" checked={acceptTerms} name="acceptTerms" onChange={handleCheck} />}
          label={<Typography variant="caption">I agree. By checking this box, you are opting-in to receive information from IBG Institute. You also agree to Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus gravida arcu sagittis erat posuere, et efficitur quam vestibulum. Ut iaculis vitae nibh eget congue.</Typography>}
        />
      </Grid>
      <Grid container item xs={12} justifyContent="space-between">
        <Button variant="contained" color="secondary" onClick={onBack}>
          Back
        </Button>
        <Button variant="contained" color="primary" disabled={!referral || !acceptTerms} onClick={handleSubmit}>
          SUBMIT
        </Button>
      </Grid>
      <ToastContainer />
    </Grid>
  );
};

export default Step4;

