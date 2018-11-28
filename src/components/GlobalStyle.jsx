import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *{ box-sizing: border-box }
  :root{
    --color-bg: #000;
    --color-fg: #fff;
    --color-link: #b67e38;
    --font-primary: 'Open Sans', sans-serif;
    --font-secondary: 'Open Sans Condensed', sans-serif;
  }
  body{
    margin: 0;
    background: var(--color-bg);
    color: var(--color-fg);
    font-family: var(--font-primary);
  }
  a{
    text-decoration: none;
    color: var(--color-link);
  }
`;

export default GlobalStyle;
