import 'styled-components';

import theme from './theme';

declare module 'styled-components' {
  export type ITheme = typeof theme;

  export interface DefaultTheme extends ITheme {}
}
