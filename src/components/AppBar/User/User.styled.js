import styled from '@emotion/styled';

import myTheme from 'myTheme';

export const UserBox = styled.div`
  display: flex;
  align-items: center;
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-right: ${myTheme.space[4]};
`;

export const Email = styled.h6`
  font-size: ${myTheme.fontSizes.m};
  font-weight: ${myTheme.fontWeights.regular};
  color: ${myTheme.colors.white};
`;

export const Role = styled.p`
  font-size: ${myTheme.fontSizes.s};
  font-weight: ${myTheme.fontWeights.light};
  color: ${myTheme.colors.white};
`;
