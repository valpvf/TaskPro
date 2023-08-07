import styled from '@emotion/styled';

export const ScrollableWordContainer = styled.div`
  width: 100px; /* Задайте ширину контейнера, як вам потрібно */
  overflow: hidden;
  position: relative;

  &:hover > div:last-child {
    visibility: visible;
    opacity: 1;
  }
`;

export const ScrollableWordText = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
  padding-right: 5px;
`;

export const FullWordText = styled.div`
  position: absolute;
  height: 1ch;
  top: -40px;
  left: -40px;
  left: 0;
  visibility: hidden;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
  /* background-color: black; */
  background-color: rgba(255, 255, 255, 0.9);
  border: 1px solid #ccc;
  padding: 5px;
  z-index: 100;
`;
