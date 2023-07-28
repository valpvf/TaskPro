import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Modal from 'components/Modal/Modal';
import ModalTitle from 'components/ModalTitle/ModalTitle';
import ButtonMain from 'shared/components/button/Button';
import { BlackPlusButton } from 'shared/components/plusButton/PlusButtons';
import InputField from 'shared/components/inputField/InputField';

const TitleSchema = Yup.object().shape({
  boardTitle: Yup.string().required('required'),
});

const ModalBoard = ({ onClose }) => {
  return (
    <Modal onClose={onClose}>
      <ModalTitle>New board</ModalTitle>

      <Formik
        initialValues={{
          boardTitle: '',
        }}
        validationSchema={TitleSchema}
        onSubmit={(values, { resetForm }) => {
          console.log(values);
          resetForm();
        }}
      >
        {({ handleChange }) => (
          <Form>
            <label htmlFor="boardTitle"></label>
            <InputField
              as={Field}
              text="Title"
              id="boardTitle"
              name="boardTitle"
              type="text"
              onChange={handleChange}
              //value={formik.values.boardTitle}
            />
            <ErrorMessage name="boardTitle" component={'p'} />
            <p>Icons</p>
            <p>Background</p>
            <ButtonMain type="submit">
              <BlackPlusButton />
              Create
            </ButtonMain>
          </Form>
        )}
      </Formik>
    </Modal>
  );
};

export default ModalBoard;
