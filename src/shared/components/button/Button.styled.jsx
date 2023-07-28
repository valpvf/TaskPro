import styled from '@emotion/styled';
import Button from '@mui/material/Button';

export const StyledButton = styled(Button)`
  gap: 8px;
  width: 287px;
  height: 49px;
  box-sizing: border-box;
  border-radius: 8px;
  background-color: var(--BEDBB0);
  color: var(--161616);
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  font-size: 14px;
  text-transform: capitalize !important;

  &:hover {
    background-color: var(--9DC888);
  }
  @media screen and (min-width: 768px) {
    width: 302px;
  }
`;
