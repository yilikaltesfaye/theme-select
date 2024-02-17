import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
        text-decoration: none;
    }
    body {
        min-height: 100vh;
        font-size: 16px;
        font-family: cursive;
    }
    a {
        font-family: inherit;
        font-size: inherit;
        font-weight: 600;
    }
`;

export default GlobalStyle