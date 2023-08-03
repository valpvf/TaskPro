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

  @media (min-width: 1440px) {
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
  left: -105px;
  /* background-color: #161616; */
  background-color: var(--header-background-color);
  /* border: solid 1px #bedbb0; */
  border: solid 1px var(--theme-switcher-dropdown-border-color);
  border-radius: 8px;
  box-shadow: 0px 4px 16px 0px rgba(17, 17, 17, 0.1);
`;

export const CustomOption = styled.li`
  padding: 5px 10px;
  cursor: pointer;
  color: var(--theme-switcher-dropdown-text-color);

  &:hover {
    /* color: #bedbb0; */
    color: var(--theme-switcher-dropdown-hover-color);
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

  fill: transparent;
  stroke: white;
  stroke: var(--primary-icon-stroke-color);
`;
