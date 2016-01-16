'use strict';
//import initialize from './initialize';

let area;
let initializeAreaButton = document.getElementById('initializeAreaButton');
let tableSize, i, j;

initializeAreaButton.addEventListener('click', initializeGame);

function initializeGame() {
  //document.
  tableSize = document.getElementById('area-size').value;

  area = buildMatrixArray();
  createTable();

  drawCells();

}

function drawCells() {
  for(i = 0; i < tableSize; i++) {
    for(j = 0; j < tableSize; j++) {
      if (area[i][j]) {
        let td = document.getElementById(''+i+j);
        td.className = 'active';
      }

    }
  }
}



function createTable() {
  let table = document.createElement('table');
  for (i = 0; i < tableSize; i++) {
    var tr = document.createElement('tr');
    for (j = 0; j < tableSize; j++) {
      var td = document.createElement('td');
      td.id = '' + i + j;
      tr.appendChild(td);
    }
    table.appendChild(tr);
  }
  document.body.appendChild(table);
}



function buildMatrixArray() {
  let arr = [];
  for(i = 0; i < tableSize; i++) {
    arr[i] = [];
    for(j = 0; j < tableSize; j++) {
      arr[i][j] = setCellState();
    }
  }
  return arr;
}

function setCellState() {
  let r = Math.random(), alive;
  alive = r >= 0.5;
  return alive;
}




console.log(area);




function tableCreate(size) {

}

