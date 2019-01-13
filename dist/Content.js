"use strict";
Object.defineProperty(exports, "__esModule", { value: !0 });
var _extends =
    Object.assign ||
    function(a) {
      for (var b, c = 1; c < arguments.length; c++)
        for (var d in ((b = arguments[c]), b))
          Object.prototype.hasOwnProperty.call(b, d) && (a[d] = b[d]);
      return a;
    },
  _createClass = (function() {
    function a(a, b) {
      for (var c, d = 0; d < b.length; d++)
        (c = b[d]),
          (c.enumerable = c.enumerable || !1),
          (c.configurable = !0),
          "value" in c && (c.writable = !0),
          Object.defineProperty(a, c.key, c);
    }
    return function(b, c, d) {
      return c && a(b.prototype, c), d && a(b, d), b;
    };
  })(),
  _react = require("react"),
  _react2 = _interopRequireDefault(_react),
  _propTypes = require("prop-types"),
  _propTypes2 = _interopRequireDefault(_propTypes);
function _interopRequireDefault(a) {
  return a && a.__esModule ? a : { default: a };
}
function _classCallCheck(a, b) {
  if (!(a instanceof b))
    throw new TypeError("Cannot call a class as a function");
}
function _possibleConstructorReturn(a, b) {
  if (!a)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return b && ("object" == typeof b || "function" == typeof b) ? b : a;
}
function _inherits(a, b) {
  if ("function" != typeof b && null !== b)
    throw new TypeError(
      "Super expression must either be null or a function, not " + typeof b
    );
  (a.prototype = Object.create(b && b.prototype, {
    constructor: { value: a, enumerable: !1, writable: !0, configurable: !0 }
  })),
    b &&
      (Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : (a.__proto__ = b));
} // eslint-disable-next-line
/* eslint-disable react/no-did-mount-set-state */ /* eslint-disable react/no-did-update-set-state */ var Content = (function(
  a
) {
  function b() {
    _classCallCheck(this, b);
    var a = _possibleConstructorReturn(
      this,
      (b.__proto__ || Object.getPrototypeOf(b)).call(this)
    );
    return (
      (a.contentRef = _react2.default.createRef()), (a.state = { height: 0 }), a
    );
  }
  return (
    _inherits(b, a),
    _createClass(b, [
      {
        key: "componentDidMount",
        value: function a() {
          this.setState({ height: this.contentRef.current.scrollHeight });
        }
      },
      {
        key: "componentDidUpdate",
        value: function b() {
          var a = this.state.height;
          this.contentRef.current.scrollHeight !== a &&
            this.setState({ height: this.contentRef.current.scrollHeight });
        }
      },
      {
        key: "render",
        value: function i() {
          var a = this.props,
            b = a.text,
            c = a.active,
            d = a.contentStyle,
            e = a.activeContentStyle,
            f = a.customTransition,
            g = "string" == typeof d ? d : "",
            h = g ? {} : d;
          return _react2.default.createElement(
            "div",
            {
              style: _extends({}, h, {
                height: c ? this.state.height : 0,
                transition: f || "height .3s ease-out",
                overflow: "hidden"
              }),
              ref: this.contentRef,
              className: c && e ? g + " " + e : g
            },
            "function" == typeof b ? b(c) : b
          );
        }
      }
    ]),
    b
  );
})(_react2.default.PureComponent);
(Content.propTypes = {
  text: _propTypes2.default.oneOfType([
    _propTypes2.default.string,
    _propTypes2.default.number,
    _propTypes2.default.element,
    _propTypes2.default.func
  ]).isRequired,
  active: _propTypes2.default.bool,
  contentStyle: _propTypes2.default.oneOfType([
    _propTypes2.default.string,
    _propTypes2.default.object
  ]),
  activeContentStyle: _propTypes2.default.string,
  customTransition: _propTypes2.default.string
}),
  (Content.defaultProps = {
    active: !1,
    contentStyle: void 0,
    activeContentStyle: void 0,
    customTransition: ""
  }),
  (exports.default = Content);
