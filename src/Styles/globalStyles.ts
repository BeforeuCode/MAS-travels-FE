import { css } from '@emotion/core';

export const globalStyles = css`
  html,
  body,
  div#root {
    height: 100%;
    *::placeholder {
      color: #abb1b6;
      opacity: 1;
    }
  }

  body {
    font-family: Work Sans, sans-serif;
  }
`;
