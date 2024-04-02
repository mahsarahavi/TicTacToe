import { ref } from 'vue'

const X = "X";
const O = "O";
const mark = ref([
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
]);
const size = ref(3);
const currentPlayer = ref(X);
let xIndex = ref([]);
let oIndex = ref([])
const isWinner = ref(false);
const Winner = ref();
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

export { X, O, mark, size, currentPlayer, xIndex, oIndex, isWinner, Winner, winnerStates }