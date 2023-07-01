// @flow
import * as React from 'react';
import styled from "styled-components";
import {Board} from "widgets/index";
import {TurnTimer} from "../../../entities";

const StyledComponent = styled.div`
  position: relative;
  
  display: flex;
  flex-direction: column;
  grid-row-gap: 10px;
  justify-content: center;
  align-items: center;
  
  width: 100%;
  height: 100%;
  
  padding: 20px;
  box-sizing: border-box;
`

const BackgroundBottom = styled.div`
  display: flex;
  justify-content: center;
  
  width: 100%;
  max-width: 1024px;
  height: 18%;
  background-color: #7221e8;
  border-top-right-radius:  50px 50px;
  border-top-left-radius: 50px 50px;
  z-index: 1;
`

export const MainPage = () => {
    return (
        <StyledComponent>
            <Board/>
            <BackgroundBottom/>
            <TurnTimer/>
        </StyledComponent>
    );
};
