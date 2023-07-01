import styled from '@emotion/styled';

import { NavLink } from 'react-router-dom';
import theme from 'myTheme';

export const NavigationList = styled.ul`
  display: flex;
  align-items: center;
`;

export const NavigationItem = styled.li`
  :not(:last-of-type) {
    margin-right: ${theme.space[4]};
  }
`;

export const NavigationLink = styled(NavLink)`
  font-size: ${theme.fontSizes.m};
  font-weight: ${theme.fontWeights.regular};
  color: ${theme.colors.white};
  transition: ${theme.transitionAll.primary};
  display: inline-flex;
  align-items: center;

  svg {
    margin-right: ${theme.space[3]};
  }

  &.active {
    color: ${theme.colors.primary};
    background-color: ${theme.colors.white};
    border-radius: ${theme.radii.normal};
    box-shadow: ${theme.shadow.medium};
    padding: ${theme.space[1]} ${theme.space[4]};

    :hover {
      color: ${theme.colors.primary};
      background-color: ${theme.colors.accent};
    }
  }

  :hover {
    color: ${theme.colors.accent};
  }
`;
