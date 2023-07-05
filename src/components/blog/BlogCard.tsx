import React from 'react';
import { Card, CardContent, Typography, Box, Button } from '@mui/material';
import CategoryTag from './CategoryTag';
interface BlogCardProps {
  image: string;
  category: string;
  title: string;
  summary: string;
  date: string;
  selectedTag: string | null;
  onClick: () => void;
}
const BlogCard: React.FC<BlogCardProps> = ({
  image,
  category,
  title,
  summary,
  date,
  selectedTag,
  onClick,
}) => {
  return (
    <Card sx={{ borderRadius: 8, display: 'flex', flexDirection: 'column', height: '100%' }}>
      <Box position="relative" height={0} paddingTop="56.25%">
        <img src={image} alt="Blog" style={{ objectFit: 'cover', width: '100%', height: '100%', position: 'absolute', top: 0, left: 0 }} />
        <CategoryTag category={category} label={category} selected={category === selectedTag || selectedTag === null} />
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
        <Box sx={{ mt: 'auto', display: 'flex', justifyContent: 'center', mb: 2 }}>
          <Button variant="contained" onClick={onClick}>
            Read More
          </Button>
        </Box>
      </Box>
    </Card>
  );
};

export default BlogCard;
