import RadioFilters from 'shared/components/radioButtons/RadioFilters';
import Modal from 'components/Modal/Modal';
import ModalTitle from 'components/ModalTitle/ModalTitle';
import { FormStyled, BoxStyled, SubtitleStyled } from './ModalFilters.styled';

const ModalFilters = ({ onClose, onClick }) => {
  let priority = '';
  return (
    <Modal onClose={onClose}>
      <ModalTitle>Filters</ModalTitle>
      <FormStyled>
        <BoxStyled>
          <SubtitleStyled>Label color</SubtitleStyled>
        </BoxStyled>
        <RadioFilters
          onFilterChange={() => priority}
          onModalClose={onClose}
          onClick={onClick}
        />
      </FormStyled>
    </Modal>
  );
};

export default ModalFilters;
