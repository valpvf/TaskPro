import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Modal from 'components/Modal/Modal';
import ModalTitle from 'components/ModalTitle/ModalTitle';
import { TextareaStyled } from './ModalNeedHelp.styled';
import ButtonMain from 'shared/components/button/Button';
import InputField from 'shared/components/inputField/InputField';

const NeedHelpSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('required'),
  comment: Yup.string().required('required'),
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
            <ErrorMessage name="email" component={'p'} />

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
            <ErrorMessage name="comment" component={'p'} />
            <ButtonMain type="submit">Send</ButtonMain>
          </Form>
        )}
      </Formik>
    </Modal>
  );
};

export default ModalNeedHelp;
