'use strict';
let area;
function go() {alert(1);}

function matrixArray(rows,columns) {
  let arr = [];
  let i, j;
  for(i = 0; i < columns; i++) {
    arr[i] = [];
    for(j = 0; j < rows; j++) {
      arr[i][j] = setСellState();
    }
  }
  return arr;
}

function setСellState() {
  let r = Math.random(), alive;
  alive = r >= 0.5;
  return alive;
}

area = matrixArray(6, 6);

console.log(area);




