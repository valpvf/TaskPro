import styled from '@emotion/styled';
import { Field } from 'formik';

export const StyledInputField = styled(Field)`
  width: 100%;
  height: 49px;
  padding: 0 18px;
  border: 1px solid rgba(190, 219, 176, 0.4);
  border-radius: 8px;
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  font-size: 14px;
  color: var(--FFFFFF);
  text-transform: capitalize;
  outline: none;

  &::placeholder {
    color: white;
    text-transform: capitalize;
  }
  &:hover,
  &:focus,
  &:active {
    outline: none;
    border: 1px solid var(--BEDBB0) !important;
  }
`;
