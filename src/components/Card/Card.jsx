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

const Card = ({ task }) => {
  const { title, description, priority, deadline } = task;
  const [showModal, setShowModal] = useState(false);
  console.log('task', task);

  const onOpen = () => {
    setShowModal(true);
  };
  const onClose = () => {
    setShowModal(false);
  };

  return (
    <CardWrapper>
      <div>
        <Title>{title}</Title>
        <SubTitle>{description}</SubTitle>
        <Line />
        <PriorityWrapper>
          <div>
            <PrioryTitle>Priority</PrioryTitle>
            <PriorySubTitle>
              <Ball />
              {priority}
            </PriorySubTitle>
          </div>
          <div>
            <DeadlineTitle>Deadline</DeadlineTitle>
            <DeadlineSubTitle>{deadline.split('T')[0]}</DeadlineSubTitle>
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
            {showModal && (
              <ModalCard onClose={onClose} title="Edit card" btnName="Edit" />
            )}
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
