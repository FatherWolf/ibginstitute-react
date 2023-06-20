import React from "react";
import { Container, Typography } from "@mui/material";
import GetStartedForm from "../../components/forms/GetStartedForm";

const Home: React.FC = () => {
  return (
    <Container>
      <Typography variant="h2" align="center">
        Welcome to IBG Institute
      </Typography>
      <Typography variant="body1" align="center">
        Your journey to knowledge begins here.
      </Typography>
      <GetStartedForm />
    </Container>
  );
}
export default Home;
