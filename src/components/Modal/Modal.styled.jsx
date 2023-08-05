import styled from '@emotion/styled';
import '../../shared/basicStyles/variables.scss';

export const BackdropStyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  overflow-y: auto;
  width: 100%;
  height: 100%;
  z-index: 100;
  /* background-color: rgba(137, 137, 137, 0.2); */
  background-color: var(--modal-backdrop-background-color);
`;

export const ModalWindowStyled = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  padding: 24px;

  /* background-color: var(--161616); */
  background-color: var(--modal-window-color);
  border-radius: 8px;
  box-shadow: 0px 4px 16px 0px rgba(22, 22, 22, 0.05);
  box-shadow: 0px 4px 16px 0px var(--modal-window-shadow);

  @media screen and (min-width: 375px) {
    width: 335px;
  }
  @media screen and (min-width: 768px) {
    width: ${props => (props.custom ? '400px' : '350px')};
  }
`;

export const CloseBtnStyled = styled.div`
  width: 18px;
  height: 18px;
  position: absolute;
  right: 14px;
  top: 14px;
  border-radius: 50%;
  background-color: transparent;
  cursor: pointer;
  transition: background-color 250ms ease-in;

  &:hover,
  :focus {
    /* background-color: var(--9DC888); */
    background-color: var(--secondary-button-color);
  }
`;

export const IconStyled = styled.svg`
  /* stroke: currentColor; */
  stroke: var(--modal-close-icon-color);
`;
