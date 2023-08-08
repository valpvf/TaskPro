import React from 'react';
import { ModalWrapper } from './ModalProgress.styled';
import { useRef } from 'react';
import RadioTooltip from 'shared/components/radioButtons/RadioTooltip';

const ModalProgress = ({ onCloseProgress, id }) => {
  const modalRef = useRef();

  return (
    <ModalWrapper ref={modalRef}>
      <RadioTooltip onClick={onCloseProgress} id={id} />
    </ModalWrapper>
  );
};

export default ModalProgress;
