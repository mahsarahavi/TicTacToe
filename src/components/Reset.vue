<script setup>
import {
  mark,
  currentPlayer,
  X,
  isWinner,
  Winner,
  xIndex,
  oIndex,
} from "../constants/index";

function reset() {
  mark.value = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];
  currentPlayer.value = X;
  isWinner.value = false;
  Winner.value = "";
  xIndex.value = [];
  oIndex.value = [];
}
</script>

<template>
  <button @click="reset">Reset</button>
</template>
