import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  :root {
    --background: #f4f8f9;
    --text: #888
  }

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 180px) {
      font-size: 93.75%;
    }
    @media (max-width: 720px) { 
      font-size: 87.5%;
    }
  }
  
  body {
    background-color: var(--background);
  }
  
  body, input, button, textarea {
    font-family: 'Dosis', sans-serif;
    font-weight: 300;
  }
  
  button {
    cursor: pointer;
  }
`;