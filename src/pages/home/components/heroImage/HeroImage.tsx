import React from 'react';
import { Box } from '@mui/system';
import heroImg from '../../../../assets/ibghero.png'
const HeroImage: React.FC = () => {
  console.log([`heroImg`], heroImg);
  // testing to see this img here...


  return (
    <Box
      sx={{
        heroImg: 'heroImg',
        height: '33.33vh', // Changed to 33.33% for 1/3rd of the viewport height
        width: '100%',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >

    </Box>
  );
};

export default HeroImage;
