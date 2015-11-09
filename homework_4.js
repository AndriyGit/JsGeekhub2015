/**
 * Created by andrey on 08.11.15.
 */

var arr = ['a', 'b', 'c', 'd'];
var numbers = [1, 4, 9, 16, 9, 12];

function addFive(el) {
  return el + 5;
}

function sumOfTwoNumbers(a, b) {
  return a + b;
}

function isBiggerThanFive(element) {
  console.log(element);
  return element > 5;
}

function addSymbol(str) {
  return str + 'q';
}

function mapCustom(array, func) {
  var i, currentValue;
  var newArray = [];
  for(i = 0; i < array.length; i++) {
    currentValue = array[i];
    newArray[i] = func(currentValue, i, array);
  }
  return newArray;
}

//console.log(mapCustom(numbers, addFive));


function reduceCustom(array, func, initValue) {
  var previousValue, currentValue, i;

  if(initValue !== undefined) {
    previousValue = initValue;
    i = 0;
  } else {
    previousValue = array[0];
    i = 1;
  }

  for(i; i < array.length; i++) {
    currentValue = array[i];
    previousValue = func(previousValue, currentValue, i, array);
  }
  return previousValue;
}

//console.log(reduceCustom(numbers, sumOfTwoNumbers));
//console.log(reduceCustom(numbers, sumOfTwoNumbers, 50));


function forEachCustom(array, func) {
  var currentValue, i;
  for(i = 0; i < array.length; i++) {
    currentValue = array[i];
    if(currentValue !== undefined) func(currentValue, i, array);
  }
}

/*
 custom forEach
console.log(numbers);
forEachCustom(numbers, function(el) {
  console.log(el);
});
*/


function someCustom(array, func) {
  var currentValue, i, result;
  for(i = 0; i < array.length; i++) {
    currentValue = array[i];
    if(currentValue !== undefined) result = func(currentValue, i, array);
    if(result) break;
  }
  return result;
}

//console.log(someCustom(numbers, isBiggerThanFive));


function everyCustom(array, func) {
  var currentValue, i, result;
  for(i = 0; i < array.length; i++) {
    currentValue = array[i];
    if(currentValue !== undefined) result = func(currentValue, i, array);
    if(!result) break;
  }
  return result;
}

//console.log(everyCustom(numbers, isBiggerThanFive));
//console.log(everyCustom(mapCustom(numbers, addFive), isBiggerThanFive));


//Если fromIndex имеет отрицательное значение,
//то поиск начинается с индекса, равного длине массива плюс fromIndex.
function indexOfCustom(array, searchElement, fromIndex) {
  var i = 0;
  var index = -1;

  if(fromIndex !== undefined) {
    //i = fromIndex;
    if(fromIndex >= array.length) return -1;
    //if(fromIndex < 0) i = array.length + fromIndex;
    i = fromIndex < 0 ? array.length + fromIndex : fromIndex
  }
  for(i; i < array.length; i++) {
    if(searchElement === array[i]) {
      index = i;
      break;
    }
  }
  return index;
}

//console.log(indexOfCustom(numbers, 9)); // expect 2
//console.log(indexOfCustom(numbers, 9, -3)); // expect 4



function reverseCustom(array, func) {

}

function joinCustom(array, func) {

}

