import styled from '@emotion/styled';
import myTheme from 'myTheme';

export const BadgeBox = styled.div`
  position: absolute;
  top: -15px;
  left: -10px;
  height: 20px;
  width: 20px;
  background-color: ${myTheme.colors.accent};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${myTheme.radii.round};
  z-index: 1;
  box-shadow: ${myTheme.shadow.medium};
`;

export const BadgeNumber = styled.span`
  font-weight: ${myTheme.fontWeights.bold};
  color: ${myTheme.colors.primary};
`;
