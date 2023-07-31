import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  /* background-color: #161616; */
  background-color: var(--header-background-color);
  /* color: #fff; */
  color: var(--primary-heading-color);
  height: 68px;
  padding-left: 32px;
  padding-right: 24px;
`;

export const IconBM = styled.svg`
  width: 32px;
  height: 32px;
  fill: none;
  /* stroke: #ffffff; */
  stroke: var(--primary-icon-stroke-color);

  @media (min-width: 768px) {
    display: none;
  }
`;

export const HeaderInfo = styled.div`
  display: flex;
  align-items: center;
`;

export const CustomSelect = styled.div`
  position: relative;
`;

export const CustomOptionList = styled.ul`
  list-style: none;
  padding: 18px 44px 18px 18px;
  margin: 0;
  display: ${props => (props.open ? 'block' : 'none')};
  position: absolute;
  top: 20px;
  left: -90px;
  /* background-color: #161616; */
  background-color: var(--header-background-color);
  /* border: solid 1px #bedbb0; */
  border: solid 1px var(--primary-button-color);
  border-radius: 8px;
`;

export const CustomOption = styled.li`
  padding: 5px 10px;
  cursor: pointer;

  &:hover {
    color: #bedbb0;
    color: var(--primary-button-color);
  }

  ${props =>
    props.selected &&
    `
      color: var(--primary-button-color);
    `}
`;

export const TheamBtn = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const IconDown = styled.svg`
  width: 16px;
  height: 16px;
  margin-left: 4px;

  stroke: white;
  stroke: var(--primary-icon-stroke-color);
`;
