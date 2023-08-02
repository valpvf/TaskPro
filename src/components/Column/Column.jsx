import icons from '../../images/sprite.svg';
import { BoardItem, IconEdit, IconEditCustom, ProgName } from './Column.styled';

const Column = ({ title }) => {
  return (
    <BoardItem>
      <ProgName>
        <div>{title}</div>
      </ProgName>
      <IconEditCustom>
        <IconEdit>
          <use href={`${icons}#icon-pencil`}></use>
        </IconEdit>
        <IconEdit>
          <use href={`${icons}#icon-trash`}></use>
        </IconEdit>
      </IconEditCustom>
    </BoardItem>
  );
};

export default Column;
