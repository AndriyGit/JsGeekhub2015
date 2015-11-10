/**
 * Created by andrey on 03.11.15.
 */

// apply - можно вызвать функцию в контексте какого-то конкретного объекта
var obj1 = {name: 'jopa'};
var obj2 = {name: 'govno'};

function test() {
  console.log(this.name);
}

test.apply(obj1); // jopa
test.apply(obj2); // govno


// Array.prototype - можно создать методы которые вызывать у массива
// http://www.w3schools.com/jsref/jsref_prototype_array.asp - хороший пример
Array.prototype.addFive = function() {
  for (var i = 0; i < this.length; i++) {
    this[i] = this[i] + 5;
  }
}

arr = [1,2,3];
arr.addFive(); // [6,7,8]


// call - почти тоже самое как и apply
// В apply вторым аргументом передаётся массив переменных
// В call все аргументы через запятую (второй и последующие аргументы не могут быть переданы в виде массива переменных)

