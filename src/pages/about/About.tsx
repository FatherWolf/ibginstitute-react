import React from "react";
import { Container, Typography } from "@mui/material";

const About: React.FC = () => {
  return (
    <Container>
      <Typography variant="h2" align="center">
        About IBG Institute
      </Typography>
      <Typography variant="body1" align="center">
        IBG Institute is a leading educational institute dedicated to excellence in teaching and research.
      </Typography>
    </Container>
  );
}

export default About;
