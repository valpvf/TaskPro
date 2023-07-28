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
  background-color: rgba(137, 137, 137, 0.2);
`;

export const ModalWindowStyled = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  padding: 24px;

  background-color: var(--161616);
  border-radius: 8px;
  box-shadow: 0px 4px 16px 0px rgba(22, 22, 22, 0.05);

  @media screen and (min-width: 375px) {
    width: 335px;
  }
  @media screen and (min-width: 768px) {
    width: 350px;
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

  &:hover,
  :focus {
    background-color: rgba(137, 137, 137, 0.2);
  }
`;

export const IconStyled = styled.svg`
  stroke: currentColor;
`;
