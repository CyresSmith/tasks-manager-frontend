import styled from '@emotion/styled';
import myTheme from 'myTheme';

export const Box = styled.div`
  margin-bottom: ${myTheme.space[4]};
  padding-bottom: ${myTheme.space[4]};
  border-bottom: 2px solid ${myTheme.colors.secondary};

  p {
    display: flex;
    flex-direction: column;
    gap: ${myTheme.space[2]};
  }
`;
