
// import Loader from 'components/Loader/Loader';
// import { PrivateRouter } from 'components/PrivateRoute';
import { Suspense, lazy} from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
// import { refreshUser } from 'redux/auth/authOperations';
// import { isLoggedIn, isRefreshing } from 'redux/auth/authSelectors';

const WelcomePage = lazy(() => import('page/WelcomePage'));
const Auth = lazy(() => import('page/Auth'));
const Home = lazy(() => import('page/Home'));

export const App = () => {
// 	const dispatch = useDispatch();

//   const refreshing = useSelector(isRefreshing);
//   const loggedUser = useSelector(isLoggedIn);

//   useEffect(() => {
//     dispatch(refreshUser());
//   }, [dispatch]);
	

	
  return (
	  <Suspense fallback={<h1>Loading ...</h1>}>
		  
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route index element={<WelcomePage />} />
        <Route path="/:register" element={<Auth />} />
        <Route path="/:login" element={<Auth />} />
        <Route path="home" element={<Home />} />
		<Route path="*" element={<Navigate to="/" />} />
			  
			  {/* <Route
            path="/"
            element={
              loggedUser ? (
                <Navigate to="/home" replace={true} />
              ) : (
                <WelcomePage />
              )
            }
          />
          <Route path="/welcome" element={<WelcomePage />} />
          <Route path="/auth/:id" element={<Auth />} />
          <Route
            path="/home"
            element={
              loggedUser ? (
                <PrivateRouter component={<Home />} />
              ) : (
                <Navigate to="/" replace={true} />
              )
            }
          >
            <Route index element={<Home />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Route> */}
      </Routes>
    </Suspense>
  );
};

export default App;
