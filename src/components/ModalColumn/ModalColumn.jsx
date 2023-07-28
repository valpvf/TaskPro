import { useFormik } from 'formik';
import Modal from 'components/Modal/Modal';
import ModalTitle from 'components/ModalTitle/ModalTitle';

const ModalColumn = ({ onClose }) => {
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
      <ModalTitle>Add column</ModalTitle>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="cardTitle"></label>
        <input
          id="cardTitle"
          name="cardTitle"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.cardTitle}
        />
        <button type="submit">Submit</button>
      </form>
    </Modal>
  );
};

export default ModalColumn;
