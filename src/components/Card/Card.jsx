import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
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
import { deleteCard } from 'redux/task/taskOperations';
import ModalProgress from 'components/ModalProgress/ModalProgress';

const Card = ({ task = {}, columnID }) => {
  const {
    title = ' ',
    description = ' ',
    priority = 'Without',
    deadline = '1/1/2023',
    _id = '',
  } = task;

  const dispatch = useDispatch();
  const handleDelete = () => {
    console.log('id', _id, columnID, task);
    dispatch(deleteCard({ _id, columnID }));
  };

  // console.log('columnId', columnID);

  const [showModal, setShowModal] = useState(false);
  const [showProgressModal, setShowProgressModal] = useState(false);

  const onOpen = () => {
    setShowModal(true);
  };
  const onClose = () => {
    setShowModal(false);
  };

   const onOpenProgress = () => {
    setShowProgressModal(true);
  };
  const onCloseProgress = () => {
    setShowProgressModal(false);
  };

  function formatDate(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');

    return `${day}/${month}/${year}`;
  }
  const today = new Date();
  const formattedDate = formatDate(today); // Output: "07/28/23" (if today is July 28, 2023)
  const deadlineDate = formatDate(new Date(deadline.split('T')[0]));
  return (
    <CardWrapper priority={'High'}>
      <div>
        <Title>{title}</Title>
        <SubTitle>{description}</SubTitle>
        <Line />
        <PriorityWrapper>
          <div>
            <PrioryTitle>Priority</PrioryTitle>
            <PriorySubTitle>
              <Ball priority={'High'} />
              {priority}
            </PriorySubTitle>
          </div>
          <div>
            <DeadlineTitle>Deadline</DeadlineTitle>
            <DeadlineSubTitle>{deadlineDate}</DeadlineSubTitle>
          </div>
          <IconWrapper>
            {deadlineDate === formattedDate && (
              <Icon width="16px" height="16px">
                <use xlinkHref={`${sprite}#icon-bell`} />
              </Icon>
            )}
            <Icon width="16px" height="16px" onClick={onOpenProgress}>
              <use xlinkHref={`${sprite}#icon-goto`} />
            </Icon>
            {showProgressModal && (
              <ModalProgress onCloseProgress={onCloseProgress} />
            )}
            <Icon width="16px" height="16px" onClick={onOpen}>
              <use xlinkHref={`${sprite}#icon-pencil`} />
            </Icon>
            {showModal && (
              <ModalCard
                onClose={onClose}
                title="Edit card"
                btnName="Edit"
                cardTitle={title}
                cardDescription={description}
                currentPriority={priority}
                deadline={deadline}
                column={columnID}
                taskId={_id}
              />
            )}
            <Icon width="16px" height="16px" onClick={handleDelete}>
              <use xlinkHref={`${sprite}#icon-trash`} />
            </Icon>
          </IconWrapper>
        </PriorityWrapper>
      </div>
    </CardWrapper>
  );
};

export default Card;
