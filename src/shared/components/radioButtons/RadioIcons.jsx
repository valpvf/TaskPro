import { nanoid } from 'nanoid';
import sprite from '../../../images/sprite.svg';
import {
  StyledInput,
  StyledLabel,
  StyledRadioWrapper,
  StyledSVG,
} from './RadioIcons.styled';
import { useState } from 'react';

const RadioIcons = ({ onChangeIcon }) => {
  const icons = [
    'icon-project',
    'icon-star',
    'icon-loading',
    'icon-puzzle',
    'icon-container',
    'icon-lightning',
    'icon-colors',
    'icon-hexagon',
  ];

  const [selectedValue, setSelectedValue] = useState('');

  const handleRadioChange = index => {
    setSelectedValue(index);
    onChangeIcon(selectedValue);
  };

  return (
    <StyledRadioWrapper>
      {icons.map((icon, index) => {
        const id = nanoid();
        return (
          <StyledLabel key={id}>
            <StyledInput
              type="radio"
              value={index}
              name="icon"
              defaultChecked={index === 0}
              onChange={() => handleRadioChange(icon)}
            />
            <StyledSVG>
              <use href={`${sprite}#${icon}`} />
            </StyledSVG>
          </StyledLabel>
        );
      })}
    </StyledRadioWrapper>
  );
};

export default RadioIcons;
