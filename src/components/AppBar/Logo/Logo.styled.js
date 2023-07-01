import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

import theme from 'myTheme';

export const LogoBox = styled(Link)`
  height: 100%;
  display: flex;
  align-items: center;
  margin-right: ${theme.space[6]};

  span {
    color: ${theme.colors.white};
    margin-left: ${theme.space[3]};
    font-size: ${theme.fontSizes.xl};
  }

  svg {
    color: ${theme.colors.white};
  }
`;
