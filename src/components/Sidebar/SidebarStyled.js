import styled from '@emotion/styled';
import { css, keyframes } from '@emotion/react';

export const SidebarContainer = styled.div`
  min-width: 260px;
  background-color: var(--primary-background-sidebar-color);
  color: var(--secondary-heading-color);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: transform 0.3s ease-in-out;
  z-index: 11;

  @media (max-width: 1439px) {
    position: absolute;
    height: 100vh;
    min-width: 225px;
  }
`;

export const Logo = styled.h1`
  display: flex;
  align-items: center;

  padding-left: 24px;
  padding-right: 24px;
  padding-top: 24px;
  padding-bottom: 60px;

  font-size: 16px;
  font-weight: 600;
  line-height: calc(24 / 16);
  letter-spacing: -0.04em;
`;

export const IconLogo = styled.svg`
  width: 32px;
  height: 32px;
  margin-right: 8px;
`;

export const H3Board = styled.h3`
  font-size: 12px;
  font-weight: 400;
  line-height: calc(18 / 12);
  letter-spacing: -0.02em;
  color: var(--secondary-text-sidebar-color);
  opacity: 0.5;

  padding-left: 24px;
  padding-right: 24px;
  margin-bottom: 8px;
`;

export const CreateBoard = styled.div`
  display: flex;

  justify-content: space-between;
  align-items: center;

  font-size: 14px;
  font-weight: 500;
  line-height: calc(21 / 14);
  letter-spacing: -0.02em;

  margin-left: 24px;
  margin-right: 24px;
  padding-bottom: 14px;
  padding-top: 14px;

  border-top: solid 1px var(--line-border-sidebar-color);
  border-bottom: solid 1px var(--line-border-sidebar-color);
`;

export const IconPlus = styled.svg`
  width: 32px;
  height: 32px;
  fill: var(--plus-button-color);
  stroke: var(--secondary-icon-stroke-color);
  &:hover {
    fill: var(--plus-button-hover-color);
    cursor: pointer;
    width: 34px;
    height: 34px;
  }
`;

export const BoardList = styled.ul`
  margin-top: 40px;
  width: 100%;
  display: flex;
  flex-direction: column;

  max-height: calc(100vh - 420px);
  overflow-y: auto;
  overflow-x: hidden;
  transform: scaleX(-1);

  &::-webkit-scrollbar {
    padding-left: 4px;
    width: 2px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--secondary-heading-color);
    border-radius: 4px;
  }

  &::-webkit-scrollbar-track {
  }
`;

export const BoardItem = styled.li`
  transform: scaleX(-1);
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-height: 60px;

  padding: 20px 24px;
  cursor: pointer;

  font-size: 14px;
  font-weight: 500;
  line-height: calc(24 / 14);
  letter-spacing: -0.02em;
  text-align: left;

  background-color: ${props =>
    props.isActiveProps
      ? 'var(--board-item-sidebar-background-color)'
      : 'transparent'};
  color: ${props =>
    props.isActiveProps
      ? 'var(--sidebar-icon-active-stroke-color)'
      : 'var(--sidebar-icon-edit-stroke-color)'};

  stroke: ${props =>
    props.isActiveProps
      ? 'var(--sidebar-icon-active-stroke-color)'
      : 'var(--sidebar-icon-edit-stroke-color)'};
  &:hover {
    color: var(--sidebar-icon-active-stroke-color);
    stroke: var(--sidebar-icon-active-stroke-color);
  }
`;

export const BorderRight = styled.div`
  display: ${props => (props.isActive ? 'block' : 'none')};
  content: '';
  position: absolute;
  top: 0;
  right: -1px;
  height: 100%;
  width: 3px;
  background-color: var(--scrollbar-color);
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
`;

export const ProgName = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;
export const IconProgect = styled.svg`
  width: 18px;
  height: 18px;
  fill: var(--sidebar-icon-fill-color);
  stroke: inherit;
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
  stroke: var(--sidebar-icon-edit-stroke-color);
  fill: none;
  &:hover {
    stroke: var(--plus-button-color);
    filter: drop-shadow(0 0 7px var(--plus-button-color));
  }
`;

const fadeInAnimation = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20px);

  }
   50% {
    opacity: 0.5;
    transform: translateY(10px);

  }
  100% {
    opacity: 1;
    transform: translateY(0);

  }
`;

export const HelpBar = styled.div`
  position: relative;
`;

export const HelpTextContainer = styled.div`
  position: absolute;
  top: -120px;
  background-color: var(--sidebar-help-backgound-color);
  padding: 20px;
  padding-bottom: 0;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  margin-left: 24px;
  margin-right: 24px;

  ${({ isHelpBarHovered }) =>
    isHelpBarHovered
      ? css`
          animation: ${fadeInAnimation} 0.2s ease-in-out;
        `
      : ''};

  @media (max-width: 1439px) {
    top: -140px;
  }
`;

export const HelpBtn = styled.div`
  background-color: var(--sidebar-help-backgound-color);
  padding-right: 20px;
  padding-left: 20px;
  padding-top: 7px;
  padding-bottom: 7px;
  border-radius: 8px;
  margin-left: 24px;
  margin-right: 24px;
  cursor: pointer;

  display: flex;
  align-items: center;
  font-size: 14px;
  font-weight: 400;
  line-height: calc(20 / 14);
  letter-spacing: -0.02em;

  border-top-left-radius: ${props => (props.isHovered ? '0' : '8px')};
  border-top-right-radius: ${props => (props.isHovered ? '0' : '8px')};
`;

export const HelpImg = styled.img`
  width: 34px;
  margin-left: 20px;
`;

export const HelpTxt = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: calc(20 / 14);
  letter-spacing: -0.02em;
`;

export const IconHelp = styled.svg`
  width: 16px;
  height: 16px;
  fill: none;
  stroke: var(--sidebar-icon-stroke-color);
  margin-right: 8px;
`;

export const LogOut = styled.div`
  display: flex;
  align-items: center;
  margin: 24px;
  cursor: pointer;

  font-size: 16px;
  font-weight: 500;
  line-height: calc(24 / 16);
  letter-spacing: 0em;

  &:hover {
    stroke: var(--logout-hover-button-color);
    filter: drop-shadow(0 0 1px var(--logout-hover-button-color));
  }
`;

export const IconLogOut = styled.svg`
  width: 32px;
  height: 32px;
  fill: none;
  stroke: var(--logout-button-color);
  margin-right: 8px;
`;
