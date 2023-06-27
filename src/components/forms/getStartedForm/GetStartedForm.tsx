import { useState, useCallback, useEffect } from 'react';
import { Stepper, Step, StepLabel, Box, Typography } from '@mui/material';

import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';

const steps = ['Contact', 'Program', 'Location', 'Submit'];

const GetStartedForm: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [formState, setFormState] = useState({
    firstName: '',
    lastName: '',
    email: '',
    program: '',
    country: '',
    state: '',
    referral: '',
    acceptTerms: false,
  });

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const updateFormState = useCallback((state: any) => {
    setFormState((prevState) => ({
      ...prevState,
      ...state,
    }));
  }, []);

  const handleSubmit = () => {
    console.log(formState);
  };

  // check latest render of inputs
  useEffect(() => {
    console.log("useEffect formState: ",formState);
  }, [formState]);

  return (
    <Box maxWidth={400} sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', bgcolor: 'background.paper', borderRadius: '8px', p: 2 }}>
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
      {activeStep === 0 && <Step1 onNext={handleNext} updateFormState={updateFormState} />}
      {activeStep === 1 && <Step2 onNext={handleNext} onBack={handleBack} updateFormState={updateFormState} />}
      {activeStep === 2 && <Step3 onNext={handleNext} onBack={handleBack} updateFormState={updateFormState} />}
      {activeStep === 3 && <Step4 onBack={handleBack} onSubmit={handleSubmit} updateFormState={updateFormState} />}
    </Box>
  );
}

export default GetStartedForm;
