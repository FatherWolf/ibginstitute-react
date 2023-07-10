import React from 'react';
import { Box, BoxProps } from '@mui/material';
import { styled } from '@mui/material/styles';

interface TagProps extends BoxProps {
  category: string;
  label: string;
  selected: boolean;
  onClick?: () => void;
}

const StyledTag = styled(Box)<{ bgcolor: string }>(({ theme, bgcolor }) => ({
  position: 'absolute',
  bottom: theme.spacing(1),
  left: theme.spacing(1),
  borderRadius: theme.spacing(0.5),
  padding: theme.spacing(0.5, 1),
  color: '#fff',
  backgroundColor: bgcolor,
}));

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
    case 'Tips & Tricks for Coding':
      return '#FFC107';
    case 'Project Showcase':
      return '#E91E63';
    case 'Language Spotlight':
      return '#00BCD4';
      case 'Technical':
        return '#8BC34A';
    default:
      return '#9E9E9E';
  }
};

const CategoryTag: React.FC<TagProps> = ({ category, label, selected, onClick, ...other }) => {
  const defaultBgColor = getTagColor(category);
  const selectedBgColor = selected ? defaultBgColor : '#9E9E9E';
  return (
    <StyledTag bgcolor={selectedBgColor as any} onClick={onClick} {...other}>
      {label}
    </StyledTag>
  );
};



export default CategoryTag;
