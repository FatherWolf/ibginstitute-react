import * as React from 'react';
import { Box, Typography } from '@mui/material';

const Footer: React.FC = () => {
    return (
        <Box 
            sx={{
                position: 'fixed',
                bottom: 0,
                width: '100%',
                bgcolor: 'white',
                color: 'black',
                textAlign: 'center',
                p: 1 // Padding for aesthetics.
            }}
        >
          <Typography variant="body1">
            Test Footer
          </Typography>
        </Box>
    );
}

export default Footer;
