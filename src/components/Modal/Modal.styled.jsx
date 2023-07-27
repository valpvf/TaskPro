import styled from '@emotion/styled';

export const BackdropStyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  overflow-y: auto;
  width: 100%;
  height: 100%;
  z-index: 100;
  background-color: rgba(46, 47, 66, 0.4);
`;

export const ModalWindowStyled = styled.div`
  box-sizing: border-box;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 335px;
  /* height: 220px; */
  padding: 24px;

  background-color: #151515;
  border-radius: 8px;
  box-shadow: 0px 4px 16px 0px rgba(22, 22, 22, 0.05);
`;

export const CloseBtnStyled = styled.div`
  box-sizing: border-box;
  width: 18px;
  height: 18px;
  position: absolute;
  right: 14px;
  top: 14px;

  background-color: gray;
`;
