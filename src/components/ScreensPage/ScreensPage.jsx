import { Container } from './ScreensPageStyled';
import Card from 'components/Card/Card';
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
      <Card />
    </Container>
  );
};

export default ScreensPage;
