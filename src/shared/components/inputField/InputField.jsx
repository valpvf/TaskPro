import { StyledInputField } from './InputField.styled';

export default function InputField({ text, id, name, type, value, onChange }) {
  return (
    <StyledInputField
      placeholder={text}
      id={id}
      name={name}
      type={type}
      value={value || ''}
      onChange={onChange}
    ></StyledInputField>
  );
}
