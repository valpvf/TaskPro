import styled from '@emotion/styled';
import { ErrorMessage } from 'formik';
import '../../basicStyles/variables.scss';

export const ErrorTextStyled = styled(ErrorMessage)`
  position: absolute;
  margin-top: 2px;
  font-size: 14px;
  color: var(--radio-label-pink-color);
`;
