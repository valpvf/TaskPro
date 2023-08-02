import { useState } from 'react';
import icons from '../../images/sprite.svg';
import {
  IconAvatar,
  Container,
  IconPlus,
  AvasarSetin,
  AvatarImg,
} from './UserInfoStyled';
import ModalEditProfile from 'components/ModalEditProfile/ModalEditProfile';
import { useSelector } from 'react-redux';
import { avatarURL, setName } from 'redux/auth/authSelectors';

const UserInfo = () => {
  const name = useSelector(setName);
  const avatar = useSelector(avatarURL);
  const [showModal, setShowModal] = useState(false);

  const onOpen = () => {
    setShowModal(true);
  };
  const onClose = () => {
    setShowModal(false);
  };
  return (
    <Container>
      <div>{name ? name : 'User'}</div>
      <AvasarSetin onClick={onOpen}>
        {avatar ? (
          <AvatarImg src={avatar} alt="user avatar" />
        ) : (
          <IconAvatar>
            <use href={`${icons}#icon-user`}></use>
          </IconAvatar>
        )}
        <div>
          <IconPlus>
            <use href={`${icons}#icon-plus-01`}></use>
          </IconPlus>
        </div>
      </AvasarSetin>
      {showModal && <ModalEditProfile onClose={onClose} />}
    </Container>
  );
};

export default UserInfo;
