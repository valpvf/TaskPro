import Modal from 'components/Modal/Modal';
import ModalTitle from 'components/ModalTitle/ModalTitle';

const ModalEditProfile = ({ onClose }) => {
  return (
    <Modal onClose={onClose}>
      <ModalTitle>Edit profile</ModalTitle>
      <form></form>
    </Modal>
  );
};

export default ModalEditProfile;
