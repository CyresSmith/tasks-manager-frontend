import styled from '@emotion/styled';
import myTheme from 'myTheme';

export const Box = styled.div`
  margin-bottom: ${myTheme.space[4]};
  padding-bottom: ${myTheme.space[4]};
  border-bottom: 2px solid ${myTheme.colors.secondary};
`;

export const Title = styled.h1`
  font-size: ${myTheme.fontSizes.xxl};
  font-weight: ${myTheme.fontWeights.bold};
  margin-bottom: ${myTheme.space[4]};
`;

export const TaskDate = styled.p`
  font-weight: ${myTheme.fontWeights.regular};
  display: flex;
  flex-direction: column;
  gap: ${myTheme.space[2]};
  margin-bottom: ${myTheme.space[4]};
`;

export const Desc = styled.div`
  font-weight: ${myTheme.fontWeights.regular};
`;
