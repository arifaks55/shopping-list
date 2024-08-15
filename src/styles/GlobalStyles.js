import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    font-family: 'Arial', sans-serif;
    background-color: #f7f8fa;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    padding: 0;
  }

  input, select, button {
    font-family: inherit;
  }

  button {
    cursor: pointer;
  }
`;

export default GlobalStyles;
