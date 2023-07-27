import sprite from '../../images/sprite.svg';
import {
  BackdropStyled,
  ModalWindowStyled,
  CloseBtnStyled,
  IconStyled,
} from './Modal.styled';

const Modal = ({ children, onClose }) => {
  const handleClose = () => {
    onClose();
  };
  return (
    <BackdropStyled>
      <ModalWindowStyled>
        <CloseBtnStyled onClick={handleClose}>
          <IconStyled width={18} height={18}>
            <use href={sprite + '#icon-close'}></use>
          </IconStyled>
        </CloseBtnStyled>
        {children}
      </ModalWindowStyled>
    </BackdropStyled>
  );
};

export default Modal;
