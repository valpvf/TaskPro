import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Field } from 'formik';
import { getUserData } from 'redux/auth/authSelectors';
import { updateUser } from '../../redux/auth/authOperations';
import { RegisterSchema } from '../../Schemas/authSchemas';
import {
  Wrapper,
  AvatarWrapper,
  FileInputWrapper,
  IconUser,
  AvatarImg,
  Inputs,
  FileInput,
  PasswordView,
  PasswordInput,
  PasswordIcon,
  Svg,
  SendBtn,
  ErrorText,
} from './EditUser.styled';
import sprite from '../../images/sprite.svg';
import eyeHide from '../../images/eye-hide.svg';

function EditUser({ onClose }) {
  const userData = useSelector(getUserData);
  const dispatch = useDispatch();

  const [imageUrl, setImageUrl] = useState('');
  const [imageFile, setImageFile] = useState(null);
  const [userName, setUserName] = useState(userData.name);
  const [userEmail, setUserEmail] = useState(userData.email);
  const [showPassword, setShowPassword] = useState(false);

  const onPasswordVisible = () => {
    setShowPassword(!showPassword);
  };

  useEffect(() => {
    if (imageFile) {
      const reader = new FileReader();

      reader.onload = event => {
        setImageUrl(event.target.result);
      };

      reader.readAsDataURL(imageFile);
    }
  }, [imageFile]);

  const handleFileChange = event => {
    setImageFile(event.target.files[0]);
  };

  const formSubmit = e => {
    e.preventDefault();
    const newUserData = new FormData();
    const { name, email, password } = e.target.elements;

    if (name.value) {
      newUserData.append('name', name.value);
    } else {
      newUserData.append('name', userData.name);
    }
    if (email.value) {
      newUserData.append('email', email.value);
    }

    if (password.value) {
      newUserData.append('password', password.value);
    }
    if (imageFile) {
      newUserData.append('avatar', imageFile);
    }

    dispatch(updateUser(newUserData));
    onClose();
  };

  return (
    <>
      <form onSubmit={formSubmit}>
        <Formik
          initialValues={{
            name: userName,
            email: userEmail,
            password: '',
          }}
          validationSchema={RegisterSchema}
        >
          <Wrapper>
            <AvatarWrapper>
              {!imageUrl && !userData.avatarURL ? (
                <IconUser>
                  <use href={`${sprite}#icon-user`}></use>
                </IconUser>
              ) : (
                <AvatarImg
                  src={imageUrl || userData.avatarURL}
                  alt="avatar"
                  width={68}
                  height={68}
                />
              )}

              <FileInputWrapper>
                <FileInput
                  type="file"
                  onChange={handleFileChange}
                  accept="image/jpeg, image/png, image/gif"
                />
                +
              </FileInputWrapper>
            </AvatarWrapper>

            <Inputs>
              <Field
                autoFocus
                name="name"
                type="text"
                value={userName}
                onChange={e => setUserName(e.target.value)}
              />
              <Field
                name="email"
                type="email"
                value={userEmail}
                onChange={e => setUserEmail(e.target.value)}
              />
              <PasswordInput>
                <Field
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Password"
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
            <SendBtn type="submit">Send</SendBtn>
          </Wrapper>
        </Formik>
      </form>
    </>
  );
}

export default EditUser;