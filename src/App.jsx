import { Suspense, lazy, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import { PrivateRoute, RestrictedRoute } from 'components/AuthRoutes';
import { refreshUser } from 'redux/auth/authOperations';
import { isLogin, isRefreshing } from 'redux/auth/authSelectors';
import Loader from 'components/Loader/Loader';

const WelcomePage = lazy(() => import('page/WelcomePage'));
const Auth = lazy(() => import('page/Auth'));
const Home = lazy(() => import('page/Home'));

export const App = () => {
  const dispatch = useDispatch();

	const isRefreshUser = useSelector(isRefreshing);
	const isAuth = useSelector(isLogin);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={isAuth ? (<Navigate to='/home' replace={true} />) : (<WelcomePage />)} />

          <Route
            path="/:id"
            element={<RestrictedRoute component={Auth} redirectTo="/home" />}
          />
          <Route
            path="/home"
            element={<PrivateRoute component={Home} redirectTo="/" />}
          ></Route>
          <Route path="*" element={<WelcomePage />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default App;

// isRefreshUser ? (
//     <Loader />
//   ) : 