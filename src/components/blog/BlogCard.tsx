import React from 'react';
import { Card, CardContent, Typography, Box, Button } from '@mui/material';
import { styled } from '@mui/material/styles';

// Custom tag component
const Tag = styled(Box)(({ theme }) => ({
  position: 'absolute',
  bottom: theme.spacing(1),
  left: theme.spacing(1),
  borderRadius: theme.spacing(0.5),
  padding: theme.spacing(0.5, 1),
  color: '#fff',
}));

interface BlogCardProps {
  image: string;
  category: string;
  title: string;
  summary: string;
  date: string;
  onClick: () => void;
}

const getTagColor = (category: string) => {
  switch (category) {
    case 'Developer\'s Dialogue':
      return '#2196F3';
    case 'Career Advice':
      return '#4CAF50';
    case 'Coding Exercises':
      return '#FF5722';
    case 'Learning Resources':
      return '#673AB7';
    case 'News and Updates':
      return '#3F51B5';
    case 'Fun Facts & Trivia':
      return '#009688';
    case 'Trips & Tricks for Coding':
      return '#FFC107';
    case 'Project Showcase':
      return '#E91E63';
    case 'Language Spotlight':
      return '#00BCD4';
    default:
      return '#9E9E9E';
  }
};


const BlogCard: React.FC<BlogCardProps> = ({
  image,
  category,
  title,
  summary,
  date,
  onClick,
}) => {
  return (
    <Card sx={{ borderRadius: 8, display: 'flex', flexDirection: 'column', height: '100%' }}>
      <Box position="relative" height={0} paddingTop="56.25%">
        <img src={image} alt="Blog" style={{ objectFit: 'cover', width: '100%', height: '100%', position: 'absolute', top: 0, left: 0 }} />
        <Tag sx={{ backgroundColor: getTagColor(category) }}>{category}</Tag>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
        <CardContent>
          <Typography variant="h6" component="h2" align="center" gutterBottom>
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary" align="left" paragraph>
            {summary}
          </Typography>
          <Typography variant="body2" color="text.secondary" align="left">
            {new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </Typography>
        </CardContent>
        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
          <Button variant="contained" onClick={onClick}>
            Read More
          </Button>
        </Box>
      </Box>
    </Card>
  );
};

export default BlogCard;
