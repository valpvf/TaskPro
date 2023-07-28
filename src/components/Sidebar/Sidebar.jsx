import {
  SidebarContainer,
  Button,
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
} from './SidebarStyled';
import icons from '../../images/sprite.svg';
import plant from '../../images/plant_min.png';

const Sidebar = () => {
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
            <IconPlus>
              <use href={`${icons}#icon-plus-01`}></use>
            </IconPlus>
          </div>
        </CreateBoard>

        {/* <button onClick={handleFilterClick}>Filters</button> */}

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

          {/* <BoardItem>Board 1</BoardItem> */}
        </BoardList>
      </div>

      <div>
        <HelpBar>
          <div>
            <HelpImg src={plant} alt="Help" />
            <HelpTxt>
              If you need help with{' '}
              <span style={{ color: '#bedbb0' }}>TaskPro</span>, check out our
              support resources or reach out to our customer support team.
            </HelpTxt>
            <HelpBtn>
              <IconHelp>
                <use href={`${icons}#icon-help`}></use>
              </IconHelp>
              Need help?
            </HelpBtn>
          </div>
        </HelpBar>

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
