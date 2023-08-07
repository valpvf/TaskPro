import React from 'react';
import { ModalWrapper } from './ModalProgress.styled';
import { useRef } from 'react';
import RadioTooltip from 'shared/components/radioButtons/RadioTooltip';
const ModalProgress = ({ onCloseProgress }) => {
  const modalRef = useRef();

  return (
    <ModalWrapper ref={modalRef}>
      <RadioTooltip onClick={onCloseProgress} />
    </ModalWrapper>
  );
};

export default ModalProgress;
