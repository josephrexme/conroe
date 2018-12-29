import { createGlobalStyle } from 'styled-components';
import TheaterBG from '../../assets/theater-bg.jpg';
import '../../assets/slick/slick.css';
import '../../assets/slick/slick-theme.css';

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
    --color-brand-2: #edaf08;
    --font-primary: 'Open Sans', sans-serif;
    --font-secondary: 'Open Sans Condensed', sans-serif;
    --curve-radius: 1.0rem;
    font-size: 62.5%;
    width: 100%;
  }
  body{
    width: 100%;
    margin: 0;
    background-color: var(--color-bg);
    background-image: url(${TheaterBG});
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: 0% 30rem;
    color: var(--color-fg);
    font: 1.6rem/1.6 var(--font-primary);
    overflow-x: hidden;
  }
  #app{
    overflow: hidden;
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
  blockquote{
    position: relative;
    &::before{
      content: '"';
      position: absolute;
      top: -3rem;
      left: -2.5rem;
      color: #aaa;
      font-size: 5rem;
      font-family: cursive;
    }
  }
`;

export default GlobalStyle;
