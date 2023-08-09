import styled from '@emotion/styled';
import { Field } from 'formik';

export const TextareaStyled = styled(Field)`
  width: 100%;
  height: 120px;
  margin-top: 18px;
  padding: 14px 18px;
  resize: none;
  border-radius: 8px;
  border: 1px solid var(--textarea-border-color);
  background-color: transparent;
  transition: border 250ms ease-in;

  color: var(--modal-need-help-text);
  font-family: 'Poppins', sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.3;
  letter-spacing: -0.28px;

  ::placeholder {
    color: var(--modal-need-help-text);
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
    border: 1px solid var(--primary-modal-card-color);
  }
`;

export const InputField = styled(Field)`
  width: 100%;
  height: 49px;
  padding: 0 18px;
  background-color: transparent !important;
  border: 1px solid var(--shared-input-border-color);
  border-radius: 8px;
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  font-size: 14px;
  color: var(--shared-input-text-color);
  text-transform: lowercase;
  outline: none;
  transition: border 250ms ease-in;

  &::placeholder {
    color: var(--shared-input-placeholder-color);
    text-transform: capitalize;
  }
  &:hover,
  &:focus,
  &:active {
    outline: none;
    border: 1px solid var(--shared-input-border-hover-color) !important;
    background-color: var(--input-need-help-background-focus) !important;
  }
`;
