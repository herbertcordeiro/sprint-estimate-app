import 'styled-components';

import Theme from './theme';

declare module 'styled-components' {
  export type ITheme = typeof Theme;

  export interface DefaultTheme extends ITheme {}
}
