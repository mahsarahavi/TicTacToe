export function checkArrInArr(mainArr, sample) {
  var i, j, current;
  for (i = 0; i < mainArr.length; i++) {
    current = mainArr[i];
    for (j = 0; j < sample.length && sample[j] === current[j]; j++);
    if (j === sample.length) return true;
  }
}