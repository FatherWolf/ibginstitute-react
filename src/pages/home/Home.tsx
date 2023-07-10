import React from "react";
import { Container, Typography } from "@mui/material";
import HeroImage from "./components/heroImage/HeroImage"; // don't forget to import HeroImage
import GetStartedForm from "../../components/forms/getStartedForm/GetStartedForm";
import { Box } from '@mui/system'; // we'll use Box for more styling flexibility
import InfoBlocks from "./components/infoblocks/InfoBlocks";

const Home: React.FC = () => {
  return (
    <>
      <Container>
        <Typography variant="h3" align="center">
          Your journey to knowledge begins here
        </Typography>
        <Typography variant="body1" align="center">
          <p>This exceptional chance allows for immediate involvement, offering an enthralling and interactive platform to unveil the fascinating narrative behind the website and its enticing offerings.</p>
        </Typography>
      </Container>
      <br></br>
      <Box sx={{ position: 'relative', width: '100%', height: '33.33vh' }}>
        {/* Position the parent relative */}
        <HeroImage />
        <GetStartedForm />
      </Box>
      <InfoBlocks />
    </>
  );
}

export default Home;
