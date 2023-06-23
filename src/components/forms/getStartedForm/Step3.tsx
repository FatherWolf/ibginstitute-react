import { Button } from '@mui/material';

interface Step3Props {
  onNext: () => void;
}

const Step3: React.FC<Step3Props> = ({ onNext }) => {

  return (
    <div>
      Step 3 will go here: country and state
      <Button variant="contained" color="primary" onClick={onNext}>
        Next
      </Button>
    </div>
  );
}

export default Step3;
