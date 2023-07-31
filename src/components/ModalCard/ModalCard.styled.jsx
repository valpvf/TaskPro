import styled from '@emotion/styled';
import { Field } from 'formik';
import 'react-datepicker/dist/react-datepicker.css';
import '../../shared/basicStyles/variables.scss';
import Svg from '../../images/chevron-down.svg';

export const TextareaStyled = styled(Field)`
  width: 100%;
  height: 154px;
  margin-top: 14px;
  padding: 14px 18px;
  resize: none;
  border-radius: 8px;
  /* border: 1px solid rgba(190, 219, 176, 0.4); */
  border: 1px solid var(--textarea-border-color);
  background-color: transparent;
  transition: border 250ms ease-in;

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
  margin: 24px 0 4px 0;
  color: var(--datepicker-dayname-color);
  font-family: 'Poppins', sans-serif;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: -0.24px;
`;

export const LabelStyled = styled.label`
  display: block;
  margin: 14px 0 4px 0;
  color: var(--datepicker-dayname-color);
  font-family: 'Poppins', sans-serif;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: -0.24px;
`;

export const DatePickerWrapper = styled.div`
  & .react-datepicker-wrapper {
    width: 100%;
  }
  & .react-datepicker__input-container {
    width: 100%;
  }
  & .react-datepicker__input-container input {
    position: relative;
    width: 100%;
    padding: 0;
    background-image: url(${Svg});
    background-repeat: no-repeat;
    background-position: top 6px right 100px;

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
    cursor: pointer;
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
    font-family: 'Poppins', sans-serif;
    font-size: 14px;
    font-weight: 500;
  }
  & .react-datepicker__day {
    /* color: var(--FFFFFF); */
    color: var(--datepicker-current-day);
    background-color: transparent;
    border-radius: 50%;
    transition: background-color 250ms ease-in, color 250ms ease-in;

    font-family: 'Poppins', sans-serif;
    font-size: 14px;
    font-weight: 400;
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
    /* color: var(--1F1F1F); */
    color: var(--datepicker-background-color);
  }
  & .react-datepicker__day--disabled:hover {
    background-color: transparent;
    color: rgba(255, 255, 255, 0.2);
    color: var(--datepicker-hover-disabled-day);
  }
`;
