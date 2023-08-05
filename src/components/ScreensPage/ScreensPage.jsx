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
  TutorialTitle,
  TutorialContainer,
  TutorialSelected,
  HeaderAddColumn,
  IconPlusFilters,
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
import { getBoard } from 'redux/auth/authSelectors';
// import { addBoardApi } from 'services/backApi';

const ScreensPage = ({ title, isBoardActive }) => {
  const [showModal, setShowModal] = useState(false);
  const [showModalAddCard, setShowModalAddCard] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [dataFilter, setDataFilter] = useState('all');
  const filt = 'Medium';

  const [colId, setColId] = useState('');
  const boardBg = useSelector(getBoardBg);
  const boards = useSelector(getBoard);
  const columns = useSelector(getColumn);
  console.log(boards.length, ' - boards');
  console.log(columns.length, ' - columns');
  console.log(isBoardActive);

  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(addBoardApi());
  // }, [dispatch]);

  // const backgroundValue = useSelector(getBoardSelector);
  const boardName = useSelector(getBoardName);
  const column = useSelector(getColumn)?.toSorted((a, b) =>
    b.updatedAt.localeCompare(a.updatedAt)
  );

  const isView = false;

  const onOpen = () => {
    setShowModal(true);
  };
  const onClose = () => {
    setShowModal(false);
  };

  const onOpenAddCard = e => {
    console.log('e', e);
    setColId(e);
    setShowModalAddCard(true);
  };
  const onCloseAddCard = () => {
    setShowModalAddCard(false);
  };

  const onOpenFilters = () => {
    setShowFilters(true);
  };
  const onCloseFilters = e => {
    console.log('priority', e);
    setShowFilters(false);
  };

  return boards.length ? (
    <Container
      style={{
        backgroundImage:
          isBoardActive && `url('images/background/${boardBg}d.jpg')`,
      }}
    >
      <ScreensHeader>
        {isBoardActive && <HeaderTxt>{boardName ?? ''}</HeaderTxt>}
        {isBoardActive && columns.length !== 0 && (
          <HeaderAddColumn onClick={() => setShowModal(true)}>
            <IconPlusFilters>
              <use href={`${icons}#icon-plus`}></use>
            </IconPlusFilters>
            <div>Add column</div>
          </HeaderAddColumn>
        )}
        {isBoardActive && (
          <HeaderFiltres onClick={onOpenFilters}>
            <IconFiltre>
              <use href={`${icons}#icon-filter`}></use>
            </IconFiltre>
            <div>Filtres</div>
            {showFilters && <ModalFilters onClose={onCloseFilters} />}
          </HeaderFiltres>
        )}
      </ScreensHeader>
      {isBoardActive && columns.length === 0 && (
        <AddColumn>
          <ButtonAdd
            type="button"
            // onClick={handleAddColumnClick}
            onClick={onOpen}
          >
            <IconPlus>
              <use href={`${icons}#icon-plus`}></use>
            </IconPlus>
            {column?.length === 0 ? 'Add column' : 'Add another column'}
          </ButtonAdd>
        </AddColumn>
      )}
      {/* Тут можуть бути ваші колонки з картками */}
      {isBoardActive && boardName && (
        <ColumnsContainer>
          {column.map(el => (
            <div key={el._id}>
              <Column title={el.title} columnId={el._id} />
              {el.tasks?.length === 0
                ? isView && <Card columnID={el._id} />
                : el.tasks
                    ?.filter(card => card.priority === filt)
                    .toSorted((a, b) => b.updatedAt.localeCompare(a.updatedAt))
                    .map(task => (
                      <Card key={task._id} task={task} columnID={el._id} />
                    ))}
              <ButtonMain
                type="button"
                onClick={() => onOpenAddCard(el._id)}
                value={el._id}
                name="columnId"
              >
                <BlackPlusButton />
                {el.tasks?.length === 0 ? 'Add card' : 'Add another card'}
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
        <ModalCard
          onClose={onCloseAddCard}
          title="Add card"
          btnName="Add"
          column={colId}
        />
      )}
    </Container>
  ) : (
    <TutorialContainer>
      <TutorialTitle>
        Before starting your project, it is essential{' '}
        <TutorialSelected>to create a board</TutorialSelected> to visualize and
        track all the necessary tasks and milestones. This board serves as a
        powerful tool to organize the workflow and ensure effective
        collaboration among team members.
      </TutorialTitle>
    </TutorialContainer>
  );
};

export default ScreensPage;
