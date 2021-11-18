import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: #f0f2f5;
    --background-card: #FFDAB9;
    --buttons: #69665c; 
    --check: #333;
    --text-title: #363F5F;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }

  // front-size: 16px (Desktop)
  html {
    
    @media (max-width: 1080px) {
      font-size: 93.75%; // 15px
    }

    @media (max-width: 720) {
      font-size: 87.5%; // 14px
    }

  }
  // REM = 1rem = 16px => sempre usaremos rem para responsividade
  
  body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
    font-family: 'Poppins', sans-serif;
  }

  ::-webkit-scrollbar{
      width: 8px;
    }
    ::-webkit-scrollbar-track{
      background-color: none;
    }
    ::-webkit-scrollbar-thumb{
      background-color: #33333344;
      border-radius: 20px;
      transition: 1s all;
    }
    ::-webkit-scrollbar-thumb:hover{
      background-color: #333;
    }

  button {
    cursor: pointer;
  }

  [disbbled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  .react-modal-overlay {
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .react-modal-content {
    width: 100%;
    max-width: 576px;
    background: var(--background);
    padding: 3rem;
    position: relative;
    border-radius: 1rem;
  }
`;

export const Content = styled.div`
  max-width: 1300px;
  margin: 1.25rem auto 0;
  display: flex;
  align-items: flex-start;
`;