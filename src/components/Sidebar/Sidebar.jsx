import React from 'react';
import {
  SidebarContainer,
  Button,
  Logo,
  BoardList,
  BoardItem,
  H3Board,
  CreateBoard,
  HelpBar,
} from './SidebarStyles';

const Sidebar = () => {
  return (
    <SidebarContainer>
      <div>
        <Logo>Task Pro</Logo>
        <H3Board>My boards</H3Board>
        <CreateBoard>
          <div>
            Create a<br></br> new board
          </div>
          <div>
            <Button>+</Button>
          </div>
        </CreateBoard>

        {/* <button onClick={handleFilterClick}>Filters</button> */}

        <BoardList>
          <BoardItem>Board 1</BoardItem>
          {/* <BoardItem>Board 1</BoardItem> */}
        </BoardList>
      </div>

      <HelpBar>
        <div>
          <p>
            If you need help with TaskPro, check out our support resources or
            reach out to our customer support team.
          </p>
          <h3>Need help?</h3>
        </div>

        <div>Log out</div>
      </HelpBar>
    </SidebarContainer>
  );
};

export default Sidebar;
