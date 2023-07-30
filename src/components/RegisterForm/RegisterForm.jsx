import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Formik, Field } from 'formik';
import { toast } from 'react-toastify';
import { register } from '../../redux/auth/authOperations';
import { RegisterSchema } from '../../Schemas/authSchemas';
import {
	Container,
	Wrapper,
	Navigate,
	RegisterLink,
	LoginLink,
	ErrorText,
	PasswordView,
	Inputs,
	PasswordInput,
	PasswordIcon,
	Svg,
	RegisterBtn,
} from './RegisterForm.styled';
import sprite from '../../images/sprite.svg';
import eyeHide from '../../images/eye-hide.svg'

function RegisterForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async event => {
    event.preventDefault();
    const newUser = {
      name: event.target.elements.name.value,
      email: event.target.elements.email.value,
      password: event.target.elements.password.value,
    };

    const response = await dispatch(register(newUser));

    if (response.error) {
		toast(response.payload);
    } else {
		navigate('/home');
    }
  };

	return (
    <Container>
      <form onSubmit={handleSubmit}>
        <Formik
          initialValues={{ name: '', email: '', password: '' }}
          validationSchema={RegisterSchema}
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
              <Field autoFocus name="name" type="text" placeholder="Name" />
              <ErrorText name="name" component="div" />
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
            <RegisterBtn type="submit">Register Now</RegisterBtn>
          </Wrapper>
        </Formik>
      </form>
    </Container>
  );
}

export default RegisterForm;