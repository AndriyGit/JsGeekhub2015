/**
 * Created by andrey on 01.11.15.
 */

// decoration function - can be used any number of times
function decorator(num1, num2) {
  if(num2 > 500) return null;
  return [num1 + num2, num2*3];
}

// original function - using as the last one
function multiplyBy100(num1, num2) {
  return [num1*100, num2*100];
}

function fn() {
  var args = Array.prototype.slice.call(arguments);
  return function(p1, p2) {
    var result, i;
    for (i=0; i<args[0].length; i++) {
      result = args[0][i](p1, p2);
      if(result == null) break;
      p1 = result[0];
      p2 = result[1];

    }
    if(result != null) {
      result = args[1](p1, p2);
    }
    return result;
  }
}

/**
 * you can provide function 'decorator' any number of times;
 * if you want that 'decorator' returns null and stop processing please provide 'decorator' function 4 times
 * and call 'applyDecorator' with second parameter no less then 20
 */
applyDecorator = fn([decorator, decorator], multiplyBy100);
applyDecorator(1, 20);
