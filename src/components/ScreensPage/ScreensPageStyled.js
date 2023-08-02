import styled from '@emotion/styled';
// Імпортуйте ваш Redux slice

export const Container = styled.div`
  /* background-color: #1f1f1f; */
  background-color: var(--secondary-background-color);

  background-position-y: bottom;

  background-position-y: bottom;

  background-position-x: center;
  background-repeat: no-repeat;
  background-size: cover;
  flex-grow: 1;
  padding-left: 24px;
  padding-right: 24px;
`;

export const ScreensHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding-top: 10px;
  padding-bottom: 10px;
`;
export const HeaderTxt = styled.div`
  font-size: 18px;
  font-weight: 500;
  line-height: 27px;
  letter-spacing: -0.02em;
  color: var(--primary-heading-color);
`;

export const HeaderFiltres = styled.div`
  display: flex;
  align-items: center;

  font-size: 14px;
  font-weight: 500;
  line-height: 21px;
  letter-spacing: -0.02em;
`;

export const IconFiltre = styled.svg`
  width: 16px;
  height: 16px;
  margin-right: 8px;

  fill: none;
  /* stroke: white; */
  stroke: var(--primary-icon-stroke-color);
`;

export const AddColumn = styled.div`
  display: flex;
  align-items: center;

  width: 334px;
  height: 56px;
  /* background-color: #121212; */
  background-color: var(--add-column-button-color);

  border-radius: 8px;
`;

export const IconPlus = styled.svg`
  width: 32px;
  height: 32px;
  /* fill: white; */
  fill: var(--column-icon-plus-color);
  stroke: var(--column-icon-plus-stroke-color);
  margin-right: 8px;
`;
export const ButtonAdd = styled.button`
  margin-left: 80px;
  /* color: white; */
  color: var(--primary-heading-color);
  display: flex;
  align-items: center;
  border: none;

  font-size: 14px;
  font-weight: 500;
  line-height: 21px;
  letter-spacing: -0.02em;
`;
