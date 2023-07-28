import { useFormik } from 'formik';
import Modal from 'components/Modal/Modal';
import ModalTitle from 'components/ModalTitle/ModalTitle';

const ModalBoard = ({ onClose }) => {
  const formik = useFormik({
    initialValues: {
      cardTitle: '',
    },
    onSubmit: values => {
      console.log(JSON.stringify(values, null, 2));
    },
  });

  return (
    <Modal onClose={onClose}>
      <ModalTitle>New board</ModalTitle>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="cardTitle"></label>
        <input
          id="cardTitle"
          name="cardTitle"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.cardTitle}
        />
        <p>Icons</p>
        <p>Background</p>
        <button type="submit">Submit</button>
      </form>
    </Modal>
  );
};

export default ModalBoard;
