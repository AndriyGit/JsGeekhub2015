'use strict';
class Figure {
  // coordinates should come like object - {x1: y1, x2: y2}
  constructor(coordinates) {
    this.coordinates = coordinates;
  }

  segment(x1, x2, y1, y2) {
    let x, y;
    x = Math.abs(x1-x2);
    y = Math.abs(y1-y2);
    return Math.sqrt(Math.pow(x, x) + Math.pow(y, y));
  }
}


class Polygon extends Figure {
  perimeter() {
    let i = 0, p = 0, x1, x2, y1, y2;
    let abscissaValues = Object.keys(this.coordinates);
    for(i; i < abscissaValues.length - 1; i++) {
      x1 = +abscissaValues[i];
      y1 = this.coordinates[x1];
      x2 = i != abscissaValues.length - 1 ? +abscissaValues[i + 1] : +abscissaValues[0];
      y2 = this.coordinates[x2];

      p += this.segment(x1, x2, y1, y2);
    }
    return p;
  }
}

//let polygon = new Polygon({1:3, 5:4, 2:7});
//console.log(polygon.perimeter());


class Rectangle extends Polygon {
  coordin(i) {
    let c = [], x1, x2;
    let abscissaValues = Object.keys(this.coordinates);
    x1 = +abscissaValues[i];
    x2 = +abscissaValues[i+1];
    c.push(x1);
    c.push(x2);
    c.push(this.coordinates[x1]);
    c.push(this.coordinates[x2]);
    return c;
  }

  height() {
    var [x1, x2, y1, y2] = this.coordin(1);
    return this.segment(x1, x2, y1, y2);
  }

  width() {
    //let i = 0, x1, x2, y1, y2;
    //let abscissaValues = Object.keys(this.coordinates);
    //x1 = +abscissaValues[i];
    //y1 = this.coordinates[x1];
    //x2 = +abscissaValues[i+1];
    //y2 = this.coordinates[x2];
    var [x1, x2, y1, y2] = this.coordin(0);
    debugger;
    return this.segment(x1, x2, y1, y2);
  }

  area() {
    return this.width() * this.height();
  }
}

let rectangle = new Rectangle({1:6, 5:6, 4:4, 3:4});
console.log(rectangle.height());
console.log(rectangle.width());
console.log(rectangle.area());
console.log(rectangle.perimeter());
