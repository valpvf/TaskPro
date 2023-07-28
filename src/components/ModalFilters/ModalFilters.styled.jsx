import styled from '@emotion/styled';
import '../../shared/basicStyles/variables.scss';

export const FormStyled = styled.form`
  padding-top: 14px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`;

export const BoxStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 24px 0 14px 0;
`;

export const SubtitleStyled = styled.p`
  color: var(--FFFFFF);
  font-family: 'Poppins', sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: -0.28px;
`;

export const ButtonStyled = styled.button`
  background-color: transparent;
  border: none;
  color: rgba(255, 255, 255, 0.5);
  font-family: 'Poppins', sans-serif;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: -0.24px;
  text-decoration-line: underline;
`;
