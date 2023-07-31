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
import { useDispatch, useSelector } from 'react-redux';
import { getBoardSelector } from '../../redux/task/taskSelectors';
import { getBoard } from '../../redux/task/taskOperations';

const ScreensPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBoard());
  }, [dispatch]);

  const backgroundValue = useSelector(getBoardSelector);

  console.log(backgroundValue);

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
      <Card />
      <Card />
      <Card />

      {showModal && <ModalColumn onClose={onClose} />}
    </Container>
  );
};

export default ScreensPage;
