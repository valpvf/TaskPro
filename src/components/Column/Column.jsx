import { useState } from 'react';
import { useDispatch } from 'react-redux';
import EllipsisText from 'react-ellipsis-text';
import PropTypes from 'prop-types';
import icons from '../../images/sprite.svg';
import { BoardItem, IconEdit, IconEditCustom, ProgName } from './Column.styled';
import ModalColumn from 'components/ModalColumn/ModalColumn';
import { deleteColumn } from 'redux/task/taskOperations';
import ModalConfirm from 'shared/components/modalConfirm/ModalConfirm';

const Column = ({ title, columnId }) => {
  const [showModal, setShowModal] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const dispatch = useDispatch();

  const handleOpen = () => {
    setShowConfirm(true);
  };

  const handleClose = () => {
    setShowConfirm(false);
  };

  const onOpen = () => {
    setShowModal(true);
  };
  const onClose = () => {
    setShowModal(false);
  };

  const handleDelete = () => {
    dispatch(deleteColumn(columnId));
    setShowConfirm(false);
  };

  return (
    <BoardItem>
      <ProgName>
        <div>
          <EllipsisText text={title} length={'30'} />
        </div>
      </ProgName>
      <IconEditCustom>
        <IconEdit onClick={onOpen}>
          <use href={`${icons}#icon-pencil`}></use>
        </IconEdit>
        <IconEdit onClick={handleOpen}>
          <use href={`${icons}#icon-trash`}></use>
        </IconEdit>
      </IconEditCustom>
      {showModal && (
        <ModalColumn
          onClose={onClose}
          title="Edit column"
          btnName="Edit"
          columnTitle={title}
          column={columnId}
        />
      )}
      {showConfirm && (
        <ModalConfirm onClose={handleClose} onConfirm={handleDelete} />
      )}
    </BoardItem>
  );
};

EllipsisText.propTypes = {
  text: PropTypes.string.isRequired,
  length: PropTypes.string.isRequired,
};

export default Column;
