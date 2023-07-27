import React from 'react';
import UserInfo from 'components/UserInfo/UserInfo';
import { Container, TheamUser } from './Header.styled';

const Header = () => {
  return (
    <Container>
      <div>BM</div>
      <TheamUser>
        <select>
          <option value="light">Light</option>
          <option value="violet">Violet</option>
          <option value="dark">Dark</option>
        </select>
        <UserInfo />
      </TheamUser>
    </Container>
  );
};

export default Header;
