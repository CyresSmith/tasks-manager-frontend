import styled from '@emotion/styled';
import myTheme from 'myTheme';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.8);
`;

export const ModalWindow = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-height: 250px;
  overflow: ${p => (p.mediaType === 'desktop' ? 'unset' : 'scroll')};
  height: ${p => (p.mediaType === 'mobile' ? '100vh' : 'auto')};
  width: ${p => (p.mediaType === 'mobile' ? '100vw' : '400px')};
  padding: ${myTheme.space[5]};
  background-color: ${myTheme.colors.white};
  border-radius: ${myTheme.radii.high};
  box-shadow: ${myTheme.shadow.high};
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  button[aria-labelledby='close button'] {
    position: absolute;
    top: 8px;
    right: 8px;
  }
`;

export const Title = styled.h3`
  font-size: ${myTheme.fontSizes.l};
  font-weight: ${myTheme.fontWeights.regular};
  text-align: center;
  margin-bottom: ${myTheme.space[5]};
`;
