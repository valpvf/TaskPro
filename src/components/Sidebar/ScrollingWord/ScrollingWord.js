import React from 'react';
import {
  ScrollableWordContainer,
  ScrollableWordText,
  FullWordText,
} from './ScrollableWordStyles';

const ScrollingWord = ({ word }) => {
  return (
    <ScrollableWordContainer>
      <ScrollableWordText>{word}</ScrollableWordText>
      <FullWordText>{word}</FullWordText>
    </ScrollableWordContainer>
  );
};

export default ScrollingWord;
