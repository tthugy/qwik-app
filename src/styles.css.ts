import { createTheme, style } from '@vanilla-extract/css';

export const [themeClass, vars] = createTheme({
  color: {
    brand: 'red',
    white: '#fff'
  },
  tester: {
    test: 'abc'
  }
});

export const hero = style({
  backgroundColor: vars.color.brandd,
  color: vars.color.white,
  padding: vars.space.large
});