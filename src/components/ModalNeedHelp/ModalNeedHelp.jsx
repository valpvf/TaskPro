import { useSelector } from 'react-redux';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getUserEmail } from 'redux/auth/authSelectors';
import Modal from 'components/Modal/Modal';
import ModalTitle from 'components/ModalTitle/ModalTitle';
import { TextareaStyled, InputField } from './ModalNeedHelp.styled';
import ButtonMain from 'shared/components/button/Button';
import InputErrorMessage from 'shared/components/inputErrorMessage/InputErrorMessage';
import fetchHelpApi from 'shared/utilities/fetchHelp';

const NeedHelpSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
  comment: Yup.string().required('Comment is required'),
});

const ModalNeedHelp = ({ onClose }) => {
  const userEmail = useSelector(getUserEmail).toLowerCase();
  return (
    <Modal onClose={onClose} custom={true}>
      <ToastContainer
        position="top-center"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <ModalTitle>Need help</ModalTitle>
      <Formik
        initialValues={{
          email: `${userEmail}`,
          comment: '',
        }}
        validationSchema={NeedHelpSchema}
        onSubmit={(values, { resetForm }) => {
          fetchHelpApi(values);
          resetForm();
          setTimeout(() => {
            onClose();
          }, 3000);
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
