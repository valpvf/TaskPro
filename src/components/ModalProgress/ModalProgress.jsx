import React, { useEffect } from 'react';
import { ModalWrapper } from './ModalProgress.styled';
import { useRef } from 'react';
import RadioTooltip from 'shared/components/radioButtons/RadioTooltip';

const ModalProgress = ({ onCloseProgress, id }) => {
  const modalRef = useRef();

  function onCloseEscape(e) {
    if (e.key === 'Escape') {
      e.stopPropagation();
      onCloseProgress();
    }
  }
  useEffect(() => {
    window.addEventListener('keydown', onCloseEscape);
    return () => {
      window.removeEventListener('keydown', onCloseEscape);
    };
  });

  return (
    <ModalWrapper ref={modalRef}>
      <RadioTooltip onClick={onCloseProgress} id={id} />
    </ModalWrapper>
  );
};

export default ModalProgress;
