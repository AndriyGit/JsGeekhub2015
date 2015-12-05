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

let polygon = new Polygon({1:3, 5:4, 2:7});
console.log(polygon.perimeter());
