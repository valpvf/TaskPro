import styled from '@emotion/styled';

export const SidebarContainer = styled.div`
  /* height: 100vh; */
  width: 260px;
  background-color: #121212;

  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* Висота на всю сторінку */
  transition: transform 0.3s ease-in-out;

  font-family: Poppins;
`;

export const Logo = styled.h1`
  padding-left: 24px;
  padding-right: 24px;
  padding-top: 24px;
  padding-bottom: 60px;

  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: -0.04em;
  text-align: left;
`;

export const H3Board = styled.h3`
  /* margin-top: 60px; */
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: -0.02em;
  color: grey;

  padding-left: 24px;
  padding-right: 24px;
  margin-bottom: 22px;
`;

export const CreateBoard = styled.div`
  display: flex;

  justify-content: space-between;
  align-items: center;

  font-size: 14px;
  font-weight: 500;
  line-height: 21px;
  letter-spacing: -0.02em;

  padding-left: 24px;
  padding-right: 24px;
  padding-bottom: 54px;
`;

export const Button = styled.button`
  /* margin-bottom: 20px; */

  text-align: center;
  width: 40px;
  height: 36px;

  background-color: #1e272f;
  color: #fff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  transition: background-color 0.3s;

  &:hover {
    background-color: #1e90ff;
  }
`;

export const BoardList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  /* gap: 12px; */
`;

export const BoardItem = styled.div`
  padding: 20px 24px;
  background-color: #1f1f1f;
  color: #fff;

  cursor: pointer;

  font-size: 14px;
  font-weight: 500;
  line-height: 21px;
  letter-spacing: -0.02em;
  text-align: left;

  &:hover {
    background-color: #1e90ff;
  }
`;

export const HelpBar = styled.div`
  padding-left: 24px;
  padding-right: 24px;
`;
