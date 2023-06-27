import React from 'react';
import { Box } from '@mui/system';

const HeroImage: React.FC = () => {
  return (
    <Box 
      sx={{ 
        height: '33.33vh', // Changed to 33.33% for 1/3rd of the viewport height
        width: '100%',
        backgroundImage: `url('https://via.placeholder.com/150')`, 
        backgroundSize: 'cover', 
        backgroundPosition: 'center', 
        backgroundRepeat: 'no-repeat' 
      }}
    >
    </Box>
  );
};

export default HeroImage;
