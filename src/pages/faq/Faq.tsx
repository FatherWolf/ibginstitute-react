import React from 'react';
import { Typography, Accordion, AccordionSummary, AccordionDetails, Box, Grid } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useTheme } from '@mui/material/styles';
import { faqData } from '../../constants';
import { Link } from "react-router-dom"

const Faq: React.FC = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        py: theme.spacing(2),
        px: theme.spacing(6),
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
              <Accordion key={j} sx={{ transition: '0.3s', boxShadow: '1px 1px 10px rgba(0,0,0,0.1)' }}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls={`panel${j + 1}a-content`}
                  id={`panel${j + 1}a-header`}
                  sx={{
                    backgroundColor: theme.palette.primary.light,
                    color: theme.palette.common.white,
                    padding: theme.spacing(2),
                  }}
                >
                  <Typography>{faq.question}</Typography>
                </AccordionSummary>
                <AccordionDetails
                  sx={{
                    backgroundColor: theme.palette.primary.light,
                    padding: theme.spacing(2),
                  }}
                >
                  <Typography sx={{ color: theme.palette.common.white }}>
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
        }}
      >
        If you have any additional questions, please feel free to
        {" "}
        <Link
          to="/contact"
          style={{ textDecoration: 'none', color: theme.palette.warning.main }}
        >
          contact us
        </Link>
        !
      </Typography>
    </Box>
  );
}

export default Faq;
