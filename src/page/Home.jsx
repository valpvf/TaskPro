import Header from 'components/Header/Header';
import ScreensPage from 'components/ScreensPage/ScreensPage';
import Sidebar from 'components/Sidebar/Sidebar';
import Backdrop from '../components/Sidebar/Backdrop';
import { useEffect } from 'react';
import { useState } from 'react';

const Home = () => {
  const [showSidebar, setShowSidebar] = useState(true);
  const [isBoardActive, setIsBoardActive] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const handleWindowResize = () => {
    if (window.innerWidth < 1440) {
      setShowSidebar(false);
    } else {
      setShowSidebar(true);
    }
  };
  useEffect(() => {
    window.addEventListener('resize', handleWindowResize);
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  return (
    <>
      <div style={{ display: 'flex' }}>
        {showSidebar && <Sidebar setIsBoardActive={setIsBoardActive} />}
        {showSidebar && <Backdrop onClick={toggleSidebar} />}
        <div
          style={{
            flexGrow: '1',
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Header onToggleSidebar={toggleSidebar} />
          <ScreensPage isBoardActive={isBoardActive} />
        </div>
      </div>
    </>
  );
};

export default Home;
