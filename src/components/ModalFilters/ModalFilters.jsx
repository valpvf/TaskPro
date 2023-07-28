import Modal from 'components/Modal/Modal';
import ModalTitle from 'components/ModalTitle/ModalTitle';
import RadioColored from 'shared/components/radioButtons/RadioColored';
import {
  FormStyled,
  BoxStyled,
  SubtitleStyled,
  ButtonStyled,
} from './ModalFilters.styled';

const ModalFilters = ({ onClose }) => {
  return (
    <Modal onClose={onClose}>
      <ModalTitle>Filters</ModalTitle>
      <FormStyled>
        <BoxStyled>
          <SubtitleStyled>Label color</SubtitleStyled>
          <ButtonStyled type="button">Show all</ButtonStyled>
        </BoxStyled>
        <RadioColored />
      </FormStyled>
    </Modal>
  );
};

export default ModalFilters;
