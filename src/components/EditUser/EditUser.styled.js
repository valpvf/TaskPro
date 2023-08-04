import styled from '@emotion/styled';
import { ErrorMessage } from 'formik';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const AvatarWrapper = styled.div`
  width: 68px;
  height: 68px;
  position: relative;
`;

export const IconUser = styled.svg`
  width: 68px;
  height: 68px;
  border-radius: 10px;

  fill: var(--user-icon-fill-color);
  stroke: var(--user-icon-stroke-color);
`;

export const AvatarImg = styled.img`
  width: 68px;
  height: 68px;
  border-radius: 10px;
`;

export const FileInputWrapper = styled.label`
  display: inline-block;
  position: absolute;
  bottom: -12px;
  left: 50%;
  transform: translateX(-50%);

  width: 24px;
  height: 24px;

  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 14px;
  color: var(--welcome-title-color);

  border-radius: 20%;
  background-color: var(--user-icon-plus-fill-color);

  cursor: pointer;
`;

export const FileInput = styled.input`
  display: none;
`;

export const Inputs = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  margin-top: 24px;
  gap: 14px;

  input {
    height: 49px;
    left: 40px;
    top: 107px;

    color: var(--welcome-hover-text-color);
    background: #1f1f1f;
    opacity: 0.4;
    border: 1px solid #bedbb0;
    padding-left: 18px;
    box-shadow: 0px 4px 16px rgba(22, 22, 22, 0.08);
    border-radius: 8px;

    outline: none;
  }
`;
export const PasswordInput = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

export const PasswordView = styled.span`
  position: absolute;
  right: 18px;
  top: 19px;
  cursor: pointer;
`;

export const PasswordIcon = styled.img`
  width: 16.5px;
  height: 16px;
  top: 50%;
  right: 4px;
`;

export const Svg = styled.svg`
  width: 16.5px;
  height: 16px;
  top: 50%;
  right: 4px;
`;

export const SendBtn = styled.button`
  width: 100%;
  height: 49px;
  margin-top: 24px;

  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: -0.02em;

  text-align: center;

  background: #bedbb0;
  border-radius: 8px;
  color: var(--welcome-title-color);
  cursor: pointer;

  &:hover,
  &:focus,
  &:active {
    background: #a1cf89;
  }

  &:active {
    transform: scale(0.95);
  }
`;

export const ErrorText = styled(ErrorMessage)`
  font-size: 14px;
  color: #bedbb070;
`;
