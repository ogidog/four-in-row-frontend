import * as React from 'react';
import styled, {css, keyframes} from "styled-components";
import {ChipValue, RowNumber} from "../model/types";
import uniqid from 'uniqid';

interface IProps {
    row: RowNumber,
    isAvailable: boolean,
    value: ChipValue,
};


const dropdown = (isAvailable: boolean, value: ChipValue,) => keyframes`
  0% {
    background-color: ${isAvailable && 'var(--table-color)'};
  }
  50% {
    background-color: ${!isAvailable ? 'rgba(255,255,255/0.01)' : value === 1 ? 'yellow' : 'orange'};
  }
  100% {
    background-color: ${isAvailable ? 'var(--table-color)' : value === 1 ? 'yellow' : 'orange'};
  }
`

const StyledContainer = styled.div<{ row: number, isAvailable: boolean, value: ChipValue, }>`
  background-color: var(--table-color);
  border-radius: 50px;
  width: 100%;
  aspect-ratio: 1/1;
  box-shadow: inset 0px 3px 0px 5px, inset 0px -2px 0px 2px;

  ${props => css`&:nth-child(${String(props.row + 1)}) {
    animation: ${dropdown(props.isAvailable, props.value,)};
    animation-delay: ${props.row! * 0.3}s;
    animation-timing-function: unset;
    animation-duration: 1s;
    animation-fill-mode: forwards;
  }`}

`

const Chip = (props: IProps) => {
    const {row, value, isAvailable,} = props;

    return (
        <StyledContainer row={row}
                         isAvailable={isAvailable}
                         value={value}
                         key={isAvailable ? uniqid() : row}
        />
    );
};

export default Chip;
