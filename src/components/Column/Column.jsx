import { useState } from 'react';
import icons from '../../images/sprite.svg';
import { BoardItem, IconEdit, IconEditCustom, ProgName } from './Column.styled';
import ModalColumn from 'components/ModalColumn/ModalColumn';

const Column = ({ title }) => {
  const [showModal, setShowModal] = useState(false);

  const onOpen = () => {
    setShowModal(true);
  };
  const onClose = () => {
    setShowModal(false);
  };

  return (
    <BoardItem>
      <ProgName>
        <div>{title}</div>
      </ProgName>
      <IconEditCustom>
        <IconEdit onClick={onOpen}>
          <use href={`${icons}#icon-pencil`}></use>
        </IconEdit>
        {showModal && (
          <ModalColumn
            onClose={onClose}
            title="Edit column"
            btnName="Edit"
            columnTitle={title}
          />
        )}
        <IconEdit>
          <use href={`${icons}#icon-trash`}></use>
        </IconEdit>
      </IconEditCustom>
    </BoardItem>
  );
};

export default Column;
