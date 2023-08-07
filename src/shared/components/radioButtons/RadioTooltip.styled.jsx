import styled from '@emotion/styled';

export const RadioWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  height: 100%;
`;

export const StyledLabel = styled.label`
  display: flex;
  gap: 8px;

  &:hover > p,
  &:hover > svg {
    color: #bedbb0;
    stroke: #bedbb0;
  }

  cursor: pointer;
`;

export const StyledInput = styled.input`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
`;

export const ColumnTitle = styled.p`
  font-family: Poppins;
  letter-spacing: -0.28px;
  color: rgba(255, 255, 255, 0.5);
  transition: all 250ms ease-in-out;
`;

export const Icon = styled.svg`
  stroke: rgba(255, 255, 255, 0.5);
  fill: transparent;
  transition: all 250ms ease-in-out;
`;
