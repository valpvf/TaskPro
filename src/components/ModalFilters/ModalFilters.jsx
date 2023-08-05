import Modal from 'components/Modal/Modal';
import ModalTitle from 'components/ModalTitle/ModalTitle';
import RadioFilters from 'shared/components/radioButtons/RadioFilters';
import { FormStyled, BoxStyled, SubtitleStyled } from './ModalFilters.styled';
import { useState } from 'react';

const ModalFilters = ({ onClose }) => {
  const [priority, setPriority] = useState('none');

  console.log(priority);
  return (
    <Modal onClose={onClose}>
      <ModalTitle>Filters</ModalTitle>
      <FormStyled>
        <BoxStyled>
          <SubtitleStyled>Label color</SubtitleStyled>
        </BoxStyled>
        <RadioFilters onFilterChange={setPriority} onModalClose={onClose} />
      </FormStyled>
    </Modal>
  );
};

export default ModalFilters;
