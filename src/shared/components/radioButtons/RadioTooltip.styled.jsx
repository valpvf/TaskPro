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
  justify-content: space-between;
  /* gap: 8px; */

  &:hover > p,
  &:hover > svg {
    color: var(--modal-progress-text-hover-color);
    stroke: var(--modal-progress-icon--hover-stroke-color);
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
  color: var(--modal-progress-text-color);
  transition: all 250ms ease-in-out;
`;

export const Icon = styled.svg`
  stroke: var(--modal-progress-icon-stroke-color);
  fill: transparent;
  transition: all 250ms ease-in-out;
`;
