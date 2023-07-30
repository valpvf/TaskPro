import { ErrorTextStyled } from './InputErrorMessage.styled';

const InputErrorMessage = ({ name, component }) => {
  return <ErrorTextStyled name={name} component={component} />;
};

export default InputErrorMessage;
