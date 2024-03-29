// @import-normalize; /* bring in normalize.css styles */
import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
body {
  box-sizing: border-box;
  margin: 0;
  height: 100vh;
  background: ${({ theme }) => theme.body};
  /* background-color: #2b2b2f; */

  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}
h1,
h2,
h3,
h4,
h5,
h6,
p,
ul {
  margin-top: 0px;
  margin-bottom: 0px;
  padding: 0px;
}
img {
  display: block;
  max-width: 100%;
  height: auto;
}
`;
