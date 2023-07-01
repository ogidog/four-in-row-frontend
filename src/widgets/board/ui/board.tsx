// @flow
import * as React from 'react';
import styled from "styled-components";

const StyledContainer = styled.div`
  position: relative;
  top: 50px;
  
  border-radius: 10%;
  border: 3px solid #000000;
  
  box-sizing: border-box;

  background-color: var(--white);

  width: 100%;
  aspect-ratio: 1/1;
  max-width: 650px;

  box-shadow: 0px 9px 0 #000000;
  z-index: 10;
`

const GameFieldColumn = styled.div`
  display: grid;
  grid-template-rows: repeat(7, fit-content(5px));

  width: 100px;
  height: fit-content;

  background-color: #7221e8;
`

export const Board = () => {
    // const dispatch = useDispatch();
    //
    // const clickHandle = () => {
    //     dispatch(setGameField({column: 0, playerId: 2}))
    // }

    return (
        <StyledContainer>

            {/*<GameFieldsColumn onClick={clickHandle}>*/}
            {/*    {Array.from(Array(6).keys()).map(index => {*/}
            {/*         return <GameField row={index} column={0}/>*/}
            {/*     })}*/}
            {/* </GameFieldsColumn>*/}


        </StyledContainer>
    );
};
