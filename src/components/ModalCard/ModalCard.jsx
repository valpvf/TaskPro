import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Modal from 'components/Modal/Modal';
import ModalTitle from 'components/ModalTitle/ModalTitle';
import ButtonMain from 'shared/components/button/Button';
import { BlackPlusButton } from 'shared/components/plusButton/PlusButtons';
import InputField from 'shared/components/inputField/InputField';
import {
  TextareaStyled,
  SubtitleStyled,
  DateInputStyled,
} from './ModalCard.styled';

const TitleSchema = Yup.object().shape({
  cardTitle: Yup.string().required('required'),
  cardDescr: Yup.string().required('required'),
});

const ModalCard = ({ onClose }) => {
  return (
    <Modal onClose={onClose}>
      <ModalTitle>Add card</ModalTitle>

      <Formik
        initialValues={{
          cardTitle: '',
          cardDescr: '',
        }}
        validationSchema={TitleSchema}
        onSubmit={(values, { resetForm }) => {
          console.log(values);
          resetForm();
        }}
      >
        {({ handleChange }) => (
          <Form>
            <label htmlFor="cardTitle"></label>
            <InputField
              as={Field}
              id="cardTitle"
              name="cardTitle"
              type="text"
              onChange={handleChange}
              //value={formik.values.cardTitle}
            />
            <ErrorMessage name="cardTitle" component={'p'} />
            <label htmlFor="cardDescr"></label>
            <TextareaStyled
              as="textarea"
              text="Description"
              id="cardDescr"
              name="cardDescr"
              type="text"
              onChange={handleChange}
              // value={formik.values.cardDescr}
            />
            <ErrorMessage name="cardDescr" component={'p'} />
            <SubtitleStyled htmlFor="date">Deadline</SubtitleStyled>
            <DateInputStyled id="date" name="date" type="date" />
            <ButtonMain type="submit">
              <BlackPlusButton />
              Add
            </ButtonMain>
          </Form>
        )}
      </Formik>
    </Modal>
  );
};

export default ModalCard;
