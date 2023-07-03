// @flow
import * as React from 'react';
import styled from "styled-components";
import {FC} from "react";

const StyledContainer = styled.div`
  display: grid;
  grid-column-gap: 5px;
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
  
  padding: 10px 10px 40px 10px;
  
  z-index: 10;
`

const ChipsColumn = styled.div`
  display: grid;
  grid-template-rows: repeat(7, fit-content(5px));

  width: 100px;
  height: fit-content;

  background-color: #7221e8;
`

export const Board: FC<{ children: React.ReactElement }> = ({children}) => {
    // const dispatch = useDispatch();
    //
    // const clickHandle = () => {
    //     dispatch(setGameField({column: 0, playerId: 2}))
    // }

    return (
        <StyledContainer>
            {children}
            {/*<GameFieldsColumn onClick={clickHandle}>*/}
            {/*    {Array.from(Array(6).keys()).map(index => {*/}
            {/*         return <Chip row={index} column={0}/>*/}
            {/*     })}*/}
            {/* </GameFieldsColumn>*/}

        </StyledContainer>
    );
};
