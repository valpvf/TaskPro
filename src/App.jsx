import Home from 'page/Home';
import Welcome from 'page/Welcome';
import { Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

// const Welcome = lazy(() => import('./pages/Welcome'));
// const Home = lazy(() => import('./pages/Home'));

export const App = () => {
  return (
    <Suspense fallback={<h1>Loading ...</h1>}>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route index element={<Welcome />} />
        <Route path="home" element={<Home />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Suspense>
  );
};

export default App;
