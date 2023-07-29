// import { useEffect } from 'react';
import sprite from '../../images/sprite.svg';
import {
  BackdropStyled,
  ModalWindowStyled,
  CloseBtnStyled,
  IconStyled,
} from './Modal.styled';

const Modal = ({ children, onClose }) => {
  const handleClose = e => {
    e.stopPropagation();
    onClose();
  };

  // useEffect(() => {
  //   window.addEventListener('keydown', onCloseBackdropEscape);
  //   return () => {
  //     window.removeEventListener('keydown', onCloseBackdropEscape);
  //   };
  // }, []);

  function onCloseBackdropEscape(e) {
    if (e.target.className === 'css-1pzlqj6' || e.key === 'Escape') {
      e.stopPropagation();
      onClose();
    }
  }

  return (
    <BackdropStyled onClick={onCloseBackdropEscape}>
      <ModalWindowStyled>
        <CloseBtnStyled onClick={handleClose}>
          <IconStyled width={18} height={18}>
            <use href={`${sprite}#icon-close`}></use>
          </IconStyled>
        </CloseBtnStyled>
        {children}
      </ModalWindowStyled>
    </BackdropStyled>
  );
};

export default Modal;
