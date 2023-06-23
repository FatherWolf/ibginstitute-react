import { useState } from 'react';
import { Stepper, Step, StepLabel, Box, Typography } from '@mui/material';

import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';

const steps = ['Contact', 'Program', 'Location', 'Submit'];

const GetStartedForm: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  // add logic when submit form
  const handleSubmit = () => {
    console.log('form submitted');
  };

  return (
    <Box maxWidth={400}>
      <Typography component="h1" variant="h4" sx={{ mb: 2, textAlign: 'center' }}>
        Get Started
      </Typography>
      <Stepper activeStep={activeStep}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>
              <Typography variant="caption">{label}</Typography>
            </StepLabel>
          </Step>
        ))}
      </Stepper>

      {activeStep === 0 && <Step1 onNext={handleNext} />}
      {activeStep === 1 && <Step2 onNext={handleNext} onBack={handleBack} />}
      {activeStep === 2 && <Step3 onNext={handleNext} onBack={handleBack} />}
      {activeStep === 3 && <Step4 onBack={handleBack} onSubmit={handleSubmit} />}
    </Box>
  );
}

export default GetStartedForm;
