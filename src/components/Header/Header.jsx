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

const Header = () => {
  const [selectedTheme, setSelectedTheme] = useState('light');

  const [isCustomOptionListOpen, setCustomOptionListOpen] = useState(false);

  const toggleCustomOptionList = () => {
    setCustomOptionListOpen(!isCustomOptionListOpen);
  };

  const handleThemeChange = theme => {
    setSelectedTheme(theme);
    // Зміна теми
    // Зберігання вибраної теми в стані компонента або в контексті
  };

  return (
    <Container>
      <div>
        <IconBM>
          <use href={`${icons}#icon-menu`}></use>
        </IconBM>
      </div>
      <HeaderInfo>
        <TheamBtn onClick={toggleCustomOptionList}>
          Theam
          <IconDown>
            <use href={`${icons}#icon-chevron-down`}></use>
          </IconDown>
        </TheamBtn>

        <CustomSelect>
          <CustomOptionList open={isCustomOptionListOpen}>
            <CustomOption
              onClick={() => handleThemeChange('light')}
              selected={selectedTheme === 'light'}
            >
              Light
            </CustomOption>

            <CustomOption
              onClick={() => handleThemeChange('dark')}
              selected={selectedTheme === 'dark'}
            >
              Dark
            </CustomOption>

            <CustomOption
              onClick={() => handleThemeChange('violet')}
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
