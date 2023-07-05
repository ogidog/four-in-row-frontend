import * as React from 'react';
import styled, {css, keyframes} from "styled-components";
import {useSelector} from "react-redux";
import {RootState} from "app/model/store";
import {ChipValue} from "../model/types";

const dropdown = (isAvailable: boolean, playerId: number) => keyframes`
  0% {
    background-color: var(--table-color);
  }
  50% {
    background-color: ${playerId == 1 ? 'yellow' : 'orange'};
  }
  100% {
    background-color: ${isAvailable ? 'var(--table-color)' : playerId == 1 ? 'yellow' : 'orange'};
  }
`

const StyledContainer = styled.div<{ row: number, isAvailable: boolean, chipValue: ChipValue }>`
  background-color: var(--table-color);
  border-radius: 50px;
  width: 100%;
  aspect-ratio: 1/1;
  box-shadow: inset 0px 3px 0px 5px, inset 0px -2px 0px 2px;

  ${props => css`&:nth-child(${String(props.row + 1)}) {
    animation: ${dropdown(props.isAvailable, props.chipValue)};
    animation-delay: ${props.row! * 0.3}s;
    animation-timing-function: unset;
    animation-duration: 1s;
    animation-fill-mode: forwards;
  }`}
`

type Props = { row: number, isAvailable: boolean, chipValue: ChipValue };

const Chip = (props: Props) => {
    const {row, chipValue, isAvailable} = props;

    return (
        <StyledContainer row={row} isAvailable={isAvailable} chipValue={chipValue}
                         key={isAvailable ? Date.now() : row}/>
    );
};

export default Chip;
