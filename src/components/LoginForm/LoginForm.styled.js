import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

export const RegisterLink = styled(Link)`
  margin-right: 14px;
  letter-spacing: -0.02em;
  color: rgba(255, 255, 255, 0.3);
  font-size: 18px;
  font-weight: 500;
  font-style: normal;
  line-height: 27px;

  &:hover,
  &:focus {
    color: #bedbb0;
  }
`;

export const LoginLink = styled(Link)`
  top: 40px;
  left: 160px;
  letter-spacing: -0.02em;
  color: var(--welcome-hover-text-color);
  font-size: 18px;
  font-weight: 500;
  font-style: normal;
  line-height: 27px;
`;

export const LoginBtn = styled.button`
  width: 100%;
  height: 49px;
  margin-top: 24px;
  cursor: pointer;
  text-align: center;
  letter-spacing: -0.02em;
  color: var(--welcome-title-color);
  border: none;
  border-radius: 8px;
  background: #bedbb0;
  font-size: 14px;
  font-weight: 500;
  font-style: normal;
  line-height: 21px;

  &:hover,
  &:focus,
  &:active {
    background: #a1cf89;
  }

  &:active {
    transform: scale(0.95);
  }

  @media screen and (max-width: 767px) {
    width: 287px;
  }
`;
