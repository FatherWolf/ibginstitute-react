import { Button } from '@mui/material';

interface Step4Props {
  onNext: () => void;
}

const Step4: React.FC<Step4Props> = ({ onNext }) => {

  return (
    <div>
      Step 4 will go here: referralSource, terms checkbox, submit
      <Button variant="contained" color="primary">
        SUBMIT
      </Button>
    </div>
  );
}

export default Step4;
