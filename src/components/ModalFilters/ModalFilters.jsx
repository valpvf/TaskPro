import Modal from 'components/Modal/Modal';
import ModalTitle from 'components/ModalTitle/ModalTitle';
import RadioFilters from 'shared/components/radioButtons/RadioFilters';
import { FormStyled, BoxStyled, SubtitleStyled } from './ModalFilters.styled';
import { useState } from 'react';

const ModalFilters = ({ onClose, onClick }) => {
  const [priority, setPriority] = useState('');

  console.log(priority);

  return (
    <Modal onClose={onClose}>
      <ModalTitle>Filters</ModalTitle>
      <FormStyled>
        <BoxStyled>
          <SubtitleStyled>Label color</SubtitleStyled>
        </BoxStyled>
        <RadioFilters
          onFilterChange={setPriority}
          onModalClose={onClose}
          onClick={onClick}
        />
      </FormStyled>
    </Modal>
  );
};

export default ModalFilters;
