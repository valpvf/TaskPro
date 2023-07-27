import React from 'react';
import {
  Title,
  CardWrapper,
  SubTitle,
  PrioryTitle,
  PriorySubTitle,
  PriorityWrapper,
  Ball,
  DeadlineSubTitle,
  DeadlineTitle,
  Line,
} from './Card.styled';

const Card = () => {
  return (
    <CardWrapper>
      <div>
        <Title>The Watch Spot Design</Title>
        <SubTitle>
          Create a visually stunning and eye-catching watch dial design that
          embodies our brand's essence of sleek aesthetics and modern elegance.
          Your design should be unique, innovative, and reflective of the latest
          trends in watch design.
        </SubTitle>
        <Line />
        <PriorityWrapper>
          <div>
            <PrioryTitle>Priority</PrioryTitle>
            <PriorySubTitle><Ball/>Low</PriorySubTitle>
          </div>
          <div>
            <DeadlineTitle>Deadline</DeadlineTitle>
            <DeadlineSubTitle>12/05/2023</DeadlineSubTitle>
          </div>
        </PriorityWrapper>
      </div>
    </CardWrapper>
  );
};

export default Card;
