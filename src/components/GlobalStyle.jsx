import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *{ box-sizing: border-box }
  :root{
    --color-bg: #000;
    --color-fg: #fff;
    --color-link: #b67e38;
    --font-primary: 'Open Sans', sans-serif;
    --font-secondary: 'Open Sans Condensed', sans-serif;
    font-size: 62.5%;
  }
  body{
    margin: 0;
    background: var(--color-bg);
    color: var(--color-fg);
    font: 1.4rem/1.2 var(--font-primary);
  }
  a{
    text-decoration: none;
    color: var(--color-link);
  }
  button, input{
    font: inherit;
  }
  img{
    width: 100%;
  }
`;

export default GlobalStyle;
