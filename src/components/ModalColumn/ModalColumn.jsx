import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Modal from 'components/Modal/Modal';
import ModalTitle from 'components/ModalTitle/ModalTitle';
import ButtonMain from 'shared/components/button/Button';
import { BlackPlusButton } from 'shared/components/plusButton/PlusButtons';
import InputField from 'shared/components/inputField/InputField';

const TitleSchema = Yup.object().shape({
  columnTitle: Yup.string().required('required'),
});

const ModalColumn = ({ onClose }) => {
  return (
    <Modal onClose={onClose}>
      <ModalTitle>Add column</ModalTitle>

      <Formik
        initialValues={{
          columnTitle: '',
        }}
        validationSchema={TitleSchema}
        onSubmit={(values, { resetForm }) => {
          console.log(values);
          resetForm();
        }}
      >
        {({ handleChange, values }) => (
          <Form>
            <label htmlFor="columnTitle"></label>
            <InputField
              as={Field}
              text="Title"
              id="columnTitle"
              name="columnTitle"
              type="text"
              onChange={handleChange}
              value={values.columnTitle}
            />
            <ErrorMessage name="columnTitle" component={'p'} />
            <ButtonMain>
              <BlackPlusButton />
              Add
            </ButtonMain>
          </Form>
        )}
      </Formik>
    </Modal>
  );
};

export default ModalColumn;
