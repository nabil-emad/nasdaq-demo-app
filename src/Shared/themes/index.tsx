import { useMemo } from 'react';

import { CssBaseline, StyledEngineProvider } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import Palette from './palette';

export default function CustomTheme({ children }: { children: JSX.Element }) {
  const theme = Palette();

  const themeOptions = useMemo(() => ({ palette: theme.palette }), [theme]);

  const themes = createTheme(themeOptions);

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={themes}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </StyledEngineProvider>
  );
}
