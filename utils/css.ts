export const CSS_RESET = `
  html {
    box-sizing: border-box;
  }
  *,
  *::before,
  *::after {
   box-sizing: inherit;
  }
  body,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  ul,
  ol,
  li,
  p,
  pre,
  blockquote,
  figure,
  img,
  hr {
   margin: 0;
   padding: 0;
  }
  
  ul {
   list-style: none;
  }
  
  embed,
  iframe,
  img,
  object,
  video {
   display: block;
   max-width: 100%;
  }
  
  table {
   table-layout: fixed;
   width: 100%;
  }
  
  [hidden] {
   display: none;
  }
  
`;
