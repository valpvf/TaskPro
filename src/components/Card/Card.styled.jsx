import styled from '@emotion/styled';

export const CardWrapper = styled.div`
  &:not(:first-of-type) {
    margin-top: 10px;
  }
  position: relative;
  height: 130px;
  margin-right: 5px;
  /* background-color: #121212; */
  background-color: var(--primary-card-background-color);
  width: 334px;
  border-radius: 8px;
  padding: 15px 15px 5px 15px;
  border-left: 4px solid
    ${props => {
      if (props.priority === 'Low') return '#8fa1d0';
      if (props.priority === 'Medium') return '#E09CB5';
      if (props.priority === 'High') return '#BEDBB0';
      return '#5b5b5b';
    }};
`;
export const PriorityWrapper = styled.div`
  display: flex;
  position: relative;
  gap: 12px;
`;
export const CardFooter = styled.div`
  display: flex;
  align-items: center;
`;
export const Title = styled.h4`
  margin-bottom: 10px;
  font-weight: 600;
  font-size: 14px;
  /* color: white; */
  color: var(--primary-heading-color);
`;
export const SubTitle = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 1.5;
  color: var(--primary-text-color);
  max-width: 290px;
  height: 35px;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export const PrioryTitle = styled.p`
  font-weight: 400;
  font-size: 8px;
  /* color: #999999; */
  color: var(----secondary-deadline-color);
  margin: 0;
`;

export const PriorySubTitle = styled.h5`
  display: flex;
  align-items: center;
  gap: 5px;
  font-weight: 400;
  font-size: 10px;
  /* color: white; */
  color: var(--primary-heading-color);
  margin: 0;
`;
export const DeadlineSubTitle = styled.h5`
  font-weight: 400;
  font-size: 10px;
  /* color: white; */
  color: var(--primary-heading-color);
  margin: 0;
`;
export const DeadlineTitle = styled.p`
  margin-bottom: 10px;
  font-weight: 400;
  font-size: 8px;
  /* color: #999999; */
  color: var(--secondary-deadline-color);
`;
export const Ball = styled.hr`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: #8fa1d0;
  background-color: var(--primary-priority-color);
  border: none;
  margin: 10px 0;
  background-color: ${props => {
    if (props.priority === 'Low') return '#8fa1d0';
    if (props.priority === 'Medium') return '#E09CB5';
    if (props.priority === 'High') return '#BEDBB0';
    return '#535353';
  }};
`;
export const Line = styled.hr`
  border: 1px solid #232323;
  border: 1px solid var(--secondary-line-color);
  margin: 5px 0;
`;

export const Icon = styled.svg`
  /* stroke: #949393; */
  stroke: var(--tertiary-priority-color);
  transition: box-shadow 0.3s;
  cursor: pointer;
  fill: none;
  &:hover,
  &:focus {
    /* stroke: #bedbb0; */
    stroke: var(--primary-button-color);
    /* filter: drop-shadow(0 0 5px #bedbb0); */
    filter: drop-shadow(0 0 5px var(--primary-button-color));
  }
`;
export const Bell = styled.svg`
  /* stroke: #949393; */
  stroke: var(--primary-button-color);
  transition: box-shadow 0.3s;
  cursor: pointer;
  fill: none;
  filter: drop-shadow(0 0 5px var(--primary-button-color));
  &:hover,
  &:focus {
    stroke: #b2fc8d;
    filter: drop-shadow(0 0 5px var #b2fc8d);
  }
`;

export const IconWrapper = styled.div`
  position: absolute;
  right: ${props => (props.isEqualDate ? '202px' : '5px')};
  top: 10px;
  display: flex;
  align-items: center;
  gap: 10px;
`;
