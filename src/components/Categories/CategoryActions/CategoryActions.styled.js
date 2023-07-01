import styled from '@emotion/styled';
import myTheme from 'myTheme';

export const ActionBox = styled.ul`
  padding: ${myTheme.space[3]};
  background-color: ${myTheme.colors.white};
  border-radius: ${myTheme.radii.high};
  position: absolute;
  top: ${myTheme.space[5]};
  right: 0;
  z-index: 999;
  box-shadow: ${myTheme.shadow.medium};
`;

export const Action = styled.li`
  font-size: ${myTheme.fontSizes.m};
  font-weight: ${myTheme.fontWeights.regular};
  color: ${myTheme.colors.primary};
  width: 100%;
  padding: ${myTheme.space[1]} ${myTheme.space[3]};
  border-radius: ${myTheme.radii.normal};
  transition: ${myTheme.transitionAll.primary};

  :hover {
    background-color: ${myTheme.colors.accent};
    cursor: pointer;
  }
`;
