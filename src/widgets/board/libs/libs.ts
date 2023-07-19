import {ColumnNumber} from "entities/chip/model/types";

export const emulateCPUMove = (): ColumnNumber => {
    return Math.floor(Math.random() * 6 + 1) as ColumnNumber
}
