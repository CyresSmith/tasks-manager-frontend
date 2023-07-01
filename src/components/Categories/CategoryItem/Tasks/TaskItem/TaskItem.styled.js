import styled from '@emotion/styled';
import myTheme from 'myTheme';

export const Task = styled.li`
  padding: ${myTheme.space[1]} ${myTheme.space[3]};
  border-radius: ${myTheme.radii.normal};
  transition: ${myTheme.transitionAll.primary};

  :not(:last-of-type) {
    margin-bottom: ${myTheme.space[3]};
  }
  :hover {
    background-color: rgba(255, 255, 255, 0.2);
    cursor: pointer;
  }
`;

export const TaskInfo = styled.p`
  font-size: ${myTheme.fontSizes.s};
  font-weight: ${myTheme.fontWeights.light};
  display: flex;
  align-items: baseline;
  gap: ${myTheme.space[4]};
`;

export const TaskName = styled.span`
  font-size: ${myTheme.fontSizes.m};
  font-weight: ${myTheme.fontWeights.regular};
`;
