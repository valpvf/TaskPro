import { StyledButton } from './Button.styled';
import { StyledEngineProvider } from '@mui/material/styles';

const ButtonMain = ({ children, onClick }) => {
  return (
    <StyledEngineProvider injectFirst>
      <StyledButton onClick={onClick}>{children}</StyledButton>;
    </StyledEngineProvider>
  );
};

export default ButtonMain;
