import { checkArrInArr } from './checkArrInArr';
import {
    currentPlayer,
    isWinner,
    Winner,
    winnerStates,
} from '../constants';

export function checkWinner(arr) {
    let check = [];
    let i, j, k;
    for (i = 0; i < winnerStates.length; i++) {
        for (j = 0; j < arr.length; j++) {
            if (checkArrInArr(winnerStates[i], arr[j])) {
                check.push(winnerStates[i]);
            }
        }
    }
    for (k = 0; k < check.length; k++) {
        let lengthOfCheck = check.filter((element) => element === check[k]).length;
        if (lengthOfCheck == 3) {
            isWinner.value = true;
            Winner.value = currentPlayer;
        }
    }
}
