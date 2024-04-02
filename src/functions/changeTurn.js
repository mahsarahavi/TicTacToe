import { checkWinner } from './checkWinner';
import {
    X,
    O,
    mark,
    currentPlayer,
    xIndex,
    oIndex,
    isWinner,
} from '../constants'

export function changeTurn(row, col) {
    mark.value[row][col] = currentPlayer.value;
    if (currentPlayer.value == X) {
        currentPlayer.value = O;
        xIndex.value.push([row, col]);
        checkWinner(xIndex.value);
        if (isWinner.value) {
            currentPlayer.value = X;
        }
    } else {
        currentPlayer.value = X;
        oIndex.value.push([row, col]);
        checkWinner(oIndex.value);
        if (isWinner.value) {
            currentPlayer.value = O;
        }
    }
}