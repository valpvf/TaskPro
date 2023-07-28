import Header from 'components/Header/Header';
import ScreensPage from 'components/ScreensPage/ScreensPage';
import Sidebar from 'components/Sidebar/Sidebar';

const Home = () => {
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
        </div>
      </div>
    </>
  );
};

export default Home;
