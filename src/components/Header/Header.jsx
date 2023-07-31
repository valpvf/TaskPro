/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import UserInfo from 'components/UserInfo/UserInfo';
import {
  Container,
  HeaderInfo,
  IconBM,
  CustomSelect,
  CustomOption,
  CustomOptionList,
  IconDown,
  TheamBtn,
} from './HeaderStyled';
import icons from '../../images/sprite.svg';
import { useTheme } from '../../shared/hooks/useTheme';

const Header = ({ onToggleSidebar }) => {
  const { theme, setTheme } = useTheme();
  const handleLightThemeClick = () => {
    setTheme('light');
    setSelectedTheme('light');
    toggleCustomOptionList();
  };
  const handleDarkThemeClick = () => {
    setTheme('dark');
    setSelectedTheme('dark');
    toggleCustomOptionList();
  };
  const handleVioletThemeClick = () => {
    setTheme('violet');
    setSelectedTheme('violet');
    toggleCustomOptionList();
  };

  const [selectedTheme, setSelectedTheme] = useState('dark');

  const [isCustomOptionListOpen, setCustomOptionListOpen] = useState(false);

  const toggleCustomOptionList = () => {
    setCustomOptionListOpen(!isCustomOptionListOpen);
  };

  return (
    <Container>
      <div onClick={onToggleSidebar}>
        <IconBM>
          <use href={`${icons}#icon-menu`}></use>
        </IconBM>
      </div>
      <HeaderInfo>
        <TheamBtn onClick={toggleCustomOptionList}>
          Theme
          <IconDown>
            <use href={`${icons}#icon-chevron-down`}></use>
          </IconDown>
        </TheamBtn>

        <CustomSelect>
          <CustomOptionList open={isCustomOptionListOpen}>
            <CustomOption
              onClick={() => handleLightThemeClick()}
              selected={selectedTheme === 'light'}
            >
              Light
            </CustomOption>

            <CustomOption
              onClick={() => handleDarkThemeClick()}
              selected={selectedTheme === 'dark'}
            >
              Dark
            </CustomOption>

            <CustomOption
              onClick={() => handleVioletThemeClick('violet')}
              selected={selectedTheme === 'violet'}
            >
              Violet
            </CustomOption>
          </CustomOptionList>
        </CustomSelect>

        <UserInfo />
      </HeaderInfo>
    </Container>
  );
};

export default Header;
