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
  selectedTag: string | null;
  onTagSelect: (tag: string) => void;
}

const TagFilter: React.FC<TagFilterProps> = ({ selectedTag, onTagSelect }) => {
  return (
    <Box my={2} sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
      {categories.map((category, index) => {
        const selected = category === selectedTag || selectedTag === null;
        return (
          <CategoryTag
            key={index}
            category={category}
            label={category}
            selected={selected}
            onClick={() => onTagSelect(category)}
            sx={{ m: 1, cursor: 'pointer', position: 'relative' }}
          />
        );
      })}
    </Box>
  );
};



export default TagFilter;
