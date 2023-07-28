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
          <div onClick={onOpen}>
            <IconPlus>
              <use href={`${icons}#icon-plus`}></use>
            </IconPlus>
            {showModal && <ModalBoard onClose={onClose} />}
          </div>
        </CreateBoard>
        <BoardList>
          <BoardItem>
            <ProgName>
              <IconProgect>
                <use href={`${icons}#icon-project`}></use>
              </IconProgect>
              <div>Name</div>
            </ProgName>
            <IconEditCustom>
              <IconEdit>
                <use href={`${icons}#icon-pencil`}></use>
              </IconEdit>
              <IconEdit>
                <use href={`${icons}#icon-trash`}></use>
              </IconEdit>
            </IconEditCustom>
            <BorderRight />
          </BoardItem>
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
