import {
  StyledInput,
  StyledLabel,
  StyledRadioWrapper,
} from './RadioImages.styled';

const RadioImages = () => {
  return (
    <StyledRadioWrapper>
      <StyledLabel>
        <StyledInput type="radio" value="01" name="image" defaultChecked />
        <img
          src={require('../../../images/background/00.png')}
          alt="option 1"
          width="28px"
          height="28px"
        />
      </StyledLabel>
      <StyledLabel>
        <StyledInput type="radio" value="02" name="image" />
        <img
          src={require('../../../images/background/01.png')}
          alt="option 2"
          width="28px"
          height="28px"
        />
      </StyledLabel>
      <StyledLabel>
        <StyledInput type="radio" value="03" name="image" />
        <img
          src={require('../../../images/background/02.png')}
          alt="option 3"
          width="28px"
          height="28px"
        />
      </StyledLabel>
      <StyledLabel>
        <StyledInput type="radio" value="04" name="image" />
        <img
          src={require('../../../images/background/03.png')}
          alt="option 4"
          width="28px"
          height="28px"
        />
      </StyledLabel>
      <StyledLabel>
        <StyledInput type="radio" value="05" name="image" />
        <img
          src={require('../../../images/background/04.png')}
          alt="option 5"
          width="28px"
          height="28px"
        />
      </StyledLabel>
      <StyledLabel>
        <StyledInput type="radio" value="06" name="image" />
        <img
          src={require('../../../images/background/05.png')}
          alt="option 6"
          width="28px"
          height="28px"
        />
      </StyledLabel>
      <StyledLabel>
        <StyledInput type="radio" value="07" name="image" />
        <img
          src={require('../../../images/background/06.png')}
          alt="option 7"
          width="28px"
          height="28px"
        />
      </StyledLabel>
      <StyledLabel>
        <StyledInput type="radio" value="08" name="image" />
        <img
          src={require('../../../images/background/07.png')}
          alt="option 8"
          width="28px"
          height="28px"
        />
      </StyledLabel>
      <StyledLabel>
        <StyledInput type="radio" value="09" name="image" />
        <img
          src={require('../../../images/background/08.png')}
          alt="option 9"
          width="28px"
          height="28px"
        />
      </StyledLabel>
      <StyledLabel>
        <StyledInput type="radio" value="10" name="image" />
        <img
          src={require('../../../images/background/09.png')}
          alt="option 10"
          width="28px"
          height="28px"
        />
      </StyledLabel>
      <StyledLabel>
        <StyledInput type="radio" value="11" name="image" />
        <img
          src={require('../../../images/background/10.png')}
          alt="option 11"
          width="28px"
          height="28px"
        />
      </StyledLabel>
      <StyledLabel>
        <StyledInput type="radio" value="12" name="image" />
        <img
          src={require('../../../images/background/11.png')}
          alt="option 12"
          width="28px"
          height="28px"
        />
      </StyledLabel>
      <StyledLabel>
        <StyledInput type="radio" value="13" name="image" />
        <img
          src={require('../../../images/background/12.png')}
          alt="option 13"
          width="28px"
          height="28px"
        />
      </StyledLabel>
      <StyledLabel>
        <StyledInput type="radio" value="14" name="image" />
        <img
          src={require('../../../images/background/13.png')}
          alt="option 14"
          width="28px"
          height="28px"
        />
      </StyledLabel>
      <StyledLabel>
        <StyledInput type="radio" value="15" name="image" />
        <img
          src={require('../../../images/background/14.png')}
          alt="option 15"
          width="28px"
          height="28px"
        />
      </StyledLabel>
      <StyledLabel>
        <StyledInput type="radio" value="16" name="image" />
        <img
          src={require('../../../images/background/15.png')}
          alt="option 16"
          width="28px"
          height="28px"
        />
      </StyledLabel>
    </StyledRadioWrapper>
  );
};

export default RadioImages;
