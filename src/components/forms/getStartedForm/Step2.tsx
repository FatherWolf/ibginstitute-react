import { Button } from '@mui/material';

interface Step2Props {
  onNext: () => void;
}

const Step2: React.FC<Step2Props> = ({ onNext }) => {

  return (
    <div>
      Step 2 will go here: program type
      <Button variant="contained" color="primary" onClick={onNext}>
        Next
      </Button>
    </div>
  );
}

export default Step2;
