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
const ScreensPage = () => {
  const [showModal, setShowModal] = useState(false);

  const onOpen = () => {
    setShowModal(true);
  };
  const onClose = () => {
    setShowModal(false);
  };

  return (
    <Container>
      <ScreensHeader>
        <HeaderTxt>Project office</HeaderTxt>
        <HeaderFiltres>
          <IconFiltre>
            <use href={`${icons}#icon-filter`}></use>
          </IconFiltre>
          <div>Filtres</div>
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
