import { nanoid } from 'nanoid';
import {
  ColumnTitle,
  Icon,
  RadioWrapper,
  StyledInput,
  StyledLabel,
} from './RadioTooltip.styled';
import sprite from '../../../images/sprite.svg';

const RadioTooltip = ({ onClick }) => {
  const radioColumns = [
    { title: 'In Progress', id: nanoid() },
    { title: 'Done', id: nanoid() },
  ];

  const onInputChange = ev => {
    console.log(ev.target.value);
    onClick();
  };

  return (
    <RadioWrapper>
      {radioColumns.map(column => {
        const { title, id } = column;
        return (
          <StyledLabel key={id}>
            <StyledInput
              type="radio"
              value={id}
              name="tooltip"
              onClick={onInputChange}
            />
            <ColumnTitle>{title}</ColumnTitle>{' '}
            <Icon width="16px" height="16px">
              <use href={`${sprite}#icon-goto`}></use>
            </Icon>
          </StyledLabel>
        );
      })}
    </RadioWrapper>
  );
};

export default RadioTooltip;
