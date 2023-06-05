import * as React from 'react';
import styled, {css, keyframes} from "styled-components";
import {useSelector} from "react-redux";
import {selectAvailableRowByColumn} from "../../share/slices/game-slice";

const dropdown = (row: number, availableRow: number) => keyframes`
  0% {
    background-color: blue;
  }
  50% {
    background-color: yellow;
  }
  100% {
    background-color: ${row < availableRow + 1 ? 'blue' : 'yellow'};
  }
`

const StyledContainer = styled.div<{ row: number, availableRow: number }>`
  background-color: blue;
  border-radius: 50px;
  width: 100px;
  height: 100px;
  box-shadow: inset 5px 0 0px 1px;

  ${props => props.availableRow < 5 && css`&:nth-child(${String(props.row + 1)}) {
    animation: ${dropdown(props.row, props.availableRow)};
    animation-delay: ${props.row! * 0.3}s;
    animation-timing-function: ease-in-out;
    animation-duration: 1s;
    animation-fill-mode: forwards;
  }`}
`

type Props = { row: number, column: number };

const GameField = (props: Props) => {
    const {row, column} = props;
    const availableRow = useSelector(selectAvailableRowByColumn(column))

    return (
        <StyledContainer row={row} availableRow={availableRow} key={row < availableRow + 1 ? Date.now() : row}/>
    );
};

export default GameField
