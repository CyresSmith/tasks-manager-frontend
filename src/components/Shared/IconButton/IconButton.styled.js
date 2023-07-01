import styled from '@emotion/styled';
import myTheme from 'myTheme';

const StyledButton = styled('button')`
  display: inline-flex;
  padding: ${myTheme.space[2]};
  color: ${p => p.color};
  background-color: ${p =>
    p.disabled ? myTheme.colors.muted : p.backgroundColor};
  cursor: pointer;
  border: ${myTheme.borders.none};
  border-radius: ${p => (p.round ? myTheme.radii.round : myTheme.radii.normal)};

  box-shadow: ${myTheme.shadow.low};
  transition-property: all;
  transition-duration: 250ms;
  transition-timing-function: ease-in-out;

  :disabled {
    pointer-events: none;
  }

  :hover:not(:disabled) {
    background-color: ${myTheme.colors.accent};
    box-shadow: ${myTheme.shadow.medium};
    scale: 1.1;
  }
`;

export default StyledButton;
