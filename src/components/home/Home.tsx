import React from "react";
import { Container, Typography } from "@mui/material";

const Home: React.FC = () => {
  return (
    <Container>
      <Typography variant="h2" align="center">
        Welcome to IBG Institute
      </Typography>
      <Typography variant="body1" align="center">
        Your journey to knowledge begins here.
      </Typography>
    </Container>
  );
}

export default Home;
