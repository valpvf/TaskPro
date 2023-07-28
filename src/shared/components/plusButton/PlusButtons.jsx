import {
  StyledColoredPlusButtonBig,
  StyledColoredPlusButtonSmall,
  StyledWhitePlusButton,
  StyledBlackPlusButton,
  PlusIcon,
  PlusIconDarkBig,
  PlusIconDarkSmall,
} from './PlusButton.styled';

//Button+ which changes color depends on choosen theme (for desktop, tablet)
//Загальна кнопка "+", що змінює колір в залежності від обраної теми (для десктопу, планшету)
export const ColoredPlusButtonBig = () => {
  return (
    <StyledColoredPlusButtonBig>
      <PlusIconDarkBig />
    </StyledColoredPlusButtonBig>
  );
};

//Button+ which changes color depends on choosen theme (for mobile)
//Загальна кнопка "+", що змінює колір в залежності від обраної теми (для мобільної  версії)
export const ColoredPlusButtonSmall = () => {
  return (
    <StyledColoredPlusButtonSmall>
      <PlusIconDarkSmall />
    </StyledColoredPlusButtonSmall>
  );
};

// Button+ with white background-color, used in "Add another column button"
//Кнопка "+" з білим бекграундом, що використовується в "add another column"
export const WhitePlusButton = () => {
  return (
    <StyledWhitePlusButton>
      <PlusIconDarkSmall />
    </StyledWhitePlusButton>
  );
};

//Button+ with black background-color used in the pop-ups
//Кнопка "+" з чорним бекграундом, що використовується в модальних вікнах
export const BlackPlusButton = () => {
  return (
    <StyledBlackPlusButton>
      <PlusIcon />
    </StyledBlackPlusButton>
  );
};
