import styled from '@emotion/styled';
import myTheme from 'myTheme';

export const ContainerBox = styled.div`
  width: ${myTheme.breakpoints.mobile.width};
  padding: 0 ${myTheme.space[4]};
  margin: 0 auto;

  @media (${myTheme.breakpoints.tablet.media}) {
    width: ${myTheme.breakpoints.tablet.width};
  }

  @media (${myTheme.breakpoints.desktop.media}) {
    width: ${myTheme.breakpoints.desktop.width};
  }
`;
