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

  const [selectedFile, setSelectedFile] = useState(null);
  const [imageUrl, setImageUrl] = useState('');
  const [profileName, setProfileName] = useState(userData.name);
  const [profileEmail, setProfileEmail] = useState(userData.email);
  const [showPassword, setShowPassword] = useState(false);

  const onPasswordVisible = () => {
    setShowPassword(!showPassword);
  };

  useEffect(() => {
    if (selectedFile) {
      const reader = new FileReader();

      reader.onload = event => {
        setImageUrl(event.target.result);
      };

      reader.readAsDataURL(selectedFile);
    }
  }, [selectedFile]);

  const handleFileChange = event => {
    setSelectedFile(event.target.files[0]);
  };

  const formSubmit = e => {
    e.preventDefault();
    const formData = new FormData();
    const { name, email, password } = e.currentTarget.elements;
    if (name.value) {
      formData.append('name', name.value);
    } else {
      formData.append('name', userData.name);
    }
    if (email.value) {
      formData.append('email', email.value);
    }

    if (password.value) {
      formData.append('password', password.value);
    }
    if (selectedFile) {
      formData.append('avatar', selectedFile);
    }

    dispatch(updateUser(formData));
    onClose();
  };

  return (
    <>
      <form onSubmit={formSubmit}>
        <Formik
          initialValues={{
            name: profileName,
            email: profileEmail,
            password: '',
          }}
          validationSchema={RegisterSchema}
        >
          <Wrapper>
            <AvatarWrapper>
              {(!imageUrl) && (!userData.avatarURL) ? (
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
                value={profileName}
                onChange={e => setProfileName(e.target.value)}
              />
              <Field
                name="email"
                type="email"
                value={profileEmail}
                onChange={e => setProfileEmail(e.target.value)}
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
