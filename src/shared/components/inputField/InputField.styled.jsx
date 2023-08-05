import styled from '@emotion/styled';
import { Field } from 'formik';

export const StyledInputField = styled(Field)`
  width: 100%;
  height: 49px;
  padding: 0 18px;
  /* border: 1px solid rgba(190, 219, 176, 0.4); */
  border: 1px solid var(--shared-input-border-color);
  border-radius: 8px;
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  font-size: 14px;
  /* color: var(--FFFFFF); */
  color: var(--shared-input-text-color);
  text-transform: capitalize;
  outline: none;
  transition: border 250ms ease-in;

  &::placeholder {
    /* color: white; */
    color: var(--shared-input-placeholder-color);
    text-transform: capitalize;
  }
  &:hover,
  &:focus,
  &:active {
    outline: none;
    /* border: 1px solid var(--BEDBB0) !important; */
    border: 1px solid var(--shared-input-border-hover-color) !important;
    background-color: transparent !important;
  }
`;
