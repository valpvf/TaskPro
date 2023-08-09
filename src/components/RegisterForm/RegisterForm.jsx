import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Formik, Field, Form } from 'formik';
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
import eyeHide from '../../images/eye-hide.svg';

function RegisterForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [showPassword, setShowPassword] = useState(false);

  const onPasswordVisible = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (values, { resetForm }) => {
    const newUser = {
      ...values,
    };
    const response = await dispatch(register(newUser));

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
          initialValues={{
            name: '',
            email: '',
            password: '',
          }}
          validationSchema={RegisterSchema}
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
                    autoFocus
                    name="name"
                    type="text"
                    placeholder="Name"
                    onChange={handleChange('name')}
                    value={values.name || ''}
                  />
                  <ErrorText name="name" component="div" />
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
                <RegisterBtn type="submit">Register Now</RegisterBtn>
              </Wrapper>
            </Form>
          )}
        </Formik>
      </div>
    </Container>
  );
}

export default RegisterForm;
