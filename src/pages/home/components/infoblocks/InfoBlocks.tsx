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
  { title: "Card 1", subtext: "This is card 1", image: "https://via.placeholder.com/150", link: "/link1" },
  { title: "Card 2", subtext: "This is card 2", image: "https://via.placeholder.com/150", link: "/link2" },
  { title: "Card 3", subtext: "This is card 3", image: "https://via.placeholder.com/150", link: "/link3" },
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
        <Card key={i} sx={{ maxWidth: 345, boxShadow: 3 }} onMouseEnter={(event) => (event.currentTarget).style.boxShadow = '5px 5px 15px rgba(0,0,0,0.3)'} onMouseLeave={(event) => (event.currentTarget).style.boxShadow = 'none'}>
          <CardActionArea onClick={() => handleClick(card.link)}>
            <CardMedia
              component="img"
              height="140"
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
