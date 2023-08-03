import styled from '@emotion/styled';

export const StyledRadioWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  width: 252px;
  height: 60px;
  margin-bottom: 16px;
`;

export const StyledLabel = styled.label`
  & img {
    cursor: pointer;
  }
`;

export const StyledInput = styled.input`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;

  &:checked + img {
    transform: scale(1.2);
  }
`;
