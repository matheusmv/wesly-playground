import { ThemeProvider, ThemeProviderProps } from '@fluentui/react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { usePrefersColorScheme } from '../../hooks/usePrefersColorScheme';
import { RootReducer } from '../../store';
import { SettingsState, toggleTheme } from '../../store/settings/reducer';
import {
  getThemeFromVariant,
  isDarkModeEnabled,
  supportsPreferColorScheme,
  ThemeVariant,
} from '../../utils/theme';

function getInitialTheme({ darkMode, useSystemTheme }: SettingsState): {
  currentTheme: ThemeVariant;
  matchMedia: boolean;
} {
  if (useSystemTheme && supportsPreferColorScheme()) {
    return {
      currentTheme: isDarkModeEnabled() ? 'dark' : 'light',
      matchMedia: true,
    };
  }

  return {
    currentTheme: darkMode ? 'dark' : 'light',
    matchMedia: false,
  };
}

type CustomThemeProviderProps = ThemeProviderProps;

function CustomThemeProvider({ children, ...props }: CustomThemeProviderProps) {
  const dispatch = useDispatch();

  const settings = useSelector((state: RootReducer) => state.settingsReduder);
  const { currentTheme, matchMedia } = getInitialTheme(settings);
  const systemTheme = usePrefersColorScheme(currentTheme, matchMedia);

  useEffect(() => {
    dispatch(toggleTheme(systemTheme === 'dark'));
  }, [systemTheme, dispatch]);

  return (
    <ThemeProvider
      theme={getThemeFromVariant(matchMedia ? systemTheme : currentTheme)}
      {...props}
    >
      {children}
    </ThemeProvider>
  );
}

export default CustomThemeProvider;
