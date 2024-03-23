<script setup>
import { ref } from "vue";

const mark = ref(["", "", "", "", "", "", "", "", ""]);
const X = "X";
const O = "O";
const currentPlayer = ref(X);
let xIndex = [];
let oIndex = [];

const winnerStates = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
const isWinner = ref(false);
const Winner = ref();

function checkWinner(arr) {
  for (let i = 0; i < 8; i++) {
    const check = new Set();
    for (let j = 0; j < 3; j++) {
      if (arr.includes(winnerStates[i][j])) {
        check.add(winnerStates[i][j]);
      }
    }
    if (check.size >= 3) {
      isWinner.value = true;
      Winner.value = currentPlayer;
      break;
    }
  }
}

function changeTurn(id) {
  mark.value[id] = currentPlayer.value;
  if (currentPlayer.value == X) {
    currentPlayer.value = O;
    xIndex.push(id);
    checkWinner(xIndex);
    if (isWinner.value) {
      currentPlayer.value = X;
    }
  } else {
    currentPlayer.value = X;
    oIndex.push(id);
    checkWinner(oIndex);
    if (isWinner.value) {
      currentPlayer.value = O;
    }
  }
}
function Reset() {
  mark.value = ["", "", "", "", "", "", "", "", ""];
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
      <tr>
        <td @click="changeTurn(0)">{{ mark[0] }}</td>
        <td @click="changeTurn(1)">{{ mark[1] }}</td>
        <td @click="changeTurn(2)">{{ mark[2] }}</td>
      </tr>
      <tr>
        <td @click="changeTurn(3)">{{ mark[3] }}</td>
        <td @click="changeTurn(4)">{{ mark[4] }}</td>
        <td @click="changeTurn(5)">{{ mark[5] }}</td>
      </tr>
      <tr>
        <td @click="changeTurn(6)">{{ mark[6] }}</td>
        <td @click="changeTurn(7)">{{ mark[7] }}</td>
        <td @click="changeTurn(8)">{{ mark[8] }}</td>
      </tr>
    </table>
  </div>

  <div class="mt-5" v-if="isWinner">Winner is: Player {{ currentPlayer }}</div>
  <div class="mt-5" v-else>Turn: Player {{ currentPlayer }}</div>
  <div class="mt-5">
    <button @click="Reset">Reset</button>
  </div>
</template>
