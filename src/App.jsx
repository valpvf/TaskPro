import Auth from 'page/Auth';
// import Home from 'page/Home';
// import Welcome from 'page/Welcome';
import { Suspense, lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

const Welcome = lazy(() => import('page/Welcome'));
const Home = lazy(() => import('page/Home'));

export const App = () => {
  return (
    <Suspense fallback={<h1>Loading ...</h1>}>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route index element={<Welcome />} />
        <Route path="auth" element={<Auth />} />
        <Route path="auth/:login" element={<Auth />} />
        <Route path="auth/:register" element={<Auth />} />
        <Route path="home" element={<Home />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Suspense>
  );
};

export default App;
