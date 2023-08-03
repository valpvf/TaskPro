import styled from '@emotion/styled';

export const BoardItem = styled.li`
  width: 335px;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 18px 20px 17px;
  background-color: var(--column-background-color);
  color: var(--column-text-color);
  border-radius: 8px;

  cursor: pointer;

  font-size: 14px;
  font-weight: 500;
  line-height: calc(24 / 14);
  letter-spacing: -0.02em;
  text-align: left;
`;

export const ProgName = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;
export const IconProgect = styled.svg`
  width: 18px;
  height: 18px;
  stroke: var(--sidebar-icon-stroke-color);
`;
export const IconEditCustom = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
`;

export const IconEdit = styled.svg`
  margin-left: 8px;
  width: 16px;
  height: 16px;
  stroke: var(--column-icon-edit-stroke-color);
  fill: none;
  &:hover {
    stroke: var(--plus-button-color);
    filter: drop-shadow(0 0 7px var(--plus-button-color));
  }
`;
