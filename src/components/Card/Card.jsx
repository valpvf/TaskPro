import React from 'react';
import { useState } from 'react';
import sprite from '../../images/sprite.svg';
import ModalCard from 'components/ModalCard/ModalCard';
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
  Icon,
  IconWrapper,
} from './Card.styled';

const Card = () => {
  const [showModal, setShowModal] = useState(false);

  const onOpen = () => {
    setShowModal(true);
  };
  const onClose = () => {
    setShowModal(false);
  };

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
            <PriorySubTitle>
              <Ball />
              Low
            </PriorySubTitle>
          </div>
          <div>
            <DeadlineTitle>Deadline</DeadlineTitle>
            <DeadlineSubTitle>12/05/2023</DeadlineSubTitle>
          </div>
          <IconWrapper>
            <Icon width="16px" height="16px">
              <use xlinkHref={`${sprite}#icon-bell`} />
            </Icon>
            <Icon width="16px" height="16px">
              <use xlinkHref={`${sprite}#icon-goto`} />
            </Icon>
            <Icon width="16px" height="16px" onClick={onOpen}>
              <use xlinkHref={`${sprite}#icon-pencil`} />
            </Icon>
            {showModal && <ModalCard onClose={onClose} />}
            <Icon width="16px" height="16px">
              <use xlinkHref={`${sprite}#icon-trash`} />
            </Icon>
          </IconWrapper>
        </PriorityWrapper>
      </div>
    </CardWrapper>
  );
};

export default Card;
