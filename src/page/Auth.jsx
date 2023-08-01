import { useParams } from 'react-router-dom';
import RegisterForm from '../components/RegisterForm/RegisterForm';
import LoginForm from '../components/LoginForm/LoginForm';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Auth = () => {
  const { id } = useParams();

  return (
    <div>
      {id === 'register' && <RegisterForm />}
      {id === 'login' && <LoginForm />}
      <ToastContainer
        position="top-center"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
};
export default Auth;
