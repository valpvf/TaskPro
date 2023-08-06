import styled from '@emotion/styled';
import Button from '@mui/material/Button';

export const StyledButton = styled(Button)`
  gap: 8px;
  width: 100%;
  height: 49px;
  margin-top: 10px;
  margin-bottom: 10px;
  box-sizing: border-box;
  border-radius: 8px;
  /* background-color: var(--BEDBB0); */
  background-color: var(--primary-button-color);
  /* color: var(--161616); */
  color: var(--shared-button-text-color);
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  font-size: 14px;
  text-transform: none !important;

  &:hover,
  :focus {
    /* background-color: var(--9DC888); */
    background-color: var(--secondary-button-color);
  }
`;
