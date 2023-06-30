import React from 'react';
import { Box } from '@mui/material';
import CategoryTag from './CategoryTag';

const categories = [
  'Developer\'s Dialogue',
  'Career Advice',
  'Coding Exercises',
  'Learning Resources',
  'News and Updates',
  'Fun Facts & Trivia',
  'Trips & Tricks for Coding',
  'Project Showcase',
  'Language Spotlight'
];


interface TagFilterProps {
  onTagSelect: (tag: string) => void;
}

const TagFilter: React.FC<TagFilterProps> = ({ onTagSelect }) => {
  return (
    <Box my={2} sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
      {categories.map((category, index) => (
        <CategoryTag
          key={index}
          category={category}
          label={category}
          onClick={() => onTagSelect(category)}
          sx={{ m: 1, cursor: 'pointer', position: 'relative' }}
        />
      ))}
    </Box>
  );
};

export default TagFilter;
