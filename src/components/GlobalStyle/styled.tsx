import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
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
`;
