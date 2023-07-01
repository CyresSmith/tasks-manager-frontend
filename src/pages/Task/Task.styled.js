import styled from '@emotion/styled';
import myTheme from 'myTheme';

export const ButtonBox = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: ${myTheme.space[3]};
  margin-bottom: ${myTheme.space[5]};
`;

export const TaskBox = styled.div`
  width: 50%;
  margin: 0 auto;
`;
