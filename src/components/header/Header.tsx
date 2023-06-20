import * as React from 'react';
import { Box, Typography } from '@mui/material';

const Header: React.FC = () => {
    return (
        <Box 
            sx={{
                position: 'fixed',
                top: 0,
                width: '100%',
                bgcolor: 'grey',
                color: 'black',
                textAlign: 'center',
                p: 1 // Padding for aesthetics.
            }}
        >
          <Typography variant="body1">
            Test Header
          </Typography>
        </Box>
    );
}

export default Header;