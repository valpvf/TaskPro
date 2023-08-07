import * as Yup from 'yup';

export const RegisterSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string()
    .email('Invalid email')
    .required('Email is required')
    .matches(
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    ),
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .matches(/^[a-zA-Z0-9]+$/)
    .required('Password is required'),
});

export const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email')
    .required('Email is required')
    .matches(
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    ),
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .matches(/^[a-zA-Z0-9]+$/)
    .required('Password is required'),
});

export const UpdateUserSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email')
    .matches(
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    ),
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .matches(/^[a-zA-Z0-9]+$/),
});
