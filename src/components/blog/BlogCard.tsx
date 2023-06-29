import React from 'react';
import { Card, CardContent, Typography, Box, Button } from '@mui/material';
import { styled } from '@mui/material/styles';

// Define a custom tag component
const Tag = styled(Box)(({ theme }) => ({
  position: 'absolute',
  bottom: theme.spacing(1),
  left: theme.spacing(1),
  backgroundColor: 'green', // Replace with dynamically generated color
  borderRadius: theme.spacing(0.5),
  padding: theme.spacing(0.5, 1),
  color: '#fff', // Replace with dynamically generated text color
}));

interface BlogCardProps {
  image: string;
  category: string;
  title: string;
  summary: string;
  date: string;
  onClick: () => void;
}

const BlogCard: React.FC<BlogCardProps> = ({
  image,
  category,
  title,
  summary,
  date,
  onClick,
}) => {
  return (
    <Card sx={{ borderRadius: 8 }}>
      <Box position="relative" height={0} paddingTop="56.25%">
        <img src={image} alt="Blog" style={{ objectFit: 'cover', width: '100%', height: '100%', position: 'absolute', top: 0, left: 0 }} />
        <Tag>{category}</Tag>
      </Box>
      <CardContent sx={{ height: '200px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <Typography variant="h6" component="h2" align="center" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary" align="left" paragraph>
          {summary}
        </Typography>
        <Typography variant="body2" color="text.secondary" align="left">
          {new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 'auto' }}>
          <Button variant="contained" onClick={onClick}>
            Read More
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default BlogCard;
