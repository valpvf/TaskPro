import { useState } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from 'react-datepicker';
import { registerLocale } from 'react-datepicker';
import uk from 'date-fns/locale/uk';
import Modal from 'components/Modal/Modal';
import ModalTitle from 'components/ModalTitle/ModalTitle';
import ButtonMain from 'shared/components/button/Button';
import { BlackPlusButton } from 'shared/components/plusButton/PlusButtons';
import InputField from 'shared/components/inputField/InputField';
import RadioColored from 'shared/components/radioButtons/RadioColored';
import InputErrorMessage from 'shared/components/inputErrorMessage/InputErrorMessage';
import {
  TextareaStyled,
  SubtitleStyled,
  LabelStyled,
  DatePickerWrapper,
  SpanStyled,
} from './ModalCard.styled';
import { useDispatch } from 'react-redux';
import { addCard, editCard } from 'redux/task/taskOperations';

const TitleSchema = Yup.object().shape({
  cardTitle: Yup.string().required('Title is required'),
  cardDescr: Yup.string().required('Description is required'),
});

const ModalCard = ({
  onClose,
  title: modalTitle,
  btnName,
  cardTitle = '',
  cardDescription = '',
  currentPriority = 'Without',
  deadline = false,
  column,
  taskId,
}) => {
  registerLocale('en', uk);

  const dispatch = useDispatch();

  const [startDate, setStartDate] = useState(
    deadline ? new Date(deadline) : new Date()
  );
  const [priority, setPriority] = useState(currentPriority);

  const compareDate = () => {
    const curDate = startDate.toISOString().split('T')[0];
    const dateNow = Date.now();
    const date = new Date(dateNow).toISOString().split('T')[0];
    return curDate === date ? true : false;
  };

  return (
    <Modal onClose={onClose}>
      <ModalTitle>{modalTitle}</ModalTitle>

      <Formik
        initialValues={{
          cardTitle: cardTitle,
          cardDescr: cardDescription,
        }}
        validationSchema={TitleSchema}
        onSubmit={(values, { resetForm }) => {
          const { cardTitle: title, cardDescr: description } = values;
          const form = {
            title,
            description,
            priority,
            deadline: startDate,
            column,
          };

          if (taskId) {
            dispatch(
              editCard({
                id: taskId,
                body: {
                  title,
                  description,
                  priority,
                  deadline: startDate,
                },
                column: column,
              })
            );
          } else {
            dispatch(addCard(form));
          }

          resetForm();
          onClose();
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
            <InputErrorMessage name="cardTitle" component={'p'} />
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
            <InputErrorMessage name="cardDescr" component={'p'} />
            <SubtitleStyled>Label color</SubtitleStyled>
            <RadioColored
              onRadioChange={setPriority}
              currentPriority={currentPriority}
            />
            <LabelStyled htmlFor="date">Deadline</LabelStyled>
            <DatePickerWrapper>
              {compareDate() && <SpanStyled>Today,&nbsp;</SpanStyled>}
              <DatePicker
                locale="en"
                selected={startDate}
                onChange={date => setStartDate(date)}
                minDate={new Date()}
                name="date"
                value={date => date}
                dateFormat="MMMM d"
              />
            </DatePickerWrapper>
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

export default ModalCard;
