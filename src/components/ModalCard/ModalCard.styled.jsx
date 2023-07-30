import styled from '@emotion/styled';
import { Field } from 'formik';
import 'react-datepicker/dist/react-datepicker.css';
import '../../shared/basicStyles/variables.scss';

export const FormStyled = styled.form`
  width: 100%;
`;

export const TextareaStyled = styled(Field)`
  width: 100%;
  height: 154px;
  margin: 14px 0 24px 0;
  padding: 14px 18px;
  resize: none;
  border-radius: 8px;
  /* border: 1px solid rgba(190, 219, 176, 0.4); */
  border: 1px solid var(--textarea-border-color);
  background-color: transparent;
  box-shadow: 0px 4px 16px 0px rgba(22, 22, 22, 0.08);

  /* color: var(--FFFFFF); */
  color: var(--modal-board-text);
  font-family: 'Poppins', sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.3;
  letter-spacing: -0.28px;

  ::placeholder {
    /* color: var(--FFFFFF); */
    color: var(--modal-board-text);
    font-family: 'Poppins', sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.3;
    letter-spacing: -0.28px;
  }

  &:hover,
  :focus,
  :active {
    outline: none;
    /* border: 1px solid var(--BEDBB0); */
    border: 1px solid var(--primary-modal-card-color);
  }
`;

export const SubtitleStyled = styled.p`
  margin-bottom: 4px;
  color: rgba(255, 255, 255, 0.5);
  font-size: 12px;
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: -0.24px;
`;

export const LabelStyled = styled.label`
  display: block;
  margin: 14px 0 4px 0;
  color: rgba(255, 255, 255, 0.5);
  font-size: 12px;
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: -0.24px;
`;

export const DatePickerWrapper = styled.div`
  position: relative;

  & .react-datepicker__input-container input {
    font-family: 'Poppins', sans-serif;
    font-size: 14px;
    font-weight: 500;
    line-height: 1.5;
    letter-spacing: -0.28px;
    background-color: transparent;
    border: none;
    outline: none;
    /* color: var(--BEDBB0); */
    color: var(--primary-modal-card-color);
  }
  & .react-datepicker__triangle {
    display: none;
  }
  & .react-datepicker {
    font-family: 'Poppins', sans-serif;
    /* background-color: var(--1F1F1F); */
    background-color: var(--datepicker-background-color);
    border-radius: 6px;
    /* border: 1px solid var(--BEDBB0); */
    border: 1px solid var(--primary-modal-card-color);
  }
  & .react-datepicker__header {
    /* background-color: var(--1F1F1F); */
    background-color: var(--datepicker-background-color);
  }
  & .react-datepicker__current-month {
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    line-height: 1.5;
    letter-spacing: -0.32px;
    /* color: var(--FFFFFF); */
    color: var(--datepicker-current-month);
  }
  & .react-datepicker__navigation-icon--next {
    /* background-color: var(--BEDBB0); */
    background-color: var(--primary-modal-card-color);
  }
  & .react-datepicker__day-name {
    /* color: rgba(255, 255, 255, 0.5); */
    color: var(--datepicker-dayname-color);
  }
  & .react-datepicker__day {
    /* color: var(--FFFFFF); */
    color: var(--datepicker-current-day);
    background-color: transparent;
  }
  & .react-datepicker__day--selected {
    /* background-color: var(--BEDBB0); */
    background-color: var(--primary-modal-card-color);
    border-radius: 50%;
    /* color: var(--1F1F1F); */
    color: var(--datepicker-background-color);
  }
  & .react-datepicker__day--disabled {
    /* color: rgba(255, 255, 255, 0.2); */
    color: var(--datepicker-disabled-day);
  }
  & .react-datepicker__day:hover {
    /* background-color: var(--BEDBB0); */
    background-color: var(--datepicker-hover-background-color);
    border-radius: 50%;
    /* color: var(--1F1F1F); */
    color: var(--datepicker-background-color);
  }
  & .react-datepicker__day--disabled:hover {
    background-color: transparent;
    color: rgba(255, 255, 255, 0.2);
    color: var(--datepicker-hover-disabled-day);
  }
`;

export const IconStyled = styled.svg`
  position: absolute;
  top: 2px;
  left: 50px;
  /* stroke: var(--BEDBB0); */
  stroke: var(--primary-modal-card-color);
  fill: transparent;
`;
