// @flow
import * as React from 'react';
import styled from "styled-components";
import {JSX} from "react";
import {Chip, ChipsColumn, TurnTimer} from "entities/index";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "app/model/store";
import {RowNumber, ColumnNumber} from "entities/chip/model/types";
import {setChip} from "../model/slice";

const StyledContainer = styled.div`
  display: grid;
  grid-column-gap: 10px;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: 100%;

  position: relative;
  top: 50px;

  border-radius: 10%;
  border: 3px solid #000000;

  background-color: var(--white);

  width: 100%;
  aspect-ratio: 1/1;
  max-width: 650px;
  max-height: 650px;

  box-shadow: 0px 9px 0 #000000;
  box-sizing: border-box;
  padding: 30px 10px 40px 10px;

  z-index: 10;
`

export const Board = () => {
    const dispatch = useDispatch();
    const chips = useSelector((state: RootState) => state.board.chips);
    const selectedColumn = useSelector((state: RootState) => state.board.selectedColumn);
    const player = useSelector((state: RootState) => state.board.player);

    const clickHandle = (column: ColumnNumber) => {
        dispatch(setChip({column: column}));
    }


    const drawBoard = () => {
        const boardChips = new Array<any | string | JSX.Element>([])
        for (let j: ColumnNumber = 0; j < chips[0].length; j++) {
            const chipsColumn = new Array<any | string | JSX.Element>([])

            for (let i = 0; i < chips.length; i++) {
                chipsColumn.push(
                    <Chip
                        key={`${j}${i}`}
                        row={i as RowNumber}
                        isAvailable={chips[i][j] === 0}
                        value={chips[i][j]}
                        player={player}
                    />
                )
            }

            boardChips.push(
                <ChipsColumn
                    key={j}
                    onClick={() => clickHandle(j)}
                    column={j as ColumnNumber}
                    isSelected={selectedColumn === j}
                >
                    {chipsColumn}
                </ChipsColumn>
            )
        }
        return boardChips;
    }

    return (
        <StyledContainer>
            <>
                <TurnTimer player={player}/>
                {drawBoard()}
            </>
        </StyledContainer>
    );
};
