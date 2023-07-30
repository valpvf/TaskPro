import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import Modal from 'components/Modal/Modal';
import ModalTitle from 'components/ModalTitle/ModalTitle';
import { TextareaStyled } from './ModalNeedHelp.styled';
import ButtonMain from 'shared/components/button/Button';
import InputField from 'shared/components/inputField/InputField';
import InputErrorMessage from 'shared/components/inputErrorMessage/InputErrorMessage';

const NeedHelpSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
  comment: Yup.string().required('Comment is required'),
});

const ModalNeedHelp = ({ onClose }) => {
  return (
    <Modal onClose={onClose}>
      <ModalTitle>Need help</ModalTitle>
      <Formik
        initialValues={{
          email: '',
          comment: '',
        }}
        validationSchema={NeedHelpSchema}
        onSubmit={(values, { resetForm }) => {
          console.log(values);
          resetForm();
        }}
      >
        {({ handleChange, values }) => (
          <Form>
            <label htmlFor="email"></label>
            <InputField
              text="Email address"
              id="email"
              name="email"
              type="email"
              onChange={handleChange}
              value={values.email}
            />
            <InputErrorMessage name="email" component={'p'} />

            <label htmlFor="comment"></label>
            <TextareaStyled
              as="textarea"
              id="comment"
              name="comment"
              type="text"
              placeholder="Comment"
              onChange={handleChange}
              // value={formik.values.comment}
            />
            <InputErrorMessage name="comment" component={'p'} />
            <ButtonMain type="submit">Send</ButtonMain>
          </Form>
        )}
      </Formik>
    </Modal>
  );
};

export default ModalNeedHelp;
