import { useState, useRef } from 'react';

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
  updateBoardActive,
} from 'redux/auth/authOperations';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getBoardSelector } from 'redux/auth/authSelectors';
import { getBoardId } from 'redux/task/taskOperations';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Sidebar = () => {
  const [showModal, setShowModal] = useState(false);
  const [showHelpText, setShowHelpText] = useState(false);
  const [showModalBoard, setShowModalBoard] = useState(false);
  const [showEditBoard, setShowEditBoard] = useState(false);
  const [editingBoardId, setEditingBoardId] = useState(null);
  const [isHelpBarHovered, setIsHelpBarHovered] = useState(false);
  const boardListRef = useRef(null);

  const dispatch = useDispatch();
  const getBoard = useSelector(getBoardSelector);

  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
  };

  const handleSetActiveBoard = boardId => {
    dispatch(updateBoardActive({ boardId, isActive: true }));
  };

  const openModal = (setter, data) => () => {
    setter(true);
    if (data) {
      setEditingBoardId(data._id);
    }
  };

  const closeModal = setter => () => {
    setter(false);
    setEditingBoardId(null);
  };

  const handleCreateBoard = (boardData, isEdit) => {
    const boardMainData = {
      title: boardData.values.boardTitle,
      background: boardData.background,
      icon: boardData.icon,
    };

    const operation = isEdit ? editBoard : createBoard;

    dispatch(
      operation(
        isEdit ? { id: editingBoardId, data: boardMainData } : boardMainData
      )
    )
      .then(response => {
        if (boardListRef.current && isEdit === false) {
          boardListRef.current.scrollTop = boardListRef.current.scrollHeight;
        }
        handleSetActiveBoard(response.payload._id);
        closeModal(setShowEditBoard)();
      })
      .catch(error => {
        console.error(
          isEdit
            ? 'Помилка при редагуванні борду:'
            : 'Помилка при створенні борду:',
          error
        );
      });
  };

  const handleDeleteBoard = boardId => {
    dispatch(deleteBoard(boardId)).catch(error => {
      console.error('Помилка при видаленні борду:', error);
    });
  };

  const handleBoardInfo = boardId => {
    dispatch(getBoardId(boardId));
  };

  const onMouseEnterHelpBtn = () => {
    setShowHelpText(true);
  };

  const onMouseLeaveHelpBtn = () => {
    setShowHelpText(false);
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
            <IconPlus onClick={openModal(setShowModalBoard)}>
              <use href={`${icons}#icon-plus`}></use>
            </IconPlus>
            {showModalBoard && (
              <ModalBoard
                onClose={() => closeModal(setShowModalBoard)()}
                onCreateBoard={boardData => {
                  handleCreateBoard(boardData, false);
                }}
                title="New board"
                btnName="Create"
              />
            )}
            {showEditBoard && (
              <ModalBoard
                onClose={() => closeModal(setShowEditBoard)()}
                // onClose={() => {
                //   closeModal(setShowEditBoard)();
                //   handleSetActiveBoard(
                //     getBoard.find(board => board.isActive === true)._id
                //   );
                // }}
                onEditBoard={boardData => {
                  handleCreateBoard(boardData, true);
                }}
                title={editingBoardId ? 'Edit board' : 'New board'}
                btnName={editingBoardId ? 'Edit' : 'Create'}
                boardName={
                  editingBoardId
                    ? getBoard.find(board => board.isActive === true).title
                    : ''
                }
                currentBoard={getBoard.find(board => board.isActive === true)}
              />
            )}
          </div>
        </CreateBoard>

        <BoardList ref={boardListRef}>
          {getBoard
            .filter(board => board !== null)
            .map(board => (
              <BoardItem
                key={board._id}
                onClick={() => {
                  handleBoardInfo(board._id);
                  handleSetActiveBoard(board._id);
                }}
                isActiveProps={board.isActive === true}
              >
                <ProgName>
                  <IconProgect>
                    <use href={`${icons}#${board.icon}`}></use>
                  </IconProgect>
                  <div>{board.title}</div>
                </ProgName>
                <IconEditCustom>
                  <IconEdit onClick={openModal(setShowEditBoard, board)}>
                    <use href={`${icons}#icon-pencil`}></use>
                  </IconEdit>
                  <IconEdit onClick={() => handleDeleteBoard(board._id)}>
                    <use href={`${icons}#icon-trash`}></use>
                  </IconEdit>
                </IconEditCustom>
                <BorderRight isActive={board.isActive === true} />
              </BoardItem>
            ))}
        </BoardList>
      </div>

      <div>
        <div
          onMouseEnter={() => {
            setIsHelpBarHovered(true);
            onMouseEnterHelpBtn();
          }}
          onMouseLeave={() => {
            setIsHelpBarHovered(false);
            onMouseLeaveHelpBtn();
          }}
        >
          <HelpBar isHelpBarHovered={isHelpBarHovered}>
            {showHelpText && (
              <HelpTextContainer isHelpBarHovered={isHelpBarHovered}>
                <HelpTxt>
                  If you need help with{' '}
                  <span style={{ color: '#bedbb0' }}>TaskPro</span>, check out
                  our support resources or reach out to our customer support
                  team.
                </HelpTxt>
              </HelpTextContainer>
            )}
          </HelpBar>

          <HelpBtn
            onClick={openModal(setShowModal)}
            isHovered={isHelpBarHovered}
          >
            <IconHelp>
              <use href={`${icons}#icon-help`}></use>
            </IconHelp>
            Need help?
            <HelpImg src={plant} alt="Help" />
          </HelpBtn>

          {showModal && <ModalNeedHelp onClose={closeModal(setShowModal)} />}
        </div>

        <LogOut onClick={handleLogout}>
          <IconLogOut>
            <use href={`${icons}#icon-logout`}></use>
          </IconLogOut>
          Log out
        </LogOut>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </SidebarContainer>
  );
};

export default Sidebar;
