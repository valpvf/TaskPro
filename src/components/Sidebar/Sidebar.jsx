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
import { useDispatch } from 'react-redux';
import {
  createBoard,
  deleteBoard,
  editBoard,
  logout,
} from 'redux/auth/authOperations';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getBoardSelector } from 'redux/auth/authSelectors';

const Sidebar = () => {
  const [showModal, setShowModal] = useState(false);
  const [showHelpText, setShowHelpText] = useState(false);
  const [showModalBoard, setShowModalBoard] = useState(false);
  const [showEditBoard, setShowEditBoard] = useState(false);
  const [editingBoardId, setEditingBoardId] = useState(null);

  const dispatch = useDispatch();
  const getBoard = useSelector(getBoardSelector);

  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
  };

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
  const onOpenEditBoard = board => {
    setEditingBoardId(board._id);
    setShowEditBoard(true);
  };
  const onCloseEditBoard = () => {
    setShowEditBoard(false);
  };

  const handleCreateBoard = boardData => {
    const boardMainData = {
      title: boardData.values.boardTitle,
      background: boardData.background,
      icon: boardData.icon,
    };
    dispatch(createBoard(boardMainData))
      .then(() => {
        onCloseBoard();
      })
      .catch(error => {
        console.error('Помилка при створенні борду:', error);
      });
  };

  const handleDeleteBoard = boardId => {
    dispatch(deleteBoard(boardId)).catch(error => {
      console.error('Помилка при видаленні борду:', error);
    });
  };

  const handleEditBoardName = boardData => {
    dispatch(
      editBoard({
        id: editingBoardId,
        data: {
          title: boardData.values.boardTitle,
          background: boardData.background,
          icon: boardData.icon,
        },
      })
    )
      .then(() => {
        onCloseEditBoard();
      })
      .catch(error => {
        console.error('Помилка при редагуванні борду:', error);
      });

    setEditingBoardId(null);
  };

  const handleBoardInfo = boardId => {
    console.log('Clicked board ID:', boardId);
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
                // onCreateBoard={handleCreateBoard}
                onEditBoard={handleEditBoardName}
                title={editingBoardId ? 'Edit board' : 'New board'}
                btnName={editingBoardId ? 'Edit' : 'Create'}
                boardName={
                  editingBoardId
                    ? getBoard.find(board => board._id === editingBoardId).title
                    : ''
                }
                editingBoardId={editingBoardId}
              />
            )}
          </div>
        </CreateBoard>

        <BoardList>
          {getBoard
            .filter(board => board !== null)
            .map(board => (
              <BoardItem
                key={board._id}
                onClick={() => handleBoardInfo(board._id)}
              >
                <ProgName>
                  <IconProgect>
                    <use href={`${icons}#${board.icon}`}></use>
                  </IconProgect>
                  <div>{board.title}</div>
                </ProgName>
                <IconEditCustom>
                  <IconEdit onClick={() => onOpenEditBoard(board)}>
                    <use href={`${icons}#icon-pencil`}></use>
                  </IconEdit>
                  <IconEdit onClick={() => handleDeleteBoard(board._id)}>
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

        <LogOut onClick={handleLogout}>
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
