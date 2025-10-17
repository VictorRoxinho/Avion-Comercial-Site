import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: 'Roboto', 'Segoe UI', 'Helvetica Neue', sans-serif;
    color: #333;
    background-color: #f5f5f5;
    line-height: 1.6;
    overflow-x: hidden;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    cursor: pointer;
    border: none;
    font-family: inherit;
  }

  img {
    max-width: 100%;
    display: block;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Roboto Slab', Georgia, serif;
    font-weight: 600;
    line-height: 1.2;
  }
`;

export default GlobalStyles;
