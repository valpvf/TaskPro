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
  display: flex;
  align-items: center;

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

export const IconLogo = styled.svg`
  width: 32px;
  height: 32px;
  margin-right: 8px;
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
  margin-bottom: 8px;
`;

export const CreateBoard = styled.div`
  display: flex;

  justify-content: space-between;
  align-items: center;

  font-size: 14px;
  font-weight: 500;
  line-height: 21px;
  letter-spacing: -0.02em;

  margin-left: 24px;
  margin-right: 24px;
  padding-bottom: 14px;
  padding-top: 14px;

  border-top: solid 1px gray;
  border-bottom: solid 1px gray;
`;

export const IconPlus = styled.svg`
  width: 32px;
  height: 32px;
  fill: #bedbb0;
  stroke: #121212;
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
  margin-top: 40px;
  width: 100%;
  display: flex;
  flex-direction: column;
  /* gap: 12px; */
`;

export const BoardItem = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;

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

export const BorderRight = styled.div`
  content: '';
  position: absolute;
  top: 0;
  right: -1px;
  height: 100%;
  width: 3px;
  background-color: #bedbb0;
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
  stroke: #ffffff;
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
  stroke: grey;
  fill: none;
`;

export const HelpBar = styled.div`
  min-height: 212px;
  background-color: #1f1f1f;
  padding: 20px;
  border-radius: 8px;
  margin-left: 24px;
  margin-right: 24px;
`;

export const HelpImg = styled.img`
  width: 54px;
  height: 78px;
  margin-bottom: 14px;
`;

export const HelpTxt = styled.p`
  margin-bottom: 18px;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: -0.02em;
`;

export const HelpBtn = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: -0.02em;
`;

export const IconHelp = styled.svg`
  width: 16px;
  height: 16px;
  fill: none;
  stroke: #ffffff;
  margin-right: 8px;
`;

export const LogOut = styled.div`
  display: flex;
  align-items: center;
  margin: 24px;

  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0em;
`;

export const IconLogOut = styled.svg`
  width: 16px;
  height: 16px;
  fill: none;
  stroke: #bedbb0;
  margin-right: 8px;
`;
