import { Formik, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Modal from 'components/Modal/Modal';
import ModalTitle from 'components/ModalTitle/ModalTitle';
import ButtonMain from 'shared/components/button/Button';
import { BlackPlusButton } from 'shared/components/plusButton/PlusButtons';
import InputField from 'shared/components/inputField/InputField';
import RadioColored from 'shared/components/radioButtons/RadioColored';
import {
  TextareaStyled,
  SubtitleStyled,
  LabelStyled,
  DateInputStyled,
} from './ModalCard.styled';

const TitleSchema = Yup.object().shape({
  cardTitle: Yup.string().required('required'),
  cardDescr: Yup.string().required('required'),
});

const ModalCard = ({ onClose }) => {
  return (
    <Modal onClose={onClose}>
      <ModalTitle>Edit card</ModalTitle>

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
        {({ handleChange, values }) => (
          <Form>
            <label htmlFor="cardTitle"></label>
            <InputField
              text="Title"
              id="cardTitle"
              name="cardTitle"
              type="text"
              onChange={handleChange}
              value={values.cardTitle}
            />
            <ErrorMessage name="cardTitle" component={'p'} />
            <label htmlFor="cardDescr"></label>
            <TextareaStyled
              as="textarea"
              placeholder="Description"
              id="cardDescr"
              name="cardDescr"
              type="text"
              onChange={handleChange}
              // value={formik.values.cardDescr}
            />
            <ErrorMessage name="cardDescr" component={'p'} />
            <SubtitleStyled>Label color</SubtitleStyled>
            <RadioColored />
            <LabelStyled htmlFor="date">Deadline</LabelStyled>
            <DateInputStyled id="date" name="date" type="date" />
            <ButtonMain type="submit">
              <BlackPlusButton />
              Edit
            </ButtonMain>
          </Form>
        )}
      </Formik>
    </Modal>
  );
};

export default ModalCard;
