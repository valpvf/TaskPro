import { Container } from './ScreensPageStyled';

const ScreensPage = () => {
  return (
    <Container>
      {/* Кнопка для створення нової колонки */}
      <button
      // onClick={handleAddColumnClick}
      >
        Add Column
      </button>

      {/* Тут можуть бути ваші колонки з картками */}
    </Container>
  );
};

export default ScreensPage;
