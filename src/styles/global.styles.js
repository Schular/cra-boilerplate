import normalize from 'styled-normalize';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  ${normalize}

  * {
    box-sizing: border-box;
  }

  html {
    width: 100%;
    height: 100%;
    font-family: 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI',
      Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  a {
    color: ${({ theme }) => theme.palette.themeColor3}
  }

  a:hover {
    opacity: 0.8;
  }
`;

export default GlobalStyle;
