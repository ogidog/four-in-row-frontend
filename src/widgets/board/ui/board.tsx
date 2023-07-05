// @flow
import * as React from 'react';
import styled from "styled-components";
import {FC, JSX, useId} from "react";
import {Chip, ChipsColumn} from "entities/index";
import {useSelector} from "react-redux";
import {RootState} from "app/model/store";

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

export const Board: FC<{ children: React.ReactElement }> = ({children}) => {
    // const dispatch = useDispatch();
    //
    // const clickHandle = () => {
    //     dispatch(setGameField({column: 0, playerId: 2}))
    // }

    const chips = useSelector((state: RootState) => state.board.chips);

    const drawBoard = () => {
        const boardChips = new Array<any | string | JSX.Element>([])
        for (let j = 0; j < chips[0].length; j++) {
            const chipsColumn = new Array<any | string | JSX.Element>([])
            for (let i = 0; i < chips.length; i++) {
                chipsColumn.push(
                    <Chip key={`${j}${i}`} row={i} isAvailable={chips[i][j] === 0} chipValue={chips[i][j]} />
                )
            }
            boardChips.push(
                <ChipsColumn>
                    {chipsColumn}
                </ChipsColumn>
            )
        }
        return boardChips;
    }

    return (
        <StyledContainer>
            <>
                {children}
                {drawBoard()}
            </>
        </StyledContainer>
    );
};
