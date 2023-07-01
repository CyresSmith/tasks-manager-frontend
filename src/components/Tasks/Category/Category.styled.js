import styled from '@emotion/styled';
import myTheme from 'myTheme';

export const CategorySection = styled.section`
  padding-top: ${myTheme.space[5]};
  padding-bottom: ${myTheme.space[5]};
`;

export const CategoryName = styled.h2`
  font-size: ${myTheme.fontSizes.xl};
  font-weight: ${myTheme.fontWeights.bold};
  color: ${myTheme.colors.secondary};
  padding-bottom: ${myTheme.space[2]};
  border-bottom: 2px solid ${myTheme.colors.secondary};
  margin-bottom: ${myTheme.space[5]};
`;

export const CategoryList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: ${myTheme.space[5]};
  width: 100%;
`;
