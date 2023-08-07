// import { nanoid } from 'nanoid';
import {
  ColumnTitle,
  Icon,
  RadioWrapper,
  StyledInput,
  StyledLabel,
} from './RadioTooltip.styled';
import sprite from '../../../images/sprite.svg';
import { useDispatch, useSelector } from 'react-redux';
import { getColumn } from 'redux/task/taskSelectors';
import { replaceCard } from 'redux/task/taskOperations';

const RadioTooltip = ({ onClick, id }) => {
  const [_id, columnID] = id;
  const radioColumns = useSelector(getColumn)
    .map(el => ({
      _id: el._id,
      title: el.title,
    }))
    .filter(col => col._id !== columnID);
  const dispatch = useDispatch();

  const onInputChange = ev => {
    dispatch(replaceCard([_id, ev.target.value, columnID]));
    onClick();
  };

  return (
    <RadioWrapper>
      {radioColumns.map(column => {
        const { title, _id } = column;
        return (
          <StyledLabel key={_id}>
            <StyledInput
              type="radio"
              value={_id}
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
