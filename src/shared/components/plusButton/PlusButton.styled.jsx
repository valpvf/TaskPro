import styled from '@emotion/styled';

import AddIcon from '@mui/icons-material/Add';

export const PlusIcon = styled(AddIcon)`
  display: block;
  width: 14px;
  height: 14px;
  color: var(--shared-plus-icon-color) !important;
`;

export const PlusIconDarkBig = styled(AddIcon)`
  display: block;
  width: 20px;
  height: 20px;
  color: var(--shared-plus-icon-dark-big) !important;
`;

export const PlusIconDarkSmall = styled(AddIcon)`
  display: block;
  width: 14px;
  height: 14px;
  color: var(--shared-plus-icon-dark-small) !important;
`;

export const StyledColoredPlusButtonBig = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 36px;
  border-radius: 6px;
  background-color: var(--primary-button-color);

  &:hover {
    background-color: var(--secondary-button-color);
  }
`;

export const StyledColoredPlusButtonSmall = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border-radius: 3px;
  background-color: var(--primary-button-color);

  &:hover {
    background-color: var(--secondary-button-color);
  }
`;

export const StyledWhitePlusButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: 3px;
  background-color: var(--shared-add-column-button);
  border: 1px solid var(--shared-add-column-button-border);
`;

export const StyledBlackPlusButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: 3px;
  background-color: var(--shared-black-plus-button);
`;
