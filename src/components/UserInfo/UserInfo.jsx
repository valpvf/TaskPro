import icons from '../../images/sprite.svg';
import { IconAvatar, Container, IconPlus, AvasarSetin } from './UserInfoStyled';

const UserInfo = () => {
  return (
    <Container>
      <div>Name</div>
      <AvasarSetin>
        <IconAvatar>
          <use href={`${icons}#icon-user`}></use>
        </IconAvatar>
        <div>
          <IconPlus>
            <use href={`${icons}#icon-plus-01`}></use>
          </IconPlus>
        </div>
      </AvasarSetin>
    </Container>
  );
};

export default UserInfo;
