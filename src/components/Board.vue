<script setup>
import { ref } from "vue";
import Square from "./Square.vue";

const mark = ref([
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
]);
const size = ref(3);
const X = "X";
const O = "O";
const currentPlayer = ref(X);
let xIndex = [];
let oIndex = [];
const winnerStates = [
  [
    [0, 0],
    [0, 1],
    [0, 2],
  ],
  [
    [1, 0],
    [1, 1],
    [1, 2],
  ],
  [
    [2, 0],
    [2, 1],
    [2, 2],
  ],
  [
    [0, 0],
    [1, 0],
    [2, 0],
  ],
  [
    [0, 1],
    [1, 1],
    [2, 1],
  ],
  [
    [0, 2],
    [1, 2],
    [2, 2],
  ],
  [
    [0, 0],
    [1, 1],
    [2, 2],
  ],
  [
    [0, 2],
    [1, 1],
    [2, 0],
  ],
];
const isWinner = ref(false);
const Winner = ref();

function checkArrInArr(mainArr, sample) {
  var i, j, current;
  for (i = 0; i < mainArr.length; i++) {
    current = mainArr[i];
    for (j = 0; j < sample.length && sample[j] === current[j]; j++);
    if (j === sample.length) return true;
  }
}

function checkWinner(arr) {
  let check = [];
  var i, j, k;
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

function changeTurn(row, col) {
  mark.value[row][col] = currentPlayer.value;
  if (currentPlayer.value == X) {
    currentPlayer.value = O;
    xIndex.push([row, col]);
    checkWinner(xIndex);
    if (isWinner.value) {
      currentPlayer.value = X;
    }
  } else {
    currentPlayer.value = X;
    oIndex.push([row, col]);
    checkWinner(oIndex);
    if (isWinner.value) {
      currentPlayer.value = O;
    }
  }
}

function reset() {
  mark.value = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];
  currentPlayer.value = X;
  isWinner.value = false;
  Winner.value = "";
  xIndex = [];
  oIndex = [];
}
</script>

<template>
  <h1 class="mb-10">Tic Tac Toe</h1>

  <div id="board">
    <table class="h-96 w-96">
      <tr v-for="i in size" :key="i">
        <td v-for="j in size" :key="j" @click="changeTurn(i - 1, j - 1)">
          {{ mark[i - 1][j - 1] }}
        </td>
      </tr>
    </table>
  </div>

  <div class="mt-5" v-if="isWinner">Winner is: Player {{ currentPlayer }}</div>
  <div class="mt-5" v-else>Turn: Player {{ currentPlayer }}</div>
  <div class="mt-5">
    <button @click="reset">Reset</button>
  </div>
</template>
