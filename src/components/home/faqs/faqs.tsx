import React from "react";
import { Container, Typography } from "@mui/material";

/**
 * WE should path or route this in as reviews is not what the button is being used for... 
 * this return container. 
 * We needs self contained faqs already known...
 */
const Faqs: React.FC = () => {
    return (
        <Container>
            <Typography variant="h2" align="center">
                Faqs About IBG
            </Typography>
            <Typography variant="body1" align="center">
                Dedicated to excellence in teaching and research.
            </Typography>
        </Container>
    );
}

export default Faqs;

