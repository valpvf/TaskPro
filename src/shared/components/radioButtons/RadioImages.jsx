import { nanoid } from 'nanoid';
import {
  StyledInput,
  StyledLabel,
  StyledRadioWrapper,
} from './RadioImages.styled';
import { useState } from 'react';
const RadioImages = ({ onChangeImage, currentBoardBackground }) => {
  const images = [
    '00.png',
    '01.png',
    '02.png',
    '03.png',
    '04.png',
    '05.png',
    '06.png',
    '07.png',
    '08.png',
    '09.png',
    '10.png',
    '11.png',
    '12.png',
    '13.png',
    '14.png',
    '15.png',
  ];

  const [selectedValue, setSelectedValue] = useState(0);

  console.log('currentBoardBackground', currentBoardBackground);

  const handleRadioChange = index => {
    setSelectedValue(index);
    const paddedIndex = index.toString().padStart(2, '0');
    const backgroundValue = `${paddedIndex}`;
    onChangeImage(backgroundValue);
  };

  return (
    <StyledRadioWrapper>
      {images.map((image, index) => {
        const id = nanoid();
        return (
          <StyledLabel key={id}>
            <StyledInput
              type="radio"
              value={index}
              name="image"
              checked={selectedValue === index}
              onChange={() => handleRadioChange(index)}
            />
            <img
              src={require(`../../../images/background/${image}`)}
              alt={`option ${index + 1}`}
              width="28px"
              height="28px"
            />
          </StyledLabel>
        );
      })}
    </StyledRadioWrapper>
  );
};

export default RadioImages;
