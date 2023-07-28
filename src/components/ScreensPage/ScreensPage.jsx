import { useState } from 'react';
import { Container } from './ScreensPageStyled';
import Card from 'components/Card/Card';
import ModalColumn from 'components/ModalColumn/ModalColumn';
const ScreensPage = () => {
  const [showModal, setShowModal] = useState(false);

  const onOpen = () => {
    setShowModal(true);
  };
  const onClose = () => {
    setShowModal(false);
  };

  return (
    <Container>
      {/* Кнопка для створення нової колонки */}
      <button
        type="button"
        // onClick={handleAddColumnClick}
        onClick={onOpen}
      >
        Add Column
      </button>

      {/* Тут можуть бути ваші колонки з картками */}
      <Card />
      <Card />
      <Card />
      {showModal && <ModalColumn onClose={onClose} />}
    </Container>
  );
};

export default ScreensPage;
