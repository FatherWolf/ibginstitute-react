import React from 'react';
import { Typography, Accordion, AccordionSummary, AccordionDetails, Box, Grid } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useTheme } from '@mui/material/styles';
import { faqData } from '../../constants';

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
        {faqData.map((category, i) => (
          <Grid item xs={12} sm={6} key={i}>
            <Typography variant="h4" align="center" gutterBottom sx={{ color: theme.palette.secondary.main }}>
              {category.category}
            </Typography>
            {category.faqs.map((faq, j) => (
              <Accordion key={j}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls={`panel${j + 1}a-content`}
                  id={`panel${j + 1}a-header`}
                  sx={{ color: theme.palette.common.black }}
                >
                  <Typography>{faq.question}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography sx={{ color: theme.palette.common.black }}>
                    {faq.answer}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </Grid>
        ))}
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
