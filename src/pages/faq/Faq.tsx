import React from 'react';
import { Typography, Accordion, AccordionSummary, AccordionDetails, Box, Grid } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useTheme } from '@mui/material/styles';

const Faq: React.FC = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        padding: theme.spacing(2),
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.common.white,
      }}
    >
      <Typography variant="h2" align="center" gutterBottom sx={{ color: theme.palette.secondary.main }}>
        FAQs
      </Typography>
      
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h4" align="center" gutterBottom sx={{ color: theme.palette.secondary.main }}>
            Purchases & Refunds
          </Typography>
          {Array.from({ length: 3 }).map((_, i) => (
            <Accordion key={i}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`panel${i + 1}a-content`}
                id={`panel${i + 1}a-header`}
                sx={{ color: theme.palette.common.black }}
              >
                <Typography>{`Question ${i + 1}`}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography sx={{ color: theme.palette.common.black }}>
                  {`Answer to question ${i + 1}...`}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Grid>
        
        <Grid item xs={12} sm={6}>
          <Typography variant="h4" align="center" gutterBottom sx={{ color: theme.palette.secondary.main }}>
            Taking the Course
          </Typography>
          {Array.from({ length: 11 }).map((_, i) => (
            <Accordion key={i}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`panel${i + 4}a-content`}
                id={`panel${i + 4}a-header`}
                sx={{ color: theme.palette.common.black }}
              >
                <Typography>{`Question ${i + 4}`}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography sx={{ color: theme.palette.common.black }}>
                  {`Answer to question ${i + 4}...`}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Grid>
      </Grid>

      <Typography 
        variant="h6" 
        align="center" 
        sx={{ 
          color: theme.palette.secondary.main,
          marginTop: theme.spacing(3)
        }}>
        If you have any additional questions, please feel free to contact us!
      </Typography>
    </Box>
  );
}

export default Faq;
