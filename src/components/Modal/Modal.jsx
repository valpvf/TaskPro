import {
  BackdropStyled,
  ModalWindowStyled,
  CloseBtnStyled,
} from './Modal.styled';

const Modal = ({ children, onClose }) => {
  const handleClose = e => {
    console.log(e);
    onClose();
  };
  return (
    <BackdropStyled>
      <ModalWindowStyled>
        <CloseBtnStyled onClick={handleClose}>
          <svg width={18} height={18}>
            <use></use>
          </svg>
        </CloseBtnStyled>
        {children}
      </ModalWindowStyled>
    </BackdropStyled>
  );
};

export default Modal;
