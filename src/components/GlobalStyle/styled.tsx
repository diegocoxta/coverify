import React from 'react';
import { Global, css } from '@emotion/react';

export function GlobalStyle() {
  return (
    <Global
      styles={css`
        body {
          margin: 0;
          padding: 0;
          background-color: #121212;
          background-size: 100% 200px;
          background-repeat: no-repeat;
          font-family: 'Source Sans Pro', sans-serif;
        }

        .box {
          display: flex;
        }

        .hover-handles .react-resizable-handle {
          display: none;
        }

        .hover-handles:hover .react-resizable-handle {
          display: block;
        }
      `}
    />
  );
}
