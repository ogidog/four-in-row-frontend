// @flow
import * as React from 'react';
import styled from "styled-components";
import {Board} from "widgets/index";
import {TurnTimer} from "entities/index";

const StyledComponent = styled.div`
  
  @media(max-width: 1023px){
    width: 100%;
    height: 100%;
    min-width: 384px;
    min-height: 640px;
  }

  @media(min-width: 1024px){
    width: 100%;
    height: 100%;
    max-width: 1024px;
    margin: 0 auto;
  }

  position: relative;
  display: flex;
  flex-direction: column;
  grid-row-gap: 10px;
  justify-content: center;
  align-items: center;

  padding: 20px;
  box-sizing: border-box;
`

const BackgroundBottom = styled.div`

  width: 100%;
  height: 18%;
  min-height: 170px;
  background-color: #7221e8;
  border-top-right-radius: 50px 50px;
  border-top-left-radius: 50px 50px;
  z-index: 1;
`

export const MainPage = () => {
    return (
        <StyledComponent>
            <Board>
                <TurnTimer playerId={0}/>
            </Board>
            <BackgroundBottom/>
        </StyledComponent>
    );
};
