import { useState } from 'react';
import icons from '../../images/sprite.svg';
import { IconAvatar, Container, IconPlus, AvasarSetin } from './UserInfoStyled';
import ModalEditProfile from 'components/ModalEditProfile/ModalEditProfile';

const UserInfo = () => {
  const [showModal, setShowModal] = useState(false);

  const onOpen = () => {
    setShowModal(true);
  };
  const onClose = () => {
    setShowModal(false);
  };
  return (
    <Container>
      <div>Name</div>
      <AvasarSetin onClick={onOpen}>
        <IconAvatar>
          <use href={`${icons}#icon-user`}></use>
        </IconAvatar>
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
