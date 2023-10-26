import { DarkTheme, LightTheme } from '../shared/colors';

const query = '(prefers-color-scheme)';

export type ThemeVariant = 'dark' | 'light';

export const supportsPreferColorScheme = () => {
  if (!('matchMedia' in window)) {
    return false;
  }

  const { media } = window.matchMedia(query);

  return media === query;
};

export const isDarkModeEnabled = () => {
  if (!supportsPreferColorScheme()) {
    return false;
  }

  const { matches } = window.matchMedia('(prefers-color-scheme: dark)');

  return matches;
};

export const getThemeFromVariant = (variant: ThemeVariant) =>
  variant === 'dark' ? DarkTheme : LightTheme;
