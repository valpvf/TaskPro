import styled from '@emotion/styled';

export const InputStyled = styled.input`
  width: 100%;
  padding: 14px 18px;
  border-radius: 8px;
  border: 1px solid rgba(190, 219, 176, 0.4);
  /* opacity: 0.4000000059604645; */

  color: #fff;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: -0.28px;

  ::placeholder {
    color: #fff;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px;
    letter-spacing: -0.28px;
  }

  &:hover,
  :focus {
    border: 1px solid #bedbb0;
  }
`;

export const TextareaStyled = styled.textarea`
  width: 100%;
  height: 120px;
  margin: 14px 0 24px 0;
  padding: 14px 18px;
  resize: none;
  border-radius: 8px;
  border: 1px solid rgba(190, 219, 176, 0.4);
  /* opacity: 0.4000000059604645; */
  background-color: #1f1f1f;
  box-shadow: 0px 4px 16px 0px rgba(22, 22, 22, 0.08);

  color: #fff;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: -0.28px;

  ::placeholder {
    color: #fff;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px;
    letter-spacing: -0.28px;
  }

  &:hover,
  :focus {
    border: 1px solid #bedbb0;
  }
`;
