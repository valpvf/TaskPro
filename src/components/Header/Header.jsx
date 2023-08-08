import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import UserInfo from 'components/UserInfo/UserInfo';
import icons from '../../images/sprite.svg';
import { updateTheme } from 'redux/auth/authOperations';
import { useTheme } from 'shared/hooks/useTheme';

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

const Header = ({ onToggleSidebar }) => {
  const dispatch = useDispatch();
  const { theme, setTheme } = useTheme();

  const handleLightThemeClick = () => {
    setTheme('light');
    setSelectedTheme('light');
    dispatch(updateTheme('light'));
    toggleCustomOptionList();
  };
  const handleDarkThemeClick = () => {
    setTheme('dark');
    setSelectedTheme('dark');
    dispatch(updateTheme('dark'));
    toggleCustomOptionList();
  };
  const handleVioletThemeClick = () => {
    setTheme('violet');
    setSelectedTheme('violet');
    dispatch(updateTheme('violet'));
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

        <CustomSelect theme={theme}>
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
