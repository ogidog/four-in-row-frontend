import React, {useRef, useState} from 'react';
import styled from "styled-components";
import {GameField} from "./entities";
import {useDispatch} from "react-redux";
import {setGameField} from "./share/slices/game-slice";


const GameFieldsColumn = styled.div`
  display: grid;
  grid-template-rows: repeat(7, fit-content(5px));

  width: 100px;
  height: fit-content;
  border: 1px solid blue;
`

function App() {
    const availableNumRef = useRef(8)
    const [key, setKey] = useState<number>(Date.now());
    const dispatch = useDispatch();

    const clickHandle = () => {
        dispatch(setGameField({column: 0, playerId: 1}))
        // availableNumRef.current -= 1
        // setKey(Date.now())
    }

    return (
        <GameFieldsColumn onClick={clickHandle}>
            {Array.from(Array(6).keys()).map(index => {
                return <GameField row={index} column={0}/>
            })}
        </GameFieldsColumn>
    );
}

export default App;
