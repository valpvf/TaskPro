import styled from '@emotion/styled';
import { Field } from 'formik';
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
  border: 1px solid rgba(190, 219, 176, 0.4);
  background-color: transparent;
  box-shadow: 0px 4px 16px 0px rgba(22, 22, 22, 0.08);

  color: var(--FFFFFF);
  font-family: 'Poppins', sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.3;
  letter-spacing: -0.28px;

  ::placeholder {
    color: var(--FFFFFF);
    font-family: 'Poppins', sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.3;
    letter-spacing: -0.28px;
  }

  &:hover,
  :focus {
    border: 1px solid #bedbb0;
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

export const DateInputStyled = styled.input`
  display: block;
  background-color: var(--FFFFFF);
`;
