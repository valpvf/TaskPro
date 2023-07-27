import { useFormik } from 'formik';
import Modal from 'components/Modal/Modal';
import ModalTitle from 'components/ModalTitle/ModalTitle';
import {
  TextareaStyled,
  SubtitleStyled,
  DateInputStyled,
} from './ModalCard.styled';

const ModalCard = ({ onClose }) => {
  const formik = useFormik({
    initialValues: {
      cardTitle: '',
      cardDescr: '',
    },
    onSubmit: values => {
      console.log(JSON.stringify(values, null, 2));
    },
  });

  return (
    <Modal onClose={onClose}>
      <ModalTitle>Add card</ModalTitle>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="cardTitle"></label>
        <input
          id="cardTitle"
          name="cardTitle"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.firstName}
        />
        <label htmlFor="cardDescr"></label>
        <TextareaStyled
          id="cardDescr"
          name="cardDescr"
          type="text"
          placeholder="Description"
          onChange={formik.handleChange}
          value={formik.values.lastName}
        />
        <SubtitleStyled htmlFor="date">Deadline</SubtitleStyled>
        <DateInputStyled id="date" name="date" type="date" />
        <button type="submit">Submit</button>
      </form>
    </Modal>
  );
};

export default ModalCard;
