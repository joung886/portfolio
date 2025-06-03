import { css } from "@emotion/react";

export const globalStyles = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      "Helvetica Neue", Arial, sans-serif;
    background: #0a0a0a;
    color: #e2e8f0;
    line-height: 1.6;
    overflow-x: hidden;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    background: none;
    border: none;
    cursor: pointer;
  }

  ul,
  ol {
    list-style: none;
  }

  #root {
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: #1a1a1a;
  }

  ::-webkit-scrollbar-thumb {
    background: #3182ce;
    border-radius: 4px;
  }
`;
