import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'CGaramund';
    src: url("../static/CormorantGaramond-Regular.ttf") format('truetype');
    font-weight: normal;
    font-style: normal;
  }
  html {
    box-sizing: border-box;
    font-size: 10px;
    font-family: 'CGaramund';
  }
  a, a:visited {
    text-decoration: none;
    color: inherit;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    padding: 0;
    margin: 0;
    font-size: 2rem;
    line-height: 2;
    background: ${props => props.theme.black};
    color: ${props => props.theme.white};
  }
`;
export default GlobalStyles;