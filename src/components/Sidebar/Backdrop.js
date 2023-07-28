import styled from '@emotion/styled';

const BackdropContainer = styled.div`
  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 10;
  }
`;

const Backdrop = ({ onClick }) => {
  return <BackdropContainer onClick={onClick} />;
};

export default Backdrop;
