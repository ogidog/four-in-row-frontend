// @flow
import * as React from 'react';
import styled from "styled-components";
import {ReactComponent as TurnTimerImg} from "../assets/images/turn-timer.svg";
import {useEffect, useRef, useState} from "react";
import {TURN_TIME} from "entities/turn-timer/model/const";
import {getImgSrc} from "../libs/libs";

const StyledContainer = styled.div`
  position: absolute;
  top: 95%;
  left: 50%;
  transform: translateX(-50%);

  width: 35%;
  height: 27%;
  min-width: 150px;
  min-height: 125px;

  z-index: 20;

  background-color: rgba(255, 255, 255, 0.1%);
`

const Image = styled.img`
  width: 100%;
  height: 100%;
`

const Counter = styled.div`
  position: absolute;
  width: 100%;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #030303;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & > :nth-child(1) {
    font-size: 1.4em;
    white-space: nowrap;
  }

  & > :nth-child(2) {
    font-size: 3.0em;
    font-weight: bold;
  }
`

type Props = {
    player: 0 | 1 | 2
}

const getPlayerName = (player: 0 | 1 | 2) => {
    return player === 1 ? "CPU TURN" : "YOUR TURN";
}

export const TurnTimer = (props: Props) => {

    const {player} = props;
    const [counterValue, setCountDownValue] = useState(TURN_TIME);
    const countDownTimerIdRef = useRef<NodeJS.Timer>();
    const timerBackgroundColorRef = useRef<string>("#f8f861");

    counterValue < 1 && clearInterval(countDownTimerIdRef.current);

    useEffect(() => {
        if (countDownTimerIdRef.current) {
            clearInterval(countDownTimerIdRef.current);
            setCountDownValue(TURN_TIME);
        }

        let initialValue = TURN_TIME;
        countDownTimerIdRef.current = setInterval(() => {
            setCountDownValue(initialValue--);
        }, 1000);

        timerBackgroundColorRef.current = player === 0 ? "#f8f861" : player === 1 ? "orange" : "#f8f861";

        return () => {
            clearInterval(countDownTimerIdRef.current);
        }

    }, [player]);

    return (
        <StyledContainer>
            <Image src={getImgSrc({fill: `${timerBackgroundColorRef.current}`})}/>
            <Counter>
                <div>{getPlayerName(player)}</div>
                <div>{counterValue} s</div>
            </Counter>
        </StyledContainer>
    );
};

export default TurnTimer;
