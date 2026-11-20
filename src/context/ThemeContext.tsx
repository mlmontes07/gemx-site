import { createContext, ReactNode, useContext, useEffect, useState } from 'react';

export type ThemeMode = 'auto' | 'light' | 'dark';
export type ResolvedTheme = 'light' | 'dark';

interface ThemeContextValue {
  mode: ThemeMode;
  resolvedTheme: ResolvedTheme;
  isDaytimeNow: boolean;
  setMode: (next: ThemeMode) => void;
  cycleTheme: () => void;
}

const STORAGE_KEY = 'gemx-theme-mode';

function getDaytimeByClock(): boolean {
  const hour = new Date().getHours();
  // Daytime: 6:00 AM (06:00) through 5:59 PM (17:59)
  return hour >= 6 && hour < 18;
}

function readInitialMode(): ThemeMode {
  if (typeof window === 'undefined') return 'auto';
  try {
    const q = new URLSearchParams(window.location.search).get('theme');
    if (q === 'light' || q === 'dark' || q === 'auto') {
      sessionStorage.setItem(STORAGE_KEY, q);
      return q;
    }
    const stored = sessionStorage.getItem(STORAGE_KEY);
    if (stored === 'light' || stored === 'dark' || stored === 'auto') {
      return stored;
    }
  } catch {
    // Ignore storage restrictions
  }
  return 'auto';
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

export function ThemeProvider({ children }: { children: ReactNode }) {
  // Initialize deterministically so SSR HTML and initial client hydration match 100%
  const [mode, setModeState] = useState<ThemeMode>('auto');
  const [isDaytimeNow, setIsDaytimeNow] = useState<boolean>(true);
  const [hasSynced, setHasSynced] = useState<boolean>(false);

  const resolvedTheme: ResolvedTheme =
    mode === 'auto' ? (isDaytimeNow ? 'light' : 'dark') : mode;

  // Sync actual clock & session preference after hydration, then re-check every 30s
  useEffect(() => {
    setModeState(readInitialMode());
    setIsDaytimeNow(getDaytimeByClock());
    setHasSynced(true);

    const syncClock = () => {
      setIsDaytimeNow(getDaytimeByClock());
    };

    const intervalId = window.setInterval(syncClock, 30_000);
    const onVisibility = () => {
      if (document.visibilityState === 'visible') syncClock();
    };

    window.addEventListener('focus', syncClock);
    document.addEventListener('visibilitychange', onVisibility);
    return () => {
      window.clearInterval(intervalId);
      window.removeEventListener('focus', syncClock);
      document.removeEventListener('visibilitychange', onVisibility);
    };
  }, []);

  // Apply resolved theme to <html data-theme="...">, <meta name="color-scheme">, and <meta name="theme-color">
  useEffect(() => {
    if (!hasSynced) return;

    document.documentElement.dataset.theme = resolvedTheme;

    const csMeta = document.querySelector<HTMLMetaElement>('meta[name="color-scheme"]');
    if (csMeta) {
      csMeta.content = resolvedTheme;
    }

    const tcMeta = document.querySelector<HTMLMetaElement>('meta[name="theme-color"]');
    if (tcMeta) {
      tcMeta.content = resolvedTheme === 'dark' ? '#071128' : '#FAF8F5';
    }
  }, [resolvedTheme, hasSynced]);

  const setMode = (next: ThemeMode) => {
    setModeState(next);
    try {
      if (next === 'auto') {
        sessionStorage.removeItem(STORAGE_KEY);
      } else {
        sessionStorage.setItem(STORAGE_KEY, next);
      }
    } catch {
      // Ignore storage restrictions
    }
  };

  const cycleTheme = () => {
    // Smooth 3-step cycle: Auto (Time of Day) -> Opposite of current -> Match current -> back to Auto
    const autoTheme: ResolvedTheme = isDaytimeNow ? 'light' : 'dark';
    const oppositeTheme: ResolvedTheme = autoTheme === 'light' ? 'dark' : 'light';

    if (mode === 'auto') {
      setMode(oppositeTheme);
    } else if (mode === oppositeTheme) {
      setMode(autoTheme);
    } else {
      setMode('auto');
    }
  };

  return (
    <ThemeContext.Provider value={{ mode, resolvedTheme, isDaytimeNow, setMode, cycleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme(): ThemeContextValue {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return ctx;
}

