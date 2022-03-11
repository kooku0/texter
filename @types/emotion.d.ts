import '@emotion/react';

import theme from '../src/styles/colors';

declare module '@emotion/react' {
  type CustomTheme = typeof theme.light;

  export interface Theme extends CustomTheme {}
}
