import styled from '@emotion/styled';
import myTheme from 'myTheme';

export const CategoryListBox = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${myTheme.space[5]};
`;

export const NotFound = styled.p`
  font-size: ${myTheme.fontSizes.xl};
  text-align: center;
`;
