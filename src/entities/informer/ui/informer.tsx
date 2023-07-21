// @flow
import * as React from 'react';
import styled from "styled-components";
import {Simulate} from "react-dom/test-utils";
import play = Simulate.play;

const StyledContainer = styled.div<{ player: 0 | 1 | 2 }>`
  display: flex;
  flex-direction: column;
  grid-row-gap: 5px;
  justify-content: flex-start;
  align-items: center;

  position: absolute;
  top: 95%;
  left: 50%;
  transform: translateX(-50%);

  min-width: 220px;
  min-height: 135px;

  z-index: 20;

  background-color: ${props => props.player === 1 ? '#f8f861' : props.player === 2 ?'orange':'#ffffff'};

  border-radius: 20px;
  border: 2px solid black;
  box-shadow: 0 5px #000000;

  padding: 10px;
  box-sizing: border-box;
`;

const Message = styled.div`
  font-weight: bold;
  font-size: 2.8em;
  color: black;
`

const PlayAgainButton = styled.button`
  width: 130px;
  height: 40px;

  border-radius: 10px;
  border: 1px solid #000000;
  background-color: blue;

  font-weight: bold;
  font-size: 1.1em;
  color: #fffff0;
`


type Props = {
    player: 0 | 1 | 2;
};

export const Informer = (props: Props) => {
    const {player} = props;

    return (
        <StyledContainer player={player}>
            <Message>
                {player === 1 ? 'WIN!' : player === 2 ? 'LOSE!' : 'DRAW'}
            </Message>
            <PlayAgainButton>
                Play Again
            </PlayAgainButton>
        </StyledContainer>
    );
};
