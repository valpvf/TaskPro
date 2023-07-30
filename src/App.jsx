import Auth from 'page/Auth';
// import Home from 'page/Home';
// import Welcome from 'page/Welcome';
import { Suspense, lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import RadioColored from 'shared/components/radioButtons/RadioColored';
import RadioFilters from 'shared/components/radioButtons/RadioFilters';

const WelcomePage = lazy(() => import('page/WelcomePage'));
const Home = lazy(() => import('page/Home'));

export const App = () => {
  return (
    <Suspense fallback={<h1>Loading ...</h1>}>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route index element={<WelcomePage />} />
        <Route path="auth" element={<Auth />} />
        <Route path="auth/:login" element={<Auth />} />
        <Route path="auth/:register" element={<Auth />} />
        <Route path="home" element={<Home />} />
        <Route path="radio/colored" element={<RadioColored />} />
        <Route path="radio/filters" element={<RadioFilters />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Suspense>
  );
};

export default App;
