import styled from '@emotion/styled';

export const StyledInputField = styled.input`
  width: 287px;
  height: 49px;
  padding: 0 18px;
  border: 1px solid var(--BEDBB0);
  border-radius: 8px;
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  font-size: 14px;
  color: var(--FFFFFF);
  text-transform: capitalize;
  outline: none;

  &::placeholder {
    color: white;
    text-transform: capitalize;
  }
  &:focus,
  &:active {
    outline: none;
    border: 1px solid var(--9DC888) !important;
  }

  @media screen and (min-width: 481px) {
    width: 302px;
  }
`;
