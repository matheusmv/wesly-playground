import { useEffect, useState } from 'react';

import { ThemeVariant } from '../utils/theme';

export function usePrefersColorScheme(
  defaultValue: ThemeVariant,
  enabled: boolean = true,
) {
  const [theme, setTheme] = useState<ThemeVariant>(defaultValue);

  useEffect(() => {
    if (!enabled) return;

    const handler = (matches: any) => {
      if (!enabled) return;

      setTheme(matches ? 'dark' : 'light');
    };

    const query = window.matchMedia('(prefers-color-scheme: dark)');
    setTheme(query.matches ? 'dark' : 'light');

    query.addEventListener('change', handler);

    return () => {
      query.removeEventListener('change', handler);
    };
  }, [enabled]);

  return theme;
}
