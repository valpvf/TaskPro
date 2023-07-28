import Modal from 'components/Modal/Modal';
import ModalTitle from 'components/ModalTitle/ModalTitle';

const ModalFilters = ({ onClose }) => {
  return (
    <Modal onClose={onClose}>
      <ModalTitle>Filters</ModalTitle>
      <form></form>
    </Modal>
  );
};

export default ModalFilters;
