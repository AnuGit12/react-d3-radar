"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _RadarAxis = _interopRequireDefault(require("./RadarAxis"));

var _RadarCircle = _interopRequireDefault(require("./RadarCircle"));

var _RadarRings = _interopRequireDefault(require("./RadarRings"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var defaultRadarStyle = {
  numRings: 4,
  axisColor: "#cdcdcd",
  ringColor: "#cdcdcd"
};

function getHovered(event, height, width, padding, radius, voronoiDiagram) {
  var innerHeight = height - padding * 2;
  var innerWidth = width - padding * 2;
  var diameter = radius * 2;
  var clientX = event.offsetX,
      clientY = event.offsetY;
  clientX -= padding;
  clientY -= padding;
  clientX -= (innerWidth - diameter) / 2;
  clientY -= (innerHeight - diameter) / 2;
  var site = voronoiDiagram.find(clientX, clientY, radius / 2);

  if (!site) {
    return null;
  }

  var data = site.data;
  return data;
}

var RadarWrapper =
/*#__PURE__*/
function (_Component) {
  _inherits(RadarWrapper, _Component);

  function RadarWrapper() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, RadarWrapper);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(RadarWrapper)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "hoverMap", null);

    return _this;
  }

  _createClass(RadarWrapper, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      if (this.hoverMap) {
        this.hoverMap.addEventListener("mousemove", function (event) {
          var onHover = _this2.props.onHover;

          if (!onHover) {
            return;
          }

          var _this2$props = _this2.props,
              padding = _this2$props.padding,
              height = _this2$props.height,
              width = _this2$props.width,
              radius = _this2$props.radius,
              voronoiDiagram = _this2$props.voronoiDiagram;
          onHover(getHovered(event, height, width, padding, radius, voronoiDiagram));
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$props = this.props,
          width = _this$props.width,
          height = _this$props.height,
          padding = _this$props.padding,
          radius = _this$props.radius,
          style = _this$props.style,
          highlighted = _this$props.highlighted,
          scales = _this$props.scales,
          variables = _this$props.variables,
          offsetAngles = _this$props.offsetAngles,
          domainMax = _this$props.domainMax,
          highlightedPoint = _this$props.highlightedPoint,
          regularPoints = _this$props.regularPoints,
          backgroundScale = _this$props.backgroundScale,
          colors = _this$props.colors,
          onAxisLabelClick = _this$props.onAxisLabelClick,
          onAxisLabelMouseover = _this$props.onAxisLabelMouseover,
          axisLabelTextStyle = _this$props.axisLabelTextStyle;
      var diameter = radius * 2;

      var _defaultRadarStyle$st = _objectSpread({}, defaultRadarStyle, style),
          axisColor = _defaultRadarStyle$st.axisColor,
          ringColor = _defaultRadarStyle$st.ringColor,
          numRings = _defaultRadarStyle$st.numRings;
          numRings = 4
          console.log("@@",numRings)

      var innerHeight = height - padding * 2;
      var innerWidth = width - padding * 2;
      // var ticks = backgroundScale.ticks(numRings).slice(1);
      var ticks = [0.25, 0.5, 0.75, 1]
      console.log("#@",ticks)
      var tickFormat = backgroundScale.tickFormat(numRings);
      return _react.default.createElement("svg", {
        width: width,
        height: height,
        style: {
          width: "100%",
          height: "100%",
          overflow: "visible"
        },
        viewBox: "0 0 ".concat(width, " ").concat(height)
      }, _react.default.createElement("g", {
        transform: "translate(".concat(padding, ", ").concat(padding, ")"),
        ref: function ref(c) {
          _this3.hoverMap = c;
        }
      }, _react.default.createElement("rect", {
        width: diameter,
        height: diameter,
        fill: "transparent",
        transform: "translate(".concat((innerWidth - diameter) / 2, ", ").concat((innerHeight - diameter) / 2, ")")
      }), _react.default.createElement("g", {
        transform: "translate(".concat(innerWidth / 2, ", ").concat(innerHeight / 2, ")")
      }, _react.default.createElement(_RadarRings.default, {
        ticks: ticks,
        scale: backgroundScale,
        color: ringColor,
        format: tickFormat
      }), variables.map(function (_ref) {
        var key = _ref.key,
            label = _ref.label;
        return _react.default.createElement(_RadarAxis.default, {
          key: key,
          variableKey: key,
          scale: scales[key],
          offsetAngle: offsetAngles[key],
          label: label,
          domainMax: domainMax,
          color: axisColor,
          onAxisLabelClick: onAxisLabelClick,
          onAxisLabelMouseover: onAxisLabelMouseover,
          textStyle: axisLabelTextStyle
        });
      }), regularPoints.map(function (_ref2) {
        var setKey = _ref2.setKey,
            points = _ref2.points;
        return _react.default.createElement(_RadarCircle.default, {
          key: setKey,
          points: points,
          scales: scales,
          offsetAngles: offsetAngles,
          color: colors[setKey],
          isSelected: false,
          selectedVariableKey: null
        });
      }), highlightedPoint ? _react.default.createElement(_RadarCircle.default, {
        key: highlightedPoint.setKey,
        points: highlightedPoint.points,
        scales: scales,
        offsetAngles: offsetAngles,
        color: colors[highlightedPoint.setKey],
        isSelected: true,
        selectedVariableKey: highlighted ? highlighted.variableKey : null
      }) : null)));
    }
  }]);

  return RadarWrapper;
}(_react.Component);

exports.default = RadarWrapper;
