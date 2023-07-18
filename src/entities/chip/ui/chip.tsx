import * as React from 'react';
import styled, {css, keyframes} from "styled-components";
import {ChipValue, RowNumber} from "../model/types";
import uniqid from 'uniqid';
import {useRef} from "react";

type Player = 0 | 1 | 2

type Props = {
    row: RowNumber,
    isAvailable: boolean,
    value: ChipValue,
    player: Player,
};


const dropdown = (isAvailable: boolean, value: ChipValue, player: Player) => keyframes`
  0% {
    background-color: ${isAvailable && 'var(--table-color)'};
  }
  50% {
    background-color: ${!isAvailable || player === 0? 'rgba(255,255,255/0.01)' : player === 1 ? '#f8f861' : 'orange'};
  }
  100% {
    background-color: ${isAvailable ? 'var(--table-color)' : value === 1 ? '#f8f861' : 'orange'};
  }
`

const StyledContainer = styled.div<{ row: number, isAvailable: boolean, value: ChipValue, player: Player }>`
  background-color: var(--table-color);
  border-radius: 50px;
  width: 100%;
  aspect-ratio: 1/1;
  box-shadow: inset 0px 3px 0px 5px, inset 0px -2px 0px 2px;

  ${props => css`&:nth-child(${String(props.row + 1)}) {
    animation: ${dropdown(props.isAvailable, props.value, props.player)};
    animation-delay: ${props.row! * 0.3}s;
    animation-timing-function: unset;
    animation-duration: 1s;
    animation-fill-mode: forwards;
  }`}
`

const Chip = (props: Props) => {
    const {row, value, isAvailable, player} = props;
    const ref = useRef<HTMLDivElement>(null);

    return (
        <StyledContainer row={row}
                         isAvailable={isAvailable}
                         value={value}
                         player={player}
                         key={isAvailable ? uniqid() : row}
                         ref={ref}
        />
    );
};

export default Chip;
