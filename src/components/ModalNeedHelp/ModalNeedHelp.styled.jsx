import styled from '@emotion/styled';
import { Field } from 'formik';

export const TextareaStyled = styled(Field)`
  width: 100%;
  height: 120px;
  margin-top: 14px;
  padding: 14px 18px;
  resize: none;
  border-radius: 8px;
  /* border: 1px solid rgba(190, 219, 176, 0.4); */
  border: 1px solid var(--textarea-border-color);
  background-color: transparent;
  transition: border 250ms ease-in;

  /* color: var(--FFFFFF); */
  color: var(--modal-need-help-text);
  font-family: 'Poppins', sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.3;
  letter-spacing: -0.28px;

  ::placeholder {
    /* color: var(--FFFFFF); */
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
    /* border: 1px solid #bedbb0; */
    border: 1px solid var(--primary-modal-card-color);
  }
`;
