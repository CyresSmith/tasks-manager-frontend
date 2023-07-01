import styled from '@emotion/styled';
import theme from 'myTheme';

export const Header = styled.header`
  padding: ${theme.space[4]} 0;
  width: 100%;
  height: 80px;
  background-color: ${theme.colors.secondary};
`;

export const HeaderContainer = styled.div`
  width: ${theme.breakpoints.desktop.width};
  height: 100%;
  padding: 0 ${theme.space[4]};
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;

    div {
      display: flex;
      align-items: center;
    }
  }
`;
