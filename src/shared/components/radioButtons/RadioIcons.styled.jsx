import styled from '@emotion/styled';
import '../../basicStyles/variables.scss';

export const StyledRadioWrapper = styled.div`
  display: flex;
  gap: 8px;
`;

export const StyledLabel = styled.label`
  & svg {
    cursor: pointer;
  }
`;

export const StyledSVG = styled.svg`
  width: 18px;
  height: 18px;
  stroke: var(--radio-icons-color);
  fill: transparent;
`;

export const StyledInput = styled.input`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;

  &:checked + svg {
    stroke: var(--radio-icons-checked);
  }
`;
