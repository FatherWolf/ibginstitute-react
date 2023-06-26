import React, { useState, useCallback } from 'react';
import { Box, Typography, Button, TextField } from '@mui/material';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [referralType, setReferralType] = useState('');

  const handleEmailChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  }, []);

  const handleReferralTypeChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setReferralType(event.target.value);
  }, []);

  const handleSubmit = useCallback(() => {
    console.log('Email:', email);
    console.log('Referral Type:', referralType);

    // Perform form submission logic here
    // You can use the 'email' and 'referralType' states to access the user input

    // Display success message
    console.log('Form submitted successfully!');
  }, [email, referralType]);

  return (
    <Box
      sx={{
        backgroundColor: 'grey',
        color: 'whitesmoke',
        textAlign: 'center',
        padding: '0.5rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start'
      }}
    >
      <Typography variant="body1">
        Charlotte Office <br />
        333 W. Trade St. Charlotte, NC 20202 <br />
        IBG Consulting <br />
        All rights Reserved 2020-2023
      </Typography>
      <Box sx={{ marginLeft: '1rem', marginTop: '1rem' }}>
        <TextField
          label="Email"
          variant="outlined"
          size="small"
          value={email}
          onChange={handleEmailChange}
          sx={{ marginRight: '1rem' }}
        />
        <TextField
          label="Name"
          variant="outlined"
          size="small"
          value={referralType}
          onChange={handleReferralTypeChange}
          sx={{ marginRight: '1rem' }}
        />
        <Button
          variant="outlined"
          color="primary"
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </Box>
    </Box>
  );
};

export default Footer;

