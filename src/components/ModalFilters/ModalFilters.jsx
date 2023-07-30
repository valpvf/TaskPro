import Modal from 'components/Modal/Modal';
import ModalTitle from 'components/ModalTitle/ModalTitle';
import RadioFilters from 'shared/components/radioButtons/RadioFilters';
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
        <RadioFilters />
      </FormStyled>
    </Modal>
  );
};

export default ModalFilters;
