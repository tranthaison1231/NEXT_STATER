import 'styled-components';

// and extend it
declare module 'styled-components' {
  export interface DefaultTheme {
    color: {
      primary: string;
      secondary: string;
    };
  }
}
