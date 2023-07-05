// @flow
import * as React from 'react';
import {FC, JSX} from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  display: grid;
  grid-template-rows: repeat(6, fit-content(5px));
  grid-row-gap: 10px;
  justify-items: center;
  align-items: center;
  
  width: 100%;
  height: fit-content;
  
`

const ChipsColumn: FC<{ children: any | string | JSX.Element }> = ({children}) => {
    return (
        <StyledContainer>
            {children}
        </StyledContainer>
    );
};

export default ChipsColumn;
