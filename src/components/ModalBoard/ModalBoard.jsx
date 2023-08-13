import { useState } from 'react';
import { useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import Modal from 'components/Modal/Modal';
import ModalTitle from 'components/ModalTitle/ModalTitle';
import ButtonMain from 'shared/components/button/Button';
import { BlackPlusButton } from 'shared/components/plusButton/PlusButtons';
import InputField from 'shared/components/inputField/InputField';
import RadioImages from 'shared/components/radioButtons/RadioImages';
import RadioIcons from 'shared/components/radioButtons/RadioIcons';
import InputErrorMessage from 'shared/components/inputErrorMessage/InputErrorMessage';
import { getBoardSelector } from 'redux/auth/authSelectors';
import 'react-toastify/dist/ReactToastify.css';
import { SubtitleStyled, Duplicate } from './ModalBoard.styled';

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
  currentBoard,
}) => {
  const [backgroundName, setBackgroundName] = useState('00');
  const [iconName, setIconName] = useState('icon-project');
  const [isDuplicate, setIsDuplicate] = useState(false);
  const boards = useSelector(getBoardSelector);

  let updatedBackground;
  let updatedIcon;
  if (btnName === 'Edit') {
    updatedBackground =
      backgroundName !== '00' ? backgroundName : currentBoard.background;

    updatedIcon = iconName !== 'icon-project' ? iconName : currentBoard.icon;
  }

  return (
    <Modal onClose={onClose}>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <ModalTitle>{title}</ModalTitle>

      <Formik
        initialValues={{
          boardTitle: boardName,
        }}
        validationSchema={TitleSchema}
        onSubmit={(values, { resetForm }) => {
          if (btnName === 'Create') {
            if (boards.some(el => el.title === values.boardTitle)) {
              setIsDuplicate(true);
              return toast.warn('This title already exists!');
            }
            const boardInfo = {
              values,
              background: backgroundName,
              icon: iconName,
            };
            onCreateBoard(boardInfo);
            setIsDuplicate(false);
          } else if (btnName === 'Edit') {
            if (
              boards.some(
                el => el.title === values.boardTitle && el !== currentBoard
              )
            ) {
              setIsDuplicate(true);
              return toast.warn('This title already exists!');
            }
            const boardInfoEdit = {
              values,
              background: updatedBackground,
              icon: updatedIcon,
            };

            onEditBoard(boardInfoEdit);
            setIsDuplicate(false);
          }

          resetForm();
          onClose();
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
            {isDuplicate && <Duplicate>Title is duplicate!</Duplicate>}

            <SubtitleStyled>Icons</SubtitleStyled>
            <RadioIcons
              onChangeIcon={setIconName}
              currentBoardIcon={updatedIcon}
            />
            <SubtitleStyled>Background</SubtitleStyled>

            <RadioImages
              onChangeImage={setBackgroundName}
              currentBoardBackground={updatedBackground}
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
