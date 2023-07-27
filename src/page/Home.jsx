import Header from 'components/Header/Header';
import ScreensPage from 'components/ScreensPage/ScreensPage';
import Sidebar from 'components/Sidebar/Sidebar';
import { useState } from 'react';
// import ModalCard from 'components/ModalCard/ModalCard';
import ModalNeedHelp from 'components/ModalNeedHelp/ModalNeedHelp';

const Home = () => {
  const [showModal, setShowModal] = useState(false);

  const onOpen = () => {
    setShowModal(true);
  };
  const onClose = () => {
    setShowModal(false);
  };

  return (
    <>
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <div
          style={{
            flexGrow: '1',
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Header />
          <ScreensPage />
          <button type="button" onClick={onOpen}>
            OPEN
          </button>
          {showModal && <ModalNeedHelp onClose={onClose} />};
        </div>
      </div>
    </>
  );
};

export default Home;
