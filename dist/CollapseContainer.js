'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

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

CollapseContainer.propTypes = {
  children: _propTypes2.default.oneOfType([_propTypes2.default.element, _propTypes2.default.array]).isRequired,
  currentActiveIndex: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  onCollapse: _propTypes2.default.func
};

CollapseContainer.defaultProps = {
  currentActiveIndex: undefined,
  onCollapse: function onCollapse() {}
};

exports.default = CollapseContainer;