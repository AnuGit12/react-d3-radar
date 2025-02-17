"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = RadarRings;

var _react = _interopRequireDefault(require("react"));

var _reverse = _interopRequireDefault(require("lodash/reverse"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var defaultRadarRingsStyle = {
  fontFamily: "sans-serif",
  fontSize: 10,
  ringOpacity: 0.3,
  textFill: "black"
};

function RadarRings(props) {
  var ticks = props.ticks,
      scale = props.scale,
      color = props.color,
      format = props.format,
      style = props.style;

  var _defaultRadarRingsSty = _objectSpread({}, defaultRadarRingsStyle, style),
      fontFamily = _defaultRadarRingsSty.fontFamily,
      fontSize = _defaultRadarRingsSty.fontSize,
      ringOpacity = _defaultRadarRingsSty.ringOpacity,
      textFill = _defaultRadarRingsSty.textFill;
      // [1, 0.75, 0.5, 0.25]

  var outerFirst = (0, _reverse.default)(ticks);
  return _react.default.createElement("g", null, outerFirst.map(function (tickValue) {
    console.log("^^^^^",scale(tickValue))
    var circleColor=''
    if(scale(tickValue)==180){
      circleColor="#FF0000"
    }else if(scale(tickValue)==135){
      circleColor="#FFA620"
    }else if(scale(tickValue)==90){
      circleColor="#276FDA"
    }else if(scale(tickValue)==45){
      circleColor="#0BAF17"
    }else{
      circleColor="#6C757D"

    }
    return _react.default.createElement("circle", {
      key: "".concat(tickValue),
      fillOpacity: ringOpacity,
      fill: circleColor,
      stroke: color,
      r: scale(tickValue)
    });
  }), outerFirst.map(function (tickValue) {
    return _react.default.createElement("text", {
      key: "".concat(tickValue, "-tick"),
      x: 0,
      y: -scale(tickValue),
      dx: "0.4em",
      dy: "0.4em",
      fontFamily: fontFamily,
      fontSize: fontSize,
      textAnchor: "left",
      fill: textFill
    }, format(tickValue));
  }));
}
