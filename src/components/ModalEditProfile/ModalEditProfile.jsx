import EditUser from 'components/EditUser/EditUser';
import Modal from 'components/Modal/Modal';
import ModalTitle from 'components/ModalTitle/ModalTitle';

const ModalEditProfile = ({ onClose }) => {
  return (
    <Modal onClose={onClose}>
      <ModalTitle>Edit profile</ModalTitle>
      <EditUser onClose={onClose}/>
    </Modal>
  );
};

export default ModalEditProfile;
