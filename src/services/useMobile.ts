import { useContext, useEffect, useMemo, useState } from 'react';
import { DefaultTheme, ThemeContext } from 'styled-components/macro';

const noop = (): void => {
  /* noop */
};
const mockedMediaQueryList = { matches: false, addListener: noop, removeListener: noop };

const useMedia = (mediaQuery: string): boolean => {
  const mediaQueryInstance = useMemo(
    () => (window ? window.matchMedia(mediaQuery) : mockedMediaQueryList),
    [mediaQuery]
  );

  const [match, setMatch] = useState(mediaQueryInstance.matches);

  useEffect(() => {
    const onMediaChange = (event: MediaQueryListEvent): void => {
      setMatch(event.matches);
    };
    mediaQueryInstance.addListener(onMediaChange);
    return () => {
      mediaQueryInstance.removeListener(onMediaChange);
    };
  }, [mediaQueryInstance]);

  return match;
};

export const useMobile = (
  breakpoint?: keyof DefaultTheme['breakpoints'],
  query?: string
): boolean => {
  const theme = useContext(ThemeContext);
  const breakpointQuery = breakpoint
    ? `(max-width: ${theme.breakpoints[breakpoint]})`
    : `(max-width: ${theme.breakpoints.m})`;

  return useMedia(query || breakpointQuery);
};
