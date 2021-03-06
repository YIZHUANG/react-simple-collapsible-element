"use strict";
Object.defineProperty(exports, "__esModule", { value: !0 });
var _react = require("react"),
  _react2 = _interopRequireDefault(_react),
  _propTypes = require("prop-types"),
  _propTypes2 = _interopRequireDefault(_propTypes),
  _Content = require("./Content"),
  _Content2 = _interopRequireDefault(_Content),
  _Title = require("./Title"),
  _Title2 = _interopRequireDefault(_Title),
  _util = require("./util");
function _interopRequireDefault(a) {
  return a && a.__esModule ? a : { default: a };
}
function renderNestedElements(a, b, c, d) {
  var e = !!(4 < arguments.length && arguments[4] !== void 0) && arguments[4],
    f = 5 < arguments.length && arguments[5] !== void 0 ? arguments[5] : "";
  if (!Array.isArray(a)) throw new Error("nested elements must be an array");
  return a.map(function(a, g) {
    var h = a.titleStyle || {},
      i = a.contentStyle || {};
    return Array.isArray(a.content) // eslint-disable-next-line
      ? _react2.default.createElement(
          "div",
          { key: g },
          _react2.default.createElement(_Title2.default, {
            onCollapse: d,
            titleStyle: h,
            index: b + "-" + g,
            text: a.title,
            active: (0, _util.checkIfActive)(c, b, e),
            activeTitleStyle: a.activeTitleStyle,
            customTransition: f,
            isNested: !0
          }),
          renderNestedElements(a.content, b + "-" + g, c, d, e, f)
        ) // eslint-disable-next-line
      : _react2.default.createElement(
          "div",
          { key: g },
          _react2.default.createElement(_Title2.default, {
            titleStyle: h,
            onCollapse: d,
            index: b + "-" + g,
            text: a.title,
            active: (0, _util.checkIfActive)(c, b, e),
            activeTitleStyle: a.activeTitleStyle,
            customTransition: f,
            isNested: !0
          }),
          _react2.default.createElement(_Content2.default, {
            contentStyle: i,
            index: b + "-" + g,
            active: (0, _util.checkIfActive)(c, b + "-" + g, e),
            text: a.content,
            activeContentStyle: a.activeContentStyle,
            customTransition: f
          })
        );
  });
} // eslint-disable-next-line
var CollapsePane = function(a) {
  var b = a.index,
    c = a.items,
    d = a.currentActiveIndex,
    e = a.onCollapse,
    f = a.keepOpen,
    g = a.customTransition,
    h = c.titleStyle || {},
    i = c.contentStyle || {};
  return _react2.default.createElement(
    "div",
    null,
    _react2.default.createElement(_Title2.default, {
      active: (0, _util.checkIfActive)(d, b, f),
      titleStyle: h,
      index: b,
      onCollapse: e,
      text: c.title,
      customTransition: g
    }),
    Array.isArray(c.content)
      ? renderNestedElements(c.content, b, d, e, f, g)
      : _react2.default.createElement(_Content2.default, {
          active: (0, _util.checkIfActive)(d, b, f),
          text: c.content,
          contentStyle: i,
          activeContentStyle: c.activeContentStyle,
          customTransition: g
        })
  );
};
(CollapsePane.propTypes = {
  index: _propTypes2.default.oneOfType([
    _propTypes2.default.string,
    _propTypes2.default.number
  ]).isRequired,
  items: _propTypes2.default.shape({
    title: _propTypes2.default.oneOfType([
      _propTypes2.default.string,
      _propTypes2.default.element,
      _propTypes2.default.func
    ]),
    content: _propTypes2.default.oneOfType([
      _propTypes2.default.string,
      _propTypes2.default.element,
      _propTypes2.default.array,
      _propTypes2.default.func
    ])
  }).isRequired,
  currentActiveIndex: _propTypes2.default.oneOfType([
    _propTypes2.default.string,
    _propTypes2.default.number,
    _propTypes2.default.array
  ]),
  keepOpen: _propTypes2.default.bool,
  customTransition: _propTypes2.default.string,
  onCollapse: _propTypes2.default.func
}),
  (CollapsePane.defaultProps = {
    currentActiveIndex: void 0,
    keepOpen: !1,
    customTransition: "",
    onCollapse: function a() {}
  }),
  (exports.default = CollapsePane);
