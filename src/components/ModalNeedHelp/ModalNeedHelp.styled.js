import { Field } from 'formik';
import styled from '@emotion/styled';

export const TextareaStyled = styled(Field)`
  width: 100%;
  height: 120px;
  margin-top: 18px;
  padding: 14px 18px;
  resize: none;
  transition: border 250ms ease-in;
  letter-spacing: -0.28px;
  color: var(--modal-need-help-text);
  border: 1px solid var(--textarea-border-color);
  border-radius: 8px;
  background-color: transparent;
  font-family: 'Poppins', sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.3;

  ::placeholder {
    letter-spacing: -0.28px;
    color: var(--modal-need-help-text);
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

export const InputField = styled(Field)`
  width: 100%;
  height: 49px;
  padding: 0 18px;
  transition: border 250ms ease-in;
  text-transform: lowercase;
  color: var(--shared-input-text-color);
  border: 1px solid var(--shared-input-border-color);
  border-radius: 8px;
  outline: none;
  background-color: transparent !important;
  font-family: 'Poppins', sans-serif;
  font-size: 14px;
  font-weight: 400;

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
