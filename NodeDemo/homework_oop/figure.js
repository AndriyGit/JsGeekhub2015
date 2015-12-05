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
