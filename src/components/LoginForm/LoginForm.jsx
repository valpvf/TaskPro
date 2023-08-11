import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { Formik, Field, Form } from 'formik';

import { login } from 'redux/auth/authOperations';
import { setToken } from 'redux/auth/authSelectors';
import { LoginSchema } from '../../Schemas/authSchemas';
import sprite from '../../images/sprite.svg';
import eyeHide from '../../images/eye-hide.svg';
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
import { RegisterLink, LoginLink, LoginBtn } from './LoginForm.styled';

function LoginForm() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();

  const onPasswordVisible = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (values, { resetForm }) => {
    const currentUser = { ...values };
    const response = await dispatch(login(currentUser, setToken));
    if (response.error) {
      toast.error(response.payload);
    } else {
      navigate('/home');
    }
    resetForm();
  };

  return (
    <Container>
      <div>
        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={LoginSchema}
          onSubmit={handleSubmit}
        >
          {({ handleChange, values }) => (
            <Form>
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
                  <Field
                    name="email"
                    type="email"
                    placeholder="Email"
                    onChange={handleChange('email')}
                    value={values.email || ''}
                  />
                  <ErrorText name="email" component="div" />
                  <PasswordInput>
                    <Field
                      name="password"
                      type={showPassword ? 'text' : 'password'}
                      placeholder="Password"
                      onChange={handleChange('password')}
                      value={values.password || ''}
                    />
                    <ErrorText name="password" component="div" />

                    <PasswordView
                      className={`${PasswordView} ${PasswordIcon}`}
                      onClick={onPasswordVisible}
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
                <LoginBtn type="submit">Log In Now</LoginBtn>
              </Wrapper>
            </Form>
          )}
        </Formik>
      </div>
    </Container>
  );
}

export default LoginForm;
