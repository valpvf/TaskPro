import { useFormik } from 'formik';
import Modal from 'components/Modal/Modal';
import ModalTitle from 'components/ModalTitle/ModalTitle';
import { InputStyled, TextareaStyled } from './ModalNeedHelp.styled';

const ModalNeedHelp = ({ onClose }) => {
  const formik = useFormik({
    initialValues: {
      email: '',
      comment: '',
    },
    onSubmit: values => {
      console.log(JSON.stringify(values, null, 2));
    },
  });

  return (
    <Modal onClose={onClose}>
      <ModalTitle>Need help</ModalTitle>
      <form>
        <label htmlFor="email"></label>
        <InputStyled
          id="email"
          name="email"
          type="email"
          placeholder="Email address"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        <label htmlFor="comment"></label>
        <TextareaStyled
          id="comment"
          name="comment"
          type="text"
          placeholder="Comment"
          onChange={formik.handleChange}
          value={formik.values.lastName}
        />
        <button type="submit">Submit</button>
      </form>
    </Modal>
  );
};

export default ModalNeedHelp;
