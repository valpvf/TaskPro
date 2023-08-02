import {
  Container,
  ScreensHeader,
  HeaderTxt,
  HeaderFiltres,
  IconFiltre,
  AddColumn,
  IconPlus,
  ButtonAdd,
  ColumnsContainer,
} from './ScreensPageStyled';
import icons from '../../images/sprite.svg';
import { useState } from 'react';
import Card from 'components/Card/Card';
import ModalColumn from 'components/ModalColumn/ModalColumn';
import ModalFilters from 'components/ModalFilters/ModalFilters';
import ButtonMain from 'shared/components/button/Button';
import { BlackPlusButton } from 'shared/components/plusButton/PlusButtons';
import ModalCard from 'components/ModalCard/ModalCard';
import { useSelector } from 'react-redux';
// import { getBoard, getBoardSelector } from 'redux/auth/authSelectors';
import { getBoardBg, getBoardName, getColumn } from 'redux/task/taskSelectors';
import Column from 'components/Column/Column';
// import { addBoardApi } from 'services/backApi';

const ScreensPage = ({ title }) => {
  const [showModal, setShowModal] = useState(false);
  const [showModalAddCard, setShowModalAddCard] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(addBoardApi());
  // }, [dispatch]);

  // const backgroundValue = useSelector(getBoardSelector);
  const boardName = useSelector(getBoardName);
  const column = useSelector(getColumn).toSorted((a, b) =>
    a.updatedAt.localeCompare(b.updatedAt)
  );
  // console.log(backgroundValue);

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

  return (
    <Container
      style={{
        backgroundImage: `url('images/background/${useSelector(
          getBoardBg
        )}d.jpg')`,
      }}
    >
      <ScreensHeader>
        <HeaderTxt>{boardName ?? ''}</HeaderTxt>
        <AddColumn>
          <ButtonAdd
            type="button"
            // onClick={handleAddColumnClick}
            onClick={onOpen}
          >
            <IconPlus>
              <use href={`${icons}#icon-plus`}></use>
            </IconPlus>
            {column.length === 0 ? 'Add column' : 'Add another column'}
          </ButtonAdd>
        </AddColumn>
        <HeaderFiltres onClick={onOpenFilters}>
          <IconFiltre>
            <use href={`${icons}#icon-filter`}></use>
          </IconFiltre>
          <div>Filtres</div>
          {showFilters && <ModalFilters onClose={onCloseFilters} />}
        </HeaderFiltres>
      </ScreensHeader>
      {/* Тут можуть бути ваші колонки з картками */}
      {boardName && (
        <ColumnsContainer>
          {column.map(el => (
            <div key={el._id}>
              <Column title={el.title} columnId={el._id} />
              {el.tasks
                .toSorted((a, b) => a.updatedAt.localeCompare(b.updatedAt))
                .map(task => (
                  <Card key={task._id} task={task} />
                ))}
              {/* <Card />
            <Card /> */}
              <ButtonMain type="submit" onClick={onOpenAddCard}> 
                <BlackPlusButton />
                {el.tasks.length === 0 ? 'Add card' : 'Add another card'}
              </ButtonMain>
            </div>
          ))}
        </ColumnsContainer>
      )}
      {showModal && (
        <ModalColumn
          onClose={onClose}
          title="Add column"
          btnName="Add"
          columnTitle={title}
        />
      )}
      {showModalAddCard && (
        <ModalCard onClose={onCloseAddCard} title="Add card" btnName="Add" />
      )}
    </Container>
  );
};

export default ScreensPage;
