import styled from '@emotion/styled';

export const Container = styled.div`
  background-color: #1f1f1f;
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
  stroke: white;
`;

export const AddColumn = styled.div`
  display: flex;
  align-items: center;

  width: 334px;
  height: 56px;
  background-color: #121212;

  border-radius: 8px;
`;

export const IconPlus = styled.svg`
  width: 32px;
  height: 32px;
  fill: white;
  stroke: #121212;
  margin-right: 8px;
`;
export const ButtonAdd = styled.button`
  margin-left: 80px;
  color: white;
  display: flex;
  align-items: center;
  border: none;

  font-size: 14px;
  font-weight: 500;
  line-height: 21px;
  letter-spacing: -0.02em;
`;
