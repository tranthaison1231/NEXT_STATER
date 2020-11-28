import { CSS_RESET } from '@/utils/css';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  ${CSS_RESET}
  body {
    margin: 0;
    padding: 0;
  }
  .h-screen {
    height: 100vh
  }
  .flex {
    display: flex
  }
  .uppercase {
    text-transform: uppercase;
  }
  .col {
    flex-direction: column;
  }
  .justify-center {
    justify-content: center
  }
  .justify-self-end	{
    justify-self: end;
  }
  .object-contain {
    object-fit: contain
  }
  .items-center {
    align-items: center
  }
  .text-center {
    text-align: center
  }
  .text-end {
    text-align: end
  }
  .pointer {
    cursor: pointer
  }
`;

export default GlobalStyle;
