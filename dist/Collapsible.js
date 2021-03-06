"use strict";
Object.defineProperty(exports, "__esModule", { value: !0 });
var _createClass = (function() {
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
  _propTypes2 = _interopRequireDefault(_propTypes),
  _CollapseContainer = require("./CollapseContainer"),
  _CollapseContainer2 = _interopRequireDefault(_CollapseContainer),
  _CollapsePane = require("./CollapsePane"),
  _CollapsePane2 = _interopRequireDefault(_CollapsePane);
function _interopRequireDefault(a) {
  return a && a.__esModule ? a : { default: a };
}
function _toConsumableArray(a) {
  if (Array.isArray(a)) {
    for (var b = 0, c = Array(a.length); b < a.length; b++) c[b] = a[b];
    return c;
  }
  return Array.from(a);
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
var Collapsible = (function(a) {
  function b(a) {
    var c = a.keepOpen;
    _classCallCheck(this, b);
    var d = _possibleConstructorReturn(
      this,
      (b.__proto__ || Object.getPrototypeOf(b)).call(this)
    );
    return (
      (d.state = { currentActiveIndex: c ? [] : "" }),
      (d.onCollapse = d.onCollapse.bind(d)),
      d
    );
  }
  return (
    _inherits(b, a),
    _createClass(b, [
      {
        key: "onCollapse",
        value: function c(a) {
          var b = this.props.keepOpen;
          b ? this.keepOpenCollapse(a) : this.defaultCollapse(a);
        }
      },
      {
        key: "keepOpenCollapse",
        value: function c(a) {
          var b = this.state.currentActiveIndex;
          0 > b.indexOf(a.toString())
            ? this.setState({
                currentActiveIndex: [a.toString()].concat(_toConsumableArray(b))
              })
            : this.setState({
                currentActiveIndex: b.filter(function(b) {
                  return 0 > b.indexOf(a.toString());
                })
              });
        }
      },
      {
        key: "defaultCollapse",
        value: function c(a) {
          var b = this.state.currentActiveIndex;
          b.toString() === a.toString() && 1 < a.length
            ? this.setState({ currentActiveIndex: a.slice(0, a.length - 2) })
            : b.toString() === a.toString()
            ? this.setState({ currentActiveIndex: "" })
            : this.setState({ currentActiveIndex: a });
        }
      },
      {
        key: "render",
        value: function f() {
          var a = this,
            b = this.props,
            c = b.data,
            d = b.keepOpen,
            e = b.customTransition;
          return _react2.default.createElement(
            "div",
            null,
            _react2.default.createElement(
              _CollapseContainer2.default,
              {
                currentActiveIndex: this.state.currentActiveIndex,
                onCollapse: function c(b) {
                  return a.onCollapse(b);
                }
              },
              c.map(function(a, b) {
                return _react2.default.createElement(
                  _CollapsePane2.default, // eslint-disable-next-line
                  {
                    key: "collapse-pane-" + b,
                    items: a,
                    index: b,
                    keepOpen: d,
                    customTransition: e
                  }
                );
              })
            )
          );
        }
      }
    ]),
    b
  );
})(_react.Component);
(Collapsible.propTypes = {
  data: _propTypes2.default.arrayOf(_propTypes2.default.object).isRequired,
  keepOpen: _propTypes2.default.bool,
  customTransition: _propTypes2.default.string
}),
  (Collapsible.defaultProps = { keepOpen: !1, customTransition: void 0 }),
  (exports.default = Collapsible);
