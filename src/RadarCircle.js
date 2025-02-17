"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = RadarCircle;

var _react = _interopRequireDefault(require("react"));

var _round = _interopRequireDefault(require("lodash/round"));

var _d3Shape = require("d3-shape");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var defaultCircleStyle = {
  selectedFillOpacity: 0.5,
  inactiveFillOpacity: 0.2,
  selectedStrokeOpacity: 1.0,
  inactiveStrokeOpacity: 0.7,
  pointRadius: 3,
  selectedPointFill: "white",
  selectedPointOpacity: 1.0,
  inactivePointOpacity: 0.7
};

function RadarCircle(props) {
  var points = props.points,
      scales = props.scales,
      offsetAngles = props.offsetAngles,
      isSelected = props.isSelected,
      color = props.color,
      selectedVariableKey = props.selectedVariableKey,
      style = props.style;

  var _defaultCircleStyle$s = _objectSpread({}, defaultCircleStyle, style),
      selectedFillOpacity = _defaultCircleStyle$s.selectedFillOpacity,
      inactiveFillOpacity = _defaultCircleStyle$s.inactiveFillOpacity,
      selectedStrokeOpacity = _defaultCircleStyle$s.selectedStrokeOpacity,
      inactiveStrokeOpacity = _defaultCircleStyle$s.inactiveStrokeOpacity,
      pointRadius = _defaultCircleStyle$s.pointRadius,
      selectedPointFill = _defaultCircleStyle$s.selectedPointFill,
      selectedPointOpacity = _defaultCircleStyle$s.selectedPointOpacity,
      inactivePointOpacity = _defaultCircleStyle$s.inactivePointOpacity;

  var lineFunction = (0, _d3Shape.radialLine)().radius(function (point) {
    return scales[point.variableKey](point.value);
  }).angle(function (point) {
    return (0, _round.default)(offsetAngles[point.variableKey], 6);
  }).curve(_d3Shape.curveCardinalClosed);
  var pathData = lineFunction(points);
  return _react.default.createElement("g", null, _react.default.createElement("path", {
    d: pathData,
    fill: color,
    fillOpacity: isSelected ? selectedFillOpacity : inactiveFillOpacity,
    stroke: color,
    strokeWidth:'4px',
    strokeOpacity: isSelected ? selectedStrokeOpacity : inactiveStrokeOpacity
  }), points.map(function (point) {
    return _react.default.createElement("circle", {
      key: point.key,
      r: pointRadius,
      fill: point.variableKey === selectedVariableKey ? selectedPointFill : color,
      stroke: color,
      cx: point.x,
      cy: point.y,
      opacity: isSelected ? selectedPointOpacity : inactivePointOpacity
    });
  }));
}
