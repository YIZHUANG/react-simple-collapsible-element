'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CollapseContainer = function CollapseContainer(_ref) {
  var children = _ref.children,
      currentActiveIndex = _ref.currentActiveIndex,
      _onCollapse = _ref.onCollapse;

  return _react2.default.Children.toArray(children).map(function (child, index) {
    return _react2.default.cloneElement(child, {
      currentActiveIndex: currentActiveIndex,
      onCollapse: function onCollapse(index) {
        return _onCollapse(index);
      }
    });
  });
};

exports.default = CollapseContainer;