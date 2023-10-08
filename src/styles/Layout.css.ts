// Demo.css.ts
import { vanilla, theme } from './theme';
import { style } from '@vanilla-extract/css';

export const demo = style({
  fontSize: vanilla.fontSizes.xl,
  backgroundColor: vanilla.colors.red[5],
  color: vanilla.colors.white,
});