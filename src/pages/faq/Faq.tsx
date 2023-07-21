import React from 'react';
import { Typography, Accordion, AccordionSummary, AccordionDetails, Box } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useTheme } from '@mui/material/styles';

const Faq: React.FC = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        width: '100%',
        padding: theme.spacing(2),
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.common.white,
      }}
    >
      <Typography variant="h2" align="center" gutterBottom sx={{ color: theme.palette.secondary.main }}>
        FAQs
      </Typography>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{ color: theme.palette.common.black }}
        >
          <Typography>Question 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ color: theme.palette.common.black }}>
            Answer to question 1...
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
          sx={{ color: theme.palette.common.black }}
        >
          <Typography>Question 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ color: theme.palette.common.black }}>
            Answer to question 2...
          </Typography>
        </AccordionDetails>
      </Accordion>

    </Box>
  );
}

export default Faq;
