// @flow
import * as React from 'react';
import {JSX, memo} from "react";
import styled from "styled-components";
import {ColumnNumber} from "entities/chip/model/types";

const StyledContainer = styled.div`
  display: grid;
  grid-template-rows: repeat(6, fit-content(5px));
  grid-row-gap: 10px;
  justify-items: center;
  align-items: center;

  width: 100%;
  height: fit-content;

`

type Props = {
    isSelected: boolean,
    column: ColumnNumber,
    children: any | string | JSX.Element,
    onClick: (event: React.MouseEvent) => void
}

const ChipsColumn = (props: Props) => {
    const {children, onClick} = props;

    const clickHandle = (event: React.MouseEvent) => {
        onClick(event);
    }

    return (
        <StyledContainer onClick={clickHandle}>
            {children}
        </StyledContainer>
    );
};

export default memo(ChipsColumn, (prevProps, newProps) => !newProps.isSelected);
