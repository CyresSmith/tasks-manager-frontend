import { useState, useEffect } from 'react';
import { useMedia } from 'react-use';

import myTheme from 'myTheme';

const useMediaHook = () => {
  const [mediaType, setMediaType] = useState(null);

  const isMobile = useMedia(myTheme.breakpoints.mobile.media);

  const isTablet = useMedia(myTheme.breakpoints.tablet.media);

  const isDesktop = useMedia(myTheme.breakpoints.desktop.media);

  useEffect(() => {
    if (isMobile) {
      setMediaType('mobile');
    }

    if (isTablet) {
      setMediaType('tablet');
    }

    if (isDesktop) {
      setMediaType('desktop');
    }
  }, [isDesktop, isMobile, isTablet]);

  return { mediaType };
};

export default useMediaHook;
