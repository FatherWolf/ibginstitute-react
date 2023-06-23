import { Button } from '@mui/material';

interface Step1Props {
  onNext: () => void;
}

const Step1: React.FC<Step1Props> = ({ onNext }) => {

  return (
    <div>
      Step 1 will go here: name and email
      <Button variant="contained" color="primary" onClick={onNext}>
        Next
      </Button>
    </div>
  );
}

export default Step1;
