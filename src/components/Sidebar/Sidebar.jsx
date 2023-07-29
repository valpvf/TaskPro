import { useState } from 'react';
import ModalBoard from 'components/ModalBoard/ModalBoard';
import ModalNeedHelp from 'components/ModalNeedHelp/ModalNeedHelp';
import {
  SidebarContainer,
  Logo,
  BoardList,
  BoardItem,
  H3Board,
  CreateBoard,
  HelpBar,
  IconLogo,
  IconPlus,
  ProgName,
  IconProgect,
  IconEdit,
  IconEditCustom,
  BorderRight,
  HelpImg,
  HelpTxt,
  HelpBtn,
  IconHelp,
  LogOut,
  IconLogOut,
  HelpTextContainer,
} from './SidebarStyled';
import icons from '../../images/sprite.svg';
import plant from '../../images/plant_min.png';

const Sidebar = () => {
  const [showModal, setShowModal] = useState(false);
  const [showHelpText, setShowHelpText] = useState(false);
  const [showModalBoard, setShowModalBoard] = useState(false);
  const [showEditBoard, setShowEditBoard] = useState(false);
  const [boardList, setBoardList] = useState([
    { id: 1, name: 'Board 1', icon: 'icon-project' },
    { id: 2, name: 'Board 2', icon: 'icon-project' },
  ]);
  const [editingBoardId, setEditingBoardId] = useState(null);

  const onMouseEnterHelpBtn = () => {
    setShowHelpText(true);
  };
  const onMouseLeaveHelpBtn = () => {
    setShowHelpText(false);
  };
  const onOpen = () => {
    setShowModal(true);
  };
  const onClose = () => {
    setShowModal(false);
  };
  const onOpenBoard = () => {
    setShowModalBoard(true);
  };
  const onCloseBoard = () => {
    setShowModalBoard(false);
  };
  const onOpenEditBoard = boardId => {
    setEditingBoardId(boardId);
    setShowEditBoard(true);
  };
  const onCloseEditBoard = () => {
    setShowEditBoard(false);
  };

  const handleCreateBoard = boardData => {
    // Унікальний ідентифікатор для нової дошки
    const newId = Date.now();
    setBoardList(prevBoardList => [
      ...prevBoardList,
      { id: newId, name: boardData.boardTitle, icon: 'icon-project' },
    ]);
    setShowModalBoard(false);
  };

  const handleEditBoardName = (boardId, newName) => {
    setBoardList(prevBoardList =>
      prevBoardList.map(board =>
        board.id === boardId ? { ...board, name: newName } : board
      )
    );
    setEditingBoardId(null);
  };

  const handleDeleteBoard = boardId => {
    setBoardList(prevBoardList =>
      prevBoardList.filter(board => board.id !== boardId)
    );
  };

  return (
    <SidebarContainer>
      <div>
        <Logo>
          <IconLogo>
            <use href={`${icons}#icon-logo`}></use>
          </IconLogo>
          <div>Task Pro</div>
        </Logo>
        <H3Board>My boards</H3Board>
        <CreateBoard>
          <div>
            Create a<br></br> new board
          </div>
          <div>
            <IconPlus onClick={onOpenBoard}>
              <use href={`${icons}#icon-plus`}></use>
            </IconPlus>
            {showModalBoard && (
              <ModalBoard
                onClose={onCloseBoard}
                onCreateBoard={handleCreateBoard}
                title="New board"
                btnName="Create"
              />
            )}
            {showEditBoard && (
              <ModalBoard
                onClose={onCloseEditBoard}
                onCreateBoard={handleCreateBoard}
                onEditBoard={handleEditBoardName}
                title={editingBoardId ? 'Edit board' : 'New board'}
                btnName={editingBoardId ? 'Edit' : 'Create'}
                boardName={
                  editingBoardId
                    ? boardList.find(board => board.id === editingBoardId).name
                    : ''
                }
                editingBoardId={editingBoardId}
              />
            )}
          </div>
        </CreateBoard>

        <BoardList>
          {boardList.map(board => (
            <BoardItem key={board.id}>
              <ProgName>
                <IconProgect>
                  <use href={`${icons}#${board.icon}`}></use>
                </IconProgect>
                <div>{board.name}</div>
              </ProgName>
              <IconEditCustom>
                <IconEdit onClick={() => onOpenEditBoard(board.id)}>
                  <use href={`${icons}#icon-pencil`}></use>
                </IconEdit>
                <IconEdit onClick={() => handleDeleteBoard(board.id)}>
                  <use href={`${icons}#icon-trash`}></use>
                </IconEdit>
              </IconEditCustom>
              <BorderRight />
            </BoardItem>
          ))}
        </BoardList>
      </div>

      <div>
        <div>
          <div
            onMouseEnter={onMouseEnterHelpBtn}
            onMouseLeave={onMouseLeaveHelpBtn}
          >
            <HelpBar>
              {showHelpText && (
                <HelpTextContainer>
                  <HelpImg src={plant} alt="Help" />
                  <HelpTxt>
                    If you need help with{' '}
                    <span style={{ color: '#bedbb0' }}>TaskPro</span>, check out
                    our support resources or reach out to our customer support
                    team.
                  </HelpTxt>
                </HelpTextContainer>
              )}
            </HelpBar>

            <HelpBtn onClick={onOpen}>
              <IconHelp>
                <use href={`${icons}#icon-help`}></use>
              </IconHelp>
              Need help?
            </HelpBtn>

            {showModal && <ModalNeedHelp onClose={onClose} />}
          </div>
        </div>

        <LogOut>
          <IconLogOut>
            <use href={`${icons}#icon-logout`}></use>
          </IconLogOut>
          Log out
        </LogOut>
      </div>
    </SidebarContainer>
  );
};

export default Sidebar;
