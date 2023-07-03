import React from 'react';
import styled from "styled-components";
import {MainPage} from "pages/index";
import "../css/App.css"

const StyledContainer = styled.div`

  @media (max-width: 1023px) {
    width: 100dvw;
    min-width: 100dvw;
    height: 100dvh;
    overflow: auto;
  }

  @media (min-width: 1024px) {
    width: 100vw;
    height: 100vh;
  }

  position: relative;
  background-color: #9e6cff;
`

function App() {
    return (
        <StyledContainer>
            <MainPage/>
        </StyledContainer>
    );
}

export default App;
