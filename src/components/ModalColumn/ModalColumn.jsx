import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import Modal from 'components/Modal/Modal';
import ModalTitle from 'components/ModalTitle/ModalTitle';
import ButtonMain from 'shared/components/button/Button';
import { BlackPlusButton } from 'shared/components/plusButton/PlusButtons';
import InputField from 'shared/components/inputField/InputField';
import InputErrorMessage from 'shared/components/inputErrorMessage/InputErrorMessage';
import { useDispatch, useSelector } from 'react-redux';
import { addColumn } from 'redux/task/taskOperations';
import { getBoardId } from 'redux/task/taskSelectors';

const TitleSchema = Yup.object().shape({
  title: Yup.string().required('Title is required'),
});

const ModalColumn = ({ onClose, title, btnName, columnTitle = '' }) => {
  const dispatch = useDispatch();

  const a = useSelector(getBoardId);
  console.log(a);

  return (
    <Modal onClose={onClose}>
      <ModalTitle>{title}</ModalTitle>

      <Formik
        initialValues={{
          title: columnTitle,
        }}
        validationSchema={TitleSchema}
        onSubmit={(values, { resetForm }) => {
          console.log('col', values);
          dispatch(addColumn({ ...values, board: a }));
          resetForm();
          onClose();
        }}
      >
        {({ handleChange, values }) => (
          <Form>
            <label htmlFor="columnTitle"></label>
            <InputField
              as={Field}
              text="Title"
              id="columnTitle"
              name="title"
              type="text"
              onChange={handleChange('title')}
              value={values.title || ''}
            />
            <InputErrorMessage name="columnTitle" component={'p'} />
            <ButtonMain>
              <BlackPlusButton />
              {btnName}
            </ButtonMain>
          </Form>
        )}
      </Formik>
    </Modal>
  );
};

export default ModalColumn;
