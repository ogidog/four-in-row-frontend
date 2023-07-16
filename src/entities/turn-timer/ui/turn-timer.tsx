// @flow
import * as React from 'react';
import styled from "styled-components";
import TurnTimerImg from "../assets/images/turn-timer.svg";
import {useEffect, useState} from "react";
import {TURN_TIME} from "app/model/const";

const StyledContainer = styled.div<{player: Props["player"]}>`
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
  color: #ffffff;

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

let countDownTimerId: NodeJS.Timer;

type Props = {
    player: 0 | 1 | 2
}

export const TurnTimer = (props: Props) => {
//сделать таймер чтоб запускался после анимации
    const {player} = props;

    let [counterValue, setCountDownValue] = useState(TURN_TIME);

    counterValue < 1 && clearInterval(countDownTimerId);

    const getPlayerName = () => {
        return player === 1 ? "CPU TURN" : "YOUR TURN";
    }

    useEffect(() => {
        if (countDownTimerId) {
            clearInterval(countDownTimerId);
            setCountDownValue(TURN_TIME);
        }

        countDownTimerId = setInterval(() => {
            counterValue -= 1;
            setCountDownValue(counterValue);
        }, 1000);

        return () => {
            clearInterval(countDownTimerId);
        }
    }, [player])

    return (
        <StyledContainer player={player}>
            <Image src={TurnTimerImg} alt={""}/>
            <Counter>
                <div>{getPlayerName()}</div>
                <div>{counterValue} s</div>
            </Counter>
        </StyledContainer>
    );
};

export default TurnTimer;
