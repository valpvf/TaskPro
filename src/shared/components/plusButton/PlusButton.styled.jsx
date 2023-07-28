import styled from '@emotion/styled';

import AddIcon from '@mui/icons-material/Add';

export const PlusIcon = styled(AddIcon)`
  display: block;
  width: 14px;
  height: 14px;
  color: var(--FFFFFF) !important;
`;

export const PlusIconDarkBig = styled(AddIcon)`
  display: block;
  width: 20px;
  height: 20px;
  color: var(--121212) !important;
`;

export const PlusIconDarkSmall = styled(AddIcon)`
  display: block;
  width: 14px;
  height: 14px;
  color: var(--121212) !important;
`;

export const StyledColoredPlusButtonBig = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 36px;
  border-radius: 6px;
  background-color: var(--BEDBB0);

  &:hover {
    background-color: var(--9DC888);
  }
`;

export const StyledColoredPlusButtonSmall = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border-radius: 3px;
  background-color: var(--BEDBB0);

  &:hover {
    background-color: var(--9DC888);
  }
`;

export const StyledWhitePlusButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: 3px;
  background-color: var(--FFFFFF);
  border: 1px solid var(--121212);
`;

export const StyledBlackPlusButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: 3px;
  background-color: var(--161616);
`;
