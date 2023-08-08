import styled from '@emotion/styled';

export const ModalWrapper = styled.div`
  position: absolute;
  /* top: 50%; */
  top: 70px;
  right: 30px;
  //right: 2px;
  /* transform: translate(0, -77%); */
  background-color: var(--modal-progress-background-color);
  box-shadow: 0px 4px 16px 0px var(--modal-progress-boxshadow-color);
  width: 136px;
  padding: 10px 10px 15px 20px;
  /* padding: 20px 15px 15px 20px; */
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;

  transform: translate(10%, -30%);

  max-height: 80px;

  overflow-y: auto;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    padding-left: 4px;
    width: 2px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--secondary-heading-color);
    border-radius: 4px;
  }

  &::-webkit-scrollbar-track {
    /* background-color: blue;  */
  }
`;
