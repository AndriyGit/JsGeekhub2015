"use strict";

var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; })();

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Figure = (function () {
  // coordinates should come like object - {x1: y1, x2: y2}

  function Figure(coordinates) {
    _classCallCheck(this, Figure);

    this.coordinates = coordinates;
  }

  _createClass(Figure, [{
    key: "segment",
    value: function segment(x1, x2, y1, y2) {
      var x = undefined,
          y = undefined;
      x = Math.abs(x1 - x2);
      y = Math.abs(y1 - y2);
      return Math.sqrt(Math.pow(x, x) + Math.pow(y, y));
    }
  }]);

  return Figure;
})();

var Polygon = (function (_Figure) {
  _inherits(Polygon, _Figure);

  function Polygon() {
    _classCallCheck(this, Polygon);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Polygon).apply(this, arguments));
  }

  _createClass(Polygon, [{
    key: "perimeter",
    value: function perimeter() {
      var i = 0,
          p = 0,
          x1 = undefined,
          x2 = undefined,
          y1 = undefined,
          y2 = undefined;
      var abscissaValues = Object.keys(this.coordinates);
      for (i; i < abscissaValues.length - 1; i++) {
        x1 = +abscissaValues[i];
        y1 = this.coordinates[x1];
        x2 = i != abscissaValues.length - 1 ? +abscissaValues[i + 1] : +abscissaValues[0];
        y2 = this.coordinates[x2];

        p += this.segment(x1, x2, y1, y2);
      }
      return p;
    }
  }]);

  return Polygon;
})(Figure);

//let polygon = new Polygon({1:3, 5:4, 2:7});
//console.log(polygon.perimeter());

var Rectangle = (function (_Polygon) {
  _inherits(Rectangle, _Polygon);

  function Rectangle() {
    _classCallCheck(this, Rectangle);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Rectangle).apply(this, arguments));
  }

  _createClass(Rectangle, [{
    key: "coordin",
    value: function coordin(i) {
      var c = [],
          x1 = undefined,
          x2 = undefined;
      var abscissaValues = Object.keys(this.coordinates);
      x1 = +abscissaValues[i];
      x2 = +abscissaValues[i + 1];
      c.push(x1);
      c.push(x2);
      c.push(this.coordinates[x1]);
      c.push(this.coordinates[x2]);
      return c;
    }
  }, {
    key: "height",
    value: function height() {
      var _coordin = this.coordin(1);

      var _coordin2 = _slicedToArray(_coordin, 4);

      var x1 = _coordin2[0];
      var x2 = _coordin2[1];
      var y1 = _coordin2[2];
      var y2 = _coordin2[3];

      return this.segment(x1, x2, y1, y2);
    }
  }, {
    key: "width",
    value: function width() {
      //let i = 0, x1, x2, y1, y2;
      //let abscissaValues = Object.keys(this.coordinates);
      //x1 = +abscissaValues[i];
      //y1 = this.coordinates[x1];
      //x2 = +abscissaValues[i+1];
      //y2 = this.coordinates[x2];

      var _coordin3 = this.coordin(0);

      var _coordin4 = _slicedToArray(_coordin3, 4);

      var x1 = _coordin4[0];
      var x2 = _coordin4[1];
      var y1 = _coordin4[2];
      var y2 = _coordin4[3];

      return this.segment(x1, x2, y1, y2);
    }
  }, {
    key: "area",
    value: function area() {
      return this.width() * this.height();
    }
  }]);

  return Rectangle;
})(Polygon);

var rectangle = new Rectangle({ 1: 6, 5: 6, 5: 4, 1: 4 });
console.log(rectangle.height());
console.log(rectangle.width());
console.log(rectangle.area());
console.log(rectangle.perimeter());
