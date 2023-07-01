// @flow
import * as React from 'react';
import styled from "styled-components";
import TurnTimerImg from "../assets/images/turn-timer.svg";

const StyledContainer = styled.div`
  position: relative;
  top: 10px;

  width: 190px;
  height: 155px;

  z-index: 20;

  background-color: rgba(255, 255, 255, 0.1%);
`

const Image = styled.img`
  width: 100%;
  height: 100%;
`

const Counter = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, 50%);
`

export const TurnTimer = () => {
    return (
        <StyledContainer>
            <Image src={TurnTimerImg} alt={""}/>
            <Counter></Counter>
        </StyledContainer>
    );
};
