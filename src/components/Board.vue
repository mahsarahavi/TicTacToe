<script setup>
import Square from "./Square.vue";
import Reset from "./Reset.vue";
import { changeTurn } from "../functions/changeTurn";
import { mark, size, currentPlayer, isWinner } from "../constants";
</script>

<template>
  <h1 class="mb-10">Tic Tac Toe</h1>

  <div id="board">
    <div class="h-96 w-96">
      <div class="flex" v-for="i in size" :key="i">
        <Square
          v-for="j in size"
          :key="j"
          :value="mark[i - 1][j - 1]"
          @square-click="changeTurn(i - 1, j - 1)"
        />
      </div>
    </div>
  </div>

  <div class="mt-5" v-if="isWinner">Winner is: Player {{ currentPlayer }}</div>
  <div class="mt-5" v-else>Turn: Player {{ currentPlayer }}</div>
  <div class="mt-5">
    <Reset />
  </div>
</template>
