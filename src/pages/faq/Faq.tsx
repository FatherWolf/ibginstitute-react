import React from 'react';
import { Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Faq: React.FC = () => {
  return (
    <div>
      <Typography variant="h2" align="center" gutterBottom>
        FAQs
      </Typography>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Question 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Answer to question 1...
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Question 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Answer to question 2...
          </Typography>
        </AccordionDetails>
      </Accordion>

      {/* Add more accordions for each FAQ... */}
    </div>
  );
}

export default Faq;
