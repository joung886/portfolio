import { Global, css } from "@emotion/react";

const globalStyles = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    cursor: none !important;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    background: #0a0a0a;
    color: #e2e8f0;
    line-height: 1.6;
    overflow-x: hidden;
  }

  a {
    color: inherit;
    text-decoration: none;
    cursor: none !important;
  }

  button {
    background: none;
    border: none;
    outline: none;
    cursor: none !important;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  .cursor-dot {
    width: 5px;
    height: 5px;
    background-color: #4299e1;
    position: fixed;
    border-radius: 50%;
    pointer-events: none;
    z-index: 9999;
  }

  .cursor-outline {
    width: 30px;
    height: 30px;
    border: 2px solid rgba(66, 153, 225, 0.5);
    position: fixed;
    border-radius: 50%;
    pointer-events: none;
    z-index: 9999;
    transition: transform 0.1s ease;
  }

  a:hover ~ .cursor-outline,
  button:hover ~ .cursor-outline {
    transform: scale(1.5);
    background-color: rgba(66, 153, 225, 0.1);
  }
`;

const GlobalStyles = () => <Global styles={globalStyles} />;

export default GlobalStyles;
