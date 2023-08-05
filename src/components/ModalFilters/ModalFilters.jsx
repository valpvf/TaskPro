import Modal from 'components/Modal/Modal';
import ModalTitle from 'components/ModalTitle/ModalTitle';
import RadioFilters from 'shared/components/radioButtons/RadioFilters';
import {
  FormStyled,
  BoxStyled,
  SubtitleStyled,
  ButtonStyled,
} from './ModalFilters.styled';
import { useState } from 'react';

const ModalFilters = ({ onClose }) => {
  const [priority, setPriority] = useState('all');

  console.log(priority);

  return (
    <Modal onClose={() => onClose(priority)}>
      <ModalTitle>Filters</ModalTitle>
      <FormStyled>
        <BoxStyled>
          <SubtitleStyled>Label color</SubtitleStyled>
          <ButtonStyled type="button">Show all</ButtonStyled>
        </BoxStyled>
        <RadioFilters onFilterChange={setPriority} />
      </FormStyled>
    </Modal>
  );
};

export default ModalFilters;
