import styled from '@emotion/styled';

export const ModalWrapper = styled.div`
  position: absolute;
  right: 2px;
  background-color: white;
  width: 136px;
  padding: 20px 15px 15px 20px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const TextProgress = styled.p`
  cursor: pointer;
  color: black;
  display: flex;
  gap: 8px;
  margin-bottom: 10px;
  &:hover {
    color: #5255bc;
  }
`;
export const TextDone = styled.p`
  cursor: pointer;
  color: black;
  display: flex;
  gap: 50px;
  &:hover {
    color: #5255bc;
  }
`;
export const Icon = styled.svg`
  /* stroke: #949393; */
  stroke: var(--tertiary-priority-color);
  transition: box-shadow 0.3s;
  cursor: pointer;
  fill: none;
  &:hover,
  &:focus {
    /* stroke: #bedbb0; */
    stroke: #5255bc;
    /* filter: drop-shadow(0 0 5px #bedbb0); */
    filter: drop-shadow(0 0 5px #5255bc);
  }
`;
