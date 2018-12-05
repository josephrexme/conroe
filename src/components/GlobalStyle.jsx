import { createGlobalStyle } from 'styled-components';
import TheaterBG from '../../assets/theater-bg.jpg';

const GlobalStyle = createGlobalStyle`
  *{
    box-sizing: border-box
    &:focus{
      outline: solid thin var(--color-link);
    }
  }
  :root{
    --color-bg: #000;
    --color-fg: #fff;
    --color-link: #b67e38;
    --color-brand-1: #ffc900;
    --font-primary: 'Open Sans', sans-serif;
    --font-secondary: 'Open Sans Condensed', sans-serif;
    --curve-radius: 1.2rem;
    font-size: 62.5%;
  }
  body{
    width: 100vw;
    margin: 0;
    background-color: var(--color-bg);
    background-image: url(${TheaterBG});
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: 0% 30rem;
    color: var(--color-fg);
    font: 1.6rem/1.2 var(--font-primary);
    overflow-x: hidden;
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
  p{
    margin: 1rem 0;
  }
`;

export default GlobalStyle;
