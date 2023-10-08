import { createTheme } from '@mantine/core';
import { themeToVars } from '@mantine/vanilla-extract';

export const theme = createTheme({
  /** Put your mantine theme override here */
});

export const vanilla = themeToVars(theme);