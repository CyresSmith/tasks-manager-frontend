import styled from '@emotion/styled';
import myTheme from 'myTheme';

const ScrollUpButton = styled.button`
  position: fixed;
  bottom: ${p =>
    p.mediaType === 'desktop' ? myTheme.space[6] : myTheme.space[4]};
  right: ${p =>
    p.mediaType === 'desktop' ? myTheme.space[6] : myTheme.space[4]};
  display: inline-flex;
  opacity: 0.7;
  padding: ${myTheme.space[3]};
  color: ${myTheme.colors.white};
  background-color: ${p =>
    p.disabled ? myTheme.colors.muted : myTheme.colors.secondary};
  cursor: pointer;
  border: ${myTheme.borders.none};
  border-radius: ${p => (p.round ? myTheme.radii.round : myTheme.radii.normal)};
  box-shadow: ${myTheme.shadow.low};
  transition-property: all;
  transition-duration: 250ms;
  transition-timing-function: ease-in-out;

  :hover:not(:disabled) {
    background-color: ${myTheme.colors.accent};
    color: ${myTheme.colors.secondary};
    box-shadow: ${myTheme.shadow.medium};
    scale: 1.1;
    opacity: 1;
  }
`;

export default ScrollUpButton;
