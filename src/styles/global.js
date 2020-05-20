import { createGlobalStyle } from 'styled-components';
import fundo from '../images/background.png'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    min-height: 100%;
  }

  body {
    background: url(${fundo}) center bottom no-repeat fixed, #78CCFF; 
    background-size: cover;
  }

  body, -moz-user-input, button {
    color: #222;
    font-size: 14px;
    font-family: Arial, Helvetica, sans-serif;
  }

  button {
    cursor: pointer;
  }

  div#root{
    color: rgba(0, 0, 0, 0.0)
  }
`;
