import React from 'react';
import { ModalWrapper, Icon, TextProgress, TextDone } from './ModalProgress.styled';
import sprite from '../../images/sprite.svg';
import { useRef } from 'react';
const ModalProgress = ({onCloseProgress}) => {
  const modalRef = useRef();

  const handleOverlayClick = (e) => {
     if (e.target !== e.currentTarget) {
      onCloseProgress();
    }
  };
  return (
    <ModalWrapper onClick={handleOverlayClick} ref={modalRef}>
      <div>
        <TextProgress>In progress <Icon width="16px" height="16px">
              <use xlinkHref={`${sprite}#icon-goto`} />
            </Icon></TextProgress>
        <TextDone>Done <Icon width="16px" height="16px">
              <use xlinkHref={`${sprite}#icon-goto`} />
            </Icon></TextDone>
      </div>
    </ModalWrapper>
  );
};

export default ModalProgress;
