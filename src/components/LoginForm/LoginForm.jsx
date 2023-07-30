import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from 'redux/auth/authOperations';
import { Formik, Field } from 'formik';
import { setToken } from 'redux/auth/authSelectors';
import {LoginSchema} from '../../Schemas/authSchemas';
import { toast } from 'react-toastify';
import {
	Container,
	Wrapper,
	Navigate,	
	ErrorText,
	PasswordView,
	Inputs,
	PasswordInput,
	PasswordIcon,
	Svg,
} from '../RegisterForm/RegisterForm.styled';
import {RegisterLink, LoginLink, LoginBtn,} from './LoginForm.styled'
import sprite from '../../images/sprite.svg';
import eyeHide from '../../images/eye-hide.svg'


function LoginForm() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async event => {
    event.preventDefault();
    const currentUser = {
      email: event.target.elements.email.value,
      password: event.target.elements.password.value,
    };

    const response = await dispatch(login(currentUser, setToken));

    if (response.error) {
      toast.error(response.payload);
    } else {
      navigate('/home');
    }
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={LoginSchema}
        >
          <Wrapper>
            <Navigate>
              <RegisterLink to="/register" underline="none">
                Registration
              </RegisterLink>
              <LoginLink to="/login" underline="none">
                Log In
              </LoginLink>
            </Navigate>
            <Inputs>
              <Field name="email" type="email" placeholder="Email" />
              <ErrorText name="email" component="div" />
              <PasswordInput>
                <Field
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Password"
                />
                <ErrorText name="password" component="div" />

                <PasswordView
                  className={`${PasswordView} ${PasswordIcon}`}
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? (
                    <PasswordIcon src={eyeHide} />
                  ) : (
                    <Svg>
                      <use stroke="gray" href={`${sprite}#icon-eye`} />
                    </Svg>
                  )}
                </PasswordView>
              </PasswordInput>
            </Inputs>
            <LoginBtn>Log In Now</LoginBtn>
          </Wrapper>
        </Formik>
      </form>
    </Container>
  );
}

export default LoginForm;