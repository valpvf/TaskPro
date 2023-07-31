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
import { useEffect, useState } from 'react';
import Card from 'components/Card/Card';
import ModalColumn from 'components/ModalColumn/ModalColumn';
import ModalFilters from 'components/ModalFilters/ModalFilters';
import { persistor } from 'redux/store';
import { useSelector } from 'react-redux';
import ButtonMain from 'shared/components/button/Button';
import { BlackPlusButton } from 'shared/components/plusButton/PlusButtons';
import ModalCard from 'components/ModalCard/ModalCard';

const ScreensPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [showModalAddCard, setShowModalAddCard] = useState(false);
  const [showFilters, setShowFilters] = useState(false);

  const backgroundValue = useSelector(state => state.board);
  // const backgroundValue = useSelector(state => state.board[0].background);

  // const backgroundValue = useSelector(selectBackground);
  useEffect(() => {
    console.log(backgroundValue);
  }, [backgroundValue]);
  // const backgroundValue = '09d';

  const onOpen = () => {
    setShowModal(true);
  };
  const onClose = () => {
    setShowModal(false);
  };

  const onOpenAddCard = () => {
    setShowModalAddCard(true);
  };
  const onCloseAddCard = () => {
    setShowModalAddCard(false);
  };

  const onOpenFilters = () => {
    setShowFilters(true);
  };
  const onCloseFilters = () => {
    setShowFilters(false);
  };

  persistor.persist();

  return (
    <Container
      style={{
        backgroundImage: `url('images/background/${backgroundValue}.jpg')`,
      }}
    >
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
            <use href={`${icons}#icon-plus`}></use>
          </IconPlus>
          Add another column
        </ButtonAdd>
      </AddColumn>
      {/* Тут можуть бути ваші колонки з картками */}
      <div style={{ width: '334px' }}>
        <Card />
        <Card />
        <Card />
        <ButtonMain type="submit" onClick={onOpenAddCard}>
          <BlackPlusButton />
          Add another card
        </ButtonMain>
      </div>
      {showModal && (
        <ModalColumn onClose={onClose} title="Add column" btnName="Add" />
      )}
      {showModalAddCard && (
        <ModalCard onClose={onCloseAddCard} title="Add card" btnName="Add" />
      )}
    </Container>
  );
};

export default ScreensPage;
