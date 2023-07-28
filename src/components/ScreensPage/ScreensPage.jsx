import {
  Container,
  ScreensHeader,
  HeaderTxt,
  HeaderFiltres,
  IconFiltre,
  AddColumn,
  IconPlus,
  ButtonAdd,
} from './ScreensPageStyled';
import icons from '../../images/sprite.svg';

const ScreensPage = () => {
  return (
    <Container>
      <ScreensHeader>
        <HeaderTxt>Project office</HeaderTxt>
        <HeaderFiltres>
          <IconFiltre>
            <use href={`${icons}#icon-filter`}></use>
          </IconFiltre>
          <div>Filtres</div>
        </HeaderFiltres>
      </ScreensHeader>

      <AddColumn>
        <ButtonAdd
        // onClick={handleAddColumnClick}
        >
          <IconPlus>
            <use href={`${icons}#icon-plus-01`}></use>
          </IconPlus>
          Add another column
        </ButtonAdd>
      </AddColumn>
    </Container>
  );
};

export default ScreensPage;
