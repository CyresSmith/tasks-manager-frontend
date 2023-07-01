import styled from '@emotion/styled';
import myTheme from 'myTheme';

export const Task = styled.li`
  min-height: 250px;
  width: calc(((100% - (${myTheme.space[5]} * 3)) / 4));
  background-color: ${myTheme.colors.secondary};
  color: ${myTheme.colors.white};
  padding: ${myTheme.space[4]};
  border-radius: ${myTheme.radii.high};
  transition: ${myTheme.transitionAll.primary};

  :hover {
    transform: scale(1.05);
    box-shadow: ${myTheme.shadow.medium};
  }
`;

export const TaskName = styled.h3`
  font-size: ${myTheme.fontSizes.l};
  font-weight: ${myTheme.fontWeights.regular};
  margin-bottom: ${myTheme.space[3]};
  padding-bottom: ${myTheme.space[3]};
  border-bottom: solid 1px ${myTheme.colors.white};
`;

export const Info = styled.div`
  font-size: ${myTheme.fontSizes.m};
  font-weight: ${myTheme.fontWeights.regular};
  display: flex;
  flex-direction: column;
`;

export const Desc = styled.p``;

export const DateBox = styled.p`
  display: flex;
  flex-direction: column;
  margin-bottom: ${myTheme.space[3]};
`;

export const TaskDate = styled.span`
  font-size: ${myTheme.fontSizes.m};
  font-weight: ${myTheme.fontWeights.light};
`;
