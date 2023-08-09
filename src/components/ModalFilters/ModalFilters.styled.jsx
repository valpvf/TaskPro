import styled from '@emotion/styled';
import '../../shared/basicStyles/variables.scss';

export const FormStyled = styled.form`
  padding-top: 14px;
  border-top: 1px solid var(--modal-filter-form-line);
`;

export const BoxStyled = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 14px;
`;

export const SubtitleStyled = styled.p`
  color: var(--modal-filters-text);
  font-family: 'Poppins', sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: -0.28px;
`;
