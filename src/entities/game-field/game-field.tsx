import * as React from 'react';
import styled, {css, keyframes} from "styled-components";
import {useSelector} from "react-redux";
import {RootState} from "share/store/store";

const dropdown = (isAvailable: boolean, playerId: number) => keyframes`
  0% {
    background-color: blue;
  }
  50% {
    background-color: ${playerId == 1 ? 'yellow' : 'orange'};
  }
  100% {
    background-color: ${isAvailable ? 'blue' : playerId == 1 ? 'yellow' : 'orange'};
  }
`

const StyledContainer = styled.div<{ row: number, isAvailable: boolean, playerId: number }>`
  background-color: blue;
  border-radius: 50px;
  width: 100px;
  height: 100px;
  box-shadow: inset 0px 3px 0px 5px, inset 0px -2px 0px 2px;

  ${props => css`&:nth-child(${String(props.row + 1)}) {
    animation: ${dropdown(props.isAvailable, props.playerId)};
    animation-delay: ${props.row! * 0.3}s;
    animation-timing-function: unset;
    animation-duration: 1s;
    animation-fill-mode: forwards;
  }`}
`

type Props = { row: number, column: number };

const GameField = (props: Props) => {
    const {row, column} = props;

    const gameState = useSelector((state: RootState) => state.game);
    const isAvailable: boolean = gameState.gameFields[row][column] === 0;
    const playerId: number = gameState.gameFields[row][column];

    return (
        <StyledContainer row={row} isAvailable={isAvailable} playerId={playerId}
                         key={isAvailable ? Date.now() : row}/>
    );
};

export default GameField
