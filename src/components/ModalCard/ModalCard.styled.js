import { Field } from 'formik';
import Svg from '../../images/chevron-down.svg';
import SvgBlue from '../../images/chevron-down-blue.svg';
import styled from '@emotion/styled';
import 'react-datepicker/dist/react-datepicker.css';
import '../../shared/basicStyles/variables.scss';

export const TextareaStyled = styled(Field)`
  width: 100%;
  height: 154px;
  margin-top: 18px;
  padding: 14px 18px;
  resize: none;
  transition: border 250ms ease-in;
  letter-spacing: -0.28px;
  color: var(--modal-board-text);
  border: 1px solid var(--textarea-border-color);
  border-radius: 8px;
  background-color: transparent;
  font-family: 'Poppins', sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.3;

  ::placeholder {
    letter-spacing: -0.28px;
    color: var(--modal-board-text);
    font-family: 'Poppins', sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.3;
  }

  &:hover,
  :focus,
  :active {
    outline: none;
    border: 1px solid var(--primary-modal-card-color);
  }
`;

export const SubtitleStyled = styled.p`
  margin: 24px 0 4px 0;
  letter-spacing: -0.24px;
  color: var(--datepicker-dayname-color);
  font-family: 'Poppins', sans-serif;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.5;
`;

export const LabelStyled = styled.label`
  display: block;
  margin: 14px 0 4px 0;
  letter-spacing: -0.24px;
  color: var(--datepicker-dayname-color);
  font-family: 'Poppins', sans-serif;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.5;
`;

export const DatePickerWrapper = styled.div`
  & .react-datepicker__input-container {
    width: 100%;
  }
  & .react-datepicker__input-container input {
    position: relative;
    width: 100%;
    padding: 0;
    cursor: pointer;
    letter-spacing: -0.28px;
    color: var(--primary-modal-card-color);
    border: none;
    outline: none;
    background-image: ${props =>
      props.violet ? `url(${SvgBlue})` : `url(${Svg})`};
    background-color: transparent;
    background-repeat: no-repeat;
    background-position: top 6px right 65px;
    font-family: 'Poppins', sans-serif;
    font-size: 14px;
    font-weight: 500;
    line-height: 1.5;
  }
  & .react-datepicker__triangle {
    display: none;
  }
  & .react-datepicker {
    border: 1px solid var(--primary-modal-card-color);
    border-radius: 6px;
    background-color: var(--datepicker-background-color);
    font-family: 'Poppins', sans-serif;
  }
  & .react-datepicker__header {
    background-color: var(--datepicker-background-color);
  }
  & .react-datepicker__current-month {
    letter-spacing: -0.32px;
    color: var(--datepicker-current-month);
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    line-height: 1.5;
  }
  & .react-datepicker__navigation-icon--next {
    background-color: var(--primary-modal-card-color);
  }
  & .react-datepicker__day-name {
    color: var(--datepicker-dayname-color);
    font-family: 'Poppins', sans-serif;
    font-size: 14px;
    font-weight: 500;
  }
  & .react-datepicker__day {
    transition: background-color 250ms ease-in, color 250ms ease-in;
    color: var(--datepicker-current-day);
    border-radius: 50%;
    background-color: transparent;
    font-family: 'Poppins', sans-serif;
    font-size: 14px;
    font-weight: 400;
  }
  & .react-datepicker__day--selected {
    color: var(--datepicker-background-color);
    background-color: var(--primary-modal-card-color);
    border-radius: 50%;
  }
  & .react-datepicker__day--disabled {
    color: var(--datepicker-disabled-day);
  }
  & .react-datepicker__day:hover {
    color: var(--datepicker-background-color);
    background-color: var(--datepicker-hover-background-color);
  }
  & .react-datepicker__day--disabled:hover {
    color: var(--datepicker-hover-disabled-day);
    background-color: transparent;
  }
`;

export const SpanStyled = styled.span`
  letter-spacing: -0.28px;
  color: var(--primary-modal-card-color);
  font-family: 'Poppins', sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.5;
`;
