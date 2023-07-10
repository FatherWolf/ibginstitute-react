import React from 'react';
import { Box, Button, Card, CardContent, Typography } from '@mui/material';
import CategoryTag from './CategoryTag';
import EmbeddedAsset from './EmbeddedAsset';


interface MiniBlogCardProps {
  assetId: string;
  category: string;
  title: string;
  date: string;
  selectedTag: string | null;
  onClick: () => void;
}

const MiniBlogCard: React.FC<MiniBlogCardProps> = ({
 assetId,
  category,
  title,
  date,
  selectedTag,
  onClick,
}) => {
  return (
    <Card sx={{ width: '300px', borderRadius: 8, display: 'flex', flexDirection: 'column', marginBottom: 6 }} elevation={4}>
      <Box sx={{ position: 'relative', width: '100%', height: '200px', overflow: 'hidden' }}>
        <EmbeddedAsset assetId={assetId}  style={{
            objectFit: 'cover',
            width: '100%',
            height: '100%',
            position: 'absolute',
            top: 0,
            left: 0
          }}/>
        <CategoryTag category={category} label={category} selected={category === selectedTag || selectedTag === null} />
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
        <CardContent>
          <Typography variant="h6" component="h2" align="center" gutterBottom>
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary" align="center">
            {new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </Typography>
          <Box sx={{ mt: 2, mb: 0, display: 'flex', justifyContent: 'center' }}>
            <Button variant="contained" onClick={onClick}>
              Read More
            </Button>
          </Box>
        </CardContent>

      </Box>
    </Card>
  );
};

export default MiniBlogCard;
