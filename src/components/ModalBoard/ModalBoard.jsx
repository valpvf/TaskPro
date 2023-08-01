import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import Modal from 'components/Modal/Modal';
import ModalTitle from 'components/ModalTitle/ModalTitle';
import ButtonMain from 'shared/components/button/Button';
import { BlackPlusButton } from 'shared/components/plusButton/PlusButtons';
import InputField from 'shared/components/inputField/InputField';
import RadioImages from 'shared/components/radioButtons/RadioImages';
import RadioIcons from 'shared/components/radioButtons/RadioIcons';
import { SubtitleStyled } from './ModalBoard.styled';
import InputErrorMessage from 'shared/components/inputErrorMessage/InputErrorMessage';
// import { useState } from 'react';

const TitleSchema = Yup.object().shape({
  boardTitle: Yup.string().required('Title is required'),
});

const ModalBoard = ({
  onClose,
  onCreateBoard,
  onEditBoard,
  title,
  btnName,
  boardName,
  editingBoardId,
}) => {
  // const [backgroundName, setBackgroundName] = useState('');
  // const [iconName, setIconName] = useState('');

  // console.log(backgroundName);
  // const dispatch = useDispatch();

  // const [backgroundValue, setBackgroundValue] = useState('01d');

  // const handleButtonClick = () => {
  //   dispatch(changeBackground({ background: backgroundValue }));
  //   persistor.flush();
  // };

  return (
    <Modal onClose={onClose}>
      <ModalTitle>{title}</ModalTitle>

      <Formik
        initialValues={{
          boardTitle: boardName,
          // image: 'img/01d.jpg',
          // icon: iconName,
          // background: backgroundName,
        }}
        validationSchema={TitleSchema}
        onSubmit={(values, { resetForm }) => {
          if (btnName === 'Create') {
            onCreateBoard(values);
          } else if (btnName === 'Edit') {
            onEditBoard(values);
          }
          // console.log(values);
          // handleButtonClick();
          resetForm();
        }}
      >
        {({ handleChange, values }) => (
          <Form>
            <label htmlFor="boardTitle"></label>
            <InputField
              text="Title"
              id="boardTitle"
              name="boardTitle"
              type="text"
              onChange={handleChange}
              value={values.boardTitle || ''}
            />
            <InputErrorMessage name="boardTitle" component={'p'} />
            <SubtitleStyled>Icons</SubtitleStyled>
            <RadioIcons
            // onChangeIcon={setIconName}
            />
            <SubtitleStyled>Background</SubtitleStyled>

            <RadioImages
            // onChangeImage={setBackgroundName}
            />

            <ButtonMain type="submit">
              <BlackPlusButton />
              {btnName}
            </ButtonMain>
          </Form>
        )}
      </Formik>
    </Modal>
  );
};

export default ModalBoard;
