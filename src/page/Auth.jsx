import { useParams } from 'react-router-dom';
import RegisterForm from '../components/RegisterForm/RegisterForm'
import LoginForm from '../components/LoginForm/LoginForm'
import { ToastContainer } from 'react-toastify';

const Auth = () => {
	const {register} = useParams();
	
  return (
	  <div>
      {register === 'register' && <RegisterForm /> }
      {register === 'login' && <LoginForm />}
      <ToastContainer />
    </div>
  );
};
export default Auth;
