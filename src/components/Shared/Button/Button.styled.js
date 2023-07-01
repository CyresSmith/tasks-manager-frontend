import styled from '@emotion/styled';
import myTheme from 'myTheme';

export const StyledButton = styled('button')`
  display: flex;
  align-items: center;
  font-family: ${myTheme.fonts.body};
  font-size: ${myTheme.fontSizes.m};
  font-weight: ${myTheme.fontWeights.regular};
  padding: ${myTheme.space[1]} ${myTheme.space[3]};
  color: ${myTheme.colors.white};
  background-color: ${p =>
    p.disabled ? myTheme.colors.muted : myTheme.colors.secondary};
  cursor: ${p => (p.disabled ? '' : 'pointer')};
  border: ${myTheme.borders.none};
  border-radius: ${myTheme.radii.normal};
  box-shadow: ${myTheme.shadow.low};
  transition-property: all;
  transition-duration: 250ms;
  transition-timing-function: ease-in-out;

  :hover:not(:disabled) {
    color: ${myTheme.colors.primary};
    background-color: ${myTheme.colors.accent};
    box-shadow: ${myTheme.shadow.medium};
    scale: 1.02;
  }
`;

export const Loader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  animation: spin 1s linear 0s infinite;

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(360deg);
    }
  }
`;

export const ButtonText = styled.span`
  margin-left: ${p => (p.isIconThere ? myTheme.space[3] : myTheme.space[0])};
`;
