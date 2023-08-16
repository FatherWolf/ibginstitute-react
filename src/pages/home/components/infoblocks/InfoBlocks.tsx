import React from 'react';
import { Card, CardActionArea, CardContent, CardMedia, Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

interface CardInfo {
  title: string;
  subtext: string;
  image: string;
  link: string;
}

const cardsInfo: CardInfo[] = [
  { title: "Crash Course", subtext: "Short Cycle", image: "https://via.placeholder.com/400", link: "/link1" },
  { title: "Fast Track ", subtext: "Full Payment", image: "https://via.placeholder.com/400", link: "/link2" },
  { title: "Fast Track ", subtext: "Payment plan", image: "https://via.placeholder.com/400", link: "/link3" },
];

const InfoBlocks: React.FC = () => {
  const navigate = useNavigate();

  const handleClick = (link: string) => {
    navigate(link);
  };

  return (
    <Box 
      sx={{
        display: 'flex', 
        justifyContent: 'space-evenly', 
        flexWrap: 'wrap', 
        gap: 2, 
        padding: 2,
        textAlign: 'center'
      }}>
      {cardsInfo.map((card, i) => (
        <Card
          key={i}
          sx={{
            width: 'calc(30% - 12px)', // Adjusted for about 20% larger width
            maxWidth: 'none', // To prevent Material-UI's maxWidth from interfering
            boxShadow: 3,
            margin: '8px',
          }}
          onMouseEnter={(event) => (event.currentTarget).style.boxShadow = '5px 5px 15px rgba(0,0,0,0.3)'}
          onMouseLeave={(event) => (event.currentTarget).style.boxShadow = 'none'}
        >
          <CardActionArea onClick={() => handleClick(card.link)}>
            <CardMedia
              component="img"
              height="200" // Adjust image height as desired
              image={card.image}
              alt={card.title}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {card.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {card.subtext}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </Box>
  );
};

export default InfoBlocks;
