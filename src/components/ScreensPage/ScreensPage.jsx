import {
  Container,
  ScreensHeader,
  HeaderTxt,
  HeaderFiltres,
  IconFiltre,
  AddColumn,
  IconPlus,
  ButtonAdd,
} from './ScreensPageStyled';
import icons from '../../images/sprite.svg';
import { useState } from 'react';
import Card from 'components/Card/Card';
import ModalColumn from 'components/ModalColumn/ModalColumn';
import ModalFilters from 'components/ModalFilters/ModalFilters';
// import img1 from '../../images/photo_2020-02-16_07-56-08.jpg';

const ScreensPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [showFilters, setShowFilters] = useState(false);

  const onOpen = () => {
    setShowModal(true);
  };
  const onClose = () => {
    setShowModal(false);
  };

  const onOpenFilters = () => {
    setShowFilters(true);
  };
  const onCloseFilters = () => {
    setShowFilters(false);
  };

  return (
    <Container>
      <ScreensHeader>
        <HeaderTxt>Project office</HeaderTxt>
        <HeaderFiltres onClick={onOpenFilters}>
          <IconFiltre>
            <use href={`${icons}#icon-filter`}></use>
          </IconFiltre>
          <div>Filtres</div>
          {showFilters && <ModalFilters onClose={onCloseFilters} />}
        </HeaderFiltres>
      </ScreensHeader>

      <AddColumn>
        <ButtonAdd
          type="button"
          // onClick={handleAddColumnClick}
          onClick={onOpen}
        >
          <IconPlus>
            <use href={`${icons}#icon-plus-01`}></use>
          </IconPlus>
          Add another column
        </ButtonAdd>
      </AddColumn>
      {/* Тут можуть бути ваші колонки з картками */}
      <Card />
      <Card />
      <Card />

      {showModal && <ModalColumn onClose={onClose} />}
    </Container>
  );
};

export default ScreensPage;
