import styled from '@emotion/styled';

// Імпортуйте ваш Redux slice

export const Container = styled.div`
  /* background-color: #1f1f1f; */
  background-color: var(--secondary-background-color);
  background-position-y: bottom;
  background-position-x: center;
  background-repeat: no-repeat;
  background-size: cover;
  flex-grow: 1;
  padding-left: 24px;
  padding-right: 24px;
  padding-bottom: 5px;

  @media screen and (min-width: 320px) {
    padding-left: 10px;
    background-image: ${props =>
      props.isBoardActive && `url('images/background/${props.picture}m.jpg')`};
    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: ${props =>
        props.isBoardActive &&
        `url('images/background/${props.picture}m2.jpg')`};
    }
  }

  @media screen and (min-width: 768px) {
    background-image: ${props =>
      props.isBoardActive && `url('images/background/${props.picture}t.jpg')`};
    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: ${props =>
        props.isBoardActive &&
        `url('images/background/${props.picture}t2.jpg')`};
    }
  }

  @media screen and (min-width: 1440px) {
    background-image: ${props =>
      props.isBoardActive && `url('images/background/${props.picture}d.jpg')`};
    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: ${props =>
        props.isBoardActive &&
        `url('images/background/${props.picture}d2.jpg')`};
    }
  }
`;

export const TutorialContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TutorialTitle = styled.p`
  display: block;
  width: 486px;
  text-align: center;
  font-family: Poppins;
  line-height: calc(18 / 14);
  letter-spacing: -0.28px;
  color: var(--screens-page-tutorial-text-color);

  @media screen and (max-width: 320px) {
    font-size: 12px;
    line-height: calc(16 / 12);
  }
`;

export const TutorialSelected = styled.span`
  color: var(--primary-button-color);
`;

export const ScreensHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding-top: 10px;
  padding-bottom: 10px;

  @media screen and (max-width: 767.8px) {
    flex-wrap: wrap;
    max-width: 168px;
  }
`;

export const HeadersWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const HeaderTxt = styled.div`
  font-size: 18px;
  font-weight: 500;
  line-height: 27px;
  letter-spacing: -0.02em;
  color: var(--primary-heading-color);
`;

export const HeaderFiltres = styled.div`
  display: flex;
  align-items: center;

  font-size: 14px;
  font-weight: 500;
  line-height: 21px;
  letter-spacing: -0.02em;

  cursor: pointer;
`;

export const HeaderAddColumn = styled(HeaderFiltres)`
  margin-left: auto;
  margin-right: 58px;

  cursor: pointer;

  @media screen and (max-width: 767.8px) {
    margin: 0;
  }
`;

export const IconFiltre = styled.svg`
  width: 16px;
  height: 16px;
  margin-right: 8px;

  fill: none;
  /* stroke: white; */
  stroke: var(--primary-icon-stroke-color);
`;

export const IconPlusFilters = styled(IconFiltre)`
  width: 24px;
  height: 18px;

  stroke-width: 2px;
`;

export const AddColumn = styled.div`
  display: flex;
  align-items: center;
  max-height: 500px; /* Adjust the height as needed */
  overflow-y: auto;

  width: 334px;
  height: 56px;
  /* background-color: #121212; */
  background-color: var(--add-column-button-color);

  border-radius: 8px;
`;

export const IconPlus = styled.svg`
  width: 32px;
  height: 32px;
  /* fill: white; */
  fill: var(--column-icon-plus-color);
  stroke: var(--column-icon-plus-stroke-color);
  margin-right: 8px;
`;

export const ColumnsContainer = styled.div`
  display: flex;
  text-align: justify;
  justify-items: center;
  gap: 22px;
  max-width: 75vw;
  overflow-x: auto;

  ::-webkit-scrollbar {
    background-color: var(--scrollbar-base-color);
    border-radius: 10px;
    width: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: var(--scrollbar-background-color);
    border-radius: 10px;
  }
  @media (min-width: 1600px) {
    max-width: 95vw;
    ::-webkit-scrollbar {
      background-color: var(--scrollbar-base-color);
      border-radius: 10px;
      width: 10px;
    }

    ::-webkit-scrollbar-thumb {
      background-color: var(--scrollbar-background-color);
      border-radius: 10px;
    }
  }
  @media (min-width: 720px) and (max-width: 1440px) {
    flex-shrink: 0;
    max-height: 95vh;
    max-width: 95vw;
    overflow-y: auto;
    ::-webkit-scrollbar {
      background-color: var(--scrollbar-base-color);
      border-radius: 10px;
      width: 10px;
    }

    ::-webkit-scrollbar-thumb {
      background-color: var(--scrollbar-background-color);
      border-radius: 10px;
    }
  }
  @media (min-width: 320px) and (max-width: 720px) {
    flex-shrink: 0;
    max-width: 92vw;
    overflow-y: auto;
    ::-webkit-scrollbar {
      background-color: var(--scrollbar-base-color);
      border-radius: 10px;
      width: 10px;
    }

    ::-webkit-scrollbar-thumb {
      background-color: var(--scrollbar-background-color);
      border-radius: 10px;
    }
  }
`;

export const ButtonAdd = styled.button`
  margin-left: 80px;
  /* color: white; */
  color: var(--primary-heading-color);
  display: flex;
  align-items: center;
  border: none;
  font-size: 14px;
  font-weight: 500;
  line-height: 21px;
  letter-spacing: -0.02em;
`;

export const ColumnWrapper = styled.div`
  flex-shrink: 0;
  max-height: 60vh;
  overflow-y: auto;
  ::-webkit-scrollbar {
    background-color: var(--scrollbar-base-color);
    border-radius: 10px;
    width: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: var(--scrollbar-background-color);
    border-radius: 10px;
  }
  @media (min-width: 1600px) {
    flex-shrink: 0;
    max-height: 75vh;
    overflow-y: auto;
    ::-webkit-scrollbar {
      background-color: var(--scrollbar-base-color);
      border-radius: 10px;
      width: 10px;
    }

    ::-webkit-scrollbar-thumb {
      background-color: var(--scrollbar-background-color);
      border-radius: 10px;
    }
  }
  @media (min-width: 720px) and (max-width: 1440px) {
    flex-shrink: 0;
    max-height: 62vh;
    overflow-y: auto;
    ::-webkit-scrollbar {
      background-color: var(--scrollbar-base-color);
      border-radius: 10px;
      width: 10px;
    }

    ::-webkit-scrollbar-thumb {
      background-color: var(--scrollbar-background-color);
      border-radius: 10px;
    }
  }
  @media (min-width: 320px) and (max-width: 720px) {
    flex-shrink: 0;
    max-height: 62vh;
    overflow-y: auto;
    ::-webkit-scrollbar {
      background-color: var(--scrollbar-base-color);
      border-radius: 10px;
      width: 10px;
    }

    ::-webkit-scrollbar-thumb {
      background-color: var(--scrollbar-background-color);
      border-radius: 10px;
    }
  }
`;
