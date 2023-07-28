import Modal from 'components/Modal/Modal';
import ModalTitle from 'components/ModalTitle/ModalTitle';
import ButtonMain from 'shared/components/button/Button';

const ModalEditProfile = () => {
  return (
    <Modal>
      <ModalTitle>Edit profile</ModalTitle>
      <form>
        <ButtonMain type="submit">Send</ButtonMain>
      </form>
    </Modal>
  );
};

export default ModalEditProfile;
