import styled from '@emotion/styled';
import myTheme from 'myTheme';

export const InfoBox = styled.div`
  display: flex;
  justify-content: space-between;

  div {
    display: flex;
    align-items: center;
    gap: ${myTheme.space[3]};
  }

  span {
    font-size: ${myTheme.fontSizes.m};
    display: flex;
    align-items: baseline;
    gap: ${myTheme.space[5]};
  }
`;

export const CategoryName = styled.h4`
  font-size: ${myTheme.fontSizes.l};
  font-weight: ${myTheme.fontWeights.regular};
  transition: ${myTheme.transitionAll.primary};

  :hover {
    color: ${myTheme.colors.accent};
  }
`;

export const CategoryDate = styled.span`
  font-size: ${myTheme.fontSizes.s};
  font-weight: ${myTheme.fontWeights.light};
`;

export const TasksCount = styled.span`
  font-size: ${myTheme.fontSizes.l};
  font-weight: ${myTheme.fontWeights.light};
`;
