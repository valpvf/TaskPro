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
import { useState } from 'react';

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

  let updatedBackground;
  let updatedIcon;
  if (btnName === 'Edit') {
    updatedBackground =
      backgroundName !== '00' ? backgroundName : currentBoard.background;

    updatedIcon = iconName !== 'icon-project' ? iconName : currentBoard.icon;
  }

  return (
    <Modal onClose={onClose}>
      <ModalTitle>{title}</ModalTitle>

      <Formik
        initialValues={{
          boardTitle: boardName,
        }}
        validationSchema={TitleSchema}
        onSubmit={(values, { resetForm }) => {
          if (btnName === 'Create') {
            const boardInfo = {
              values,
              background: backgroundName,
              icon: iconName,
            };
            onCreateBoard(boardInfo);
          } else if (btnName === 'Edit') {
            const boardInfoEdit = {
              values,
              background: updatedBackground,
              icon: updatedIcon,
            };
            onEditBoard(boardInfoEdit);
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
