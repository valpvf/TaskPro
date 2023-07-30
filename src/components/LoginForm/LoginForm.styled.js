import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

export const RegisterLink = styled(Link)`
  margin-right: 14px;

  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
  letter-spacing: -0.02em;
  color: rgba(255, 255, 255, 0.3);
`;

export const LoginLink = styled(Link)`
  left: 160px;
  top: 40px;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
  letter-spacing: -0.02em;
  color: var(--welcome-hover-text-color);
`;

export const LoginBtn = styled.button`
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

  @media screen and (max-width: 768px) {
    width: 287px;
  }
`;
