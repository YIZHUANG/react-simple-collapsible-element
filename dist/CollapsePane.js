'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Content = require('./Content');

var _Content2 = _interopRequireDefault(_Content);

var _Title = require('./Title');

var _Title2 = _interopRequireDefault(_Title);

var _util = require('./util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function renderNestedElements(items, index, currentActiveIndex, onCollapse) {
  if (!Array.isArray(items)) {
    throw new Error('nested elements must be an array');
  }
  return items.map(function (item, nestedindex) {
    var titleStyle = item.titleStyle || {};
    var contentStyle = item.contentStyle || {};
    if (Array.isArray(item.content)) {
      return _react2.default.createElement(
        'div',
        { key: nestedindex },
        _react2.default.createElement(_Title2.default, {
          onCollapse: onCollapse,
          titleStyle: titleStyle,
          index: index + '-' + nestedindex,
          text: item.title,
          active: (0, _util.checkIfActive)(currentActiveIndex, index),
          activeTitleStyle: item.activeTitleStyle,
          isNested: true
        }),
        renderNestedElements(item.content, index + '-' + nestedindex, currentActiveIndex, onCollapse)
      );
    }
    return _react2.default.createElement(
      'div',
      { key: nestedindex },
      _react2.default.createElement(_Title2.default, {
        titleStyle: titleStyle,
        onCollapse: onCollapse,
        index: index + '-' + nestedindex,
        text: item.title,
        active: (0, _util.checkIfActive)(currentActiveIndex, index),
        activeTitleStyle: item.activeTitleStyle,
        isNested: true
      }),
      _react2.default.createElement(_Content2.default, {
        contentStyle: contentStyle,
        index: index + '-' + nestedindex,
        active: (0, _util.checkIfActive)(currentActiveIndex, index + '-' + nestedindex),
        text: item.content,
        activeContentStyle: item.activeContentStyle
      })
    );
  });
}

var CollapsePane = function CollapsePane(_ref) {
  var index = _ref.index,
      items = _ref.items,
      currentActiveIndex = _ref.currentActiveIndex,
      onCollapse = _ref.onCollapse;

  var titleStyle = items.titleStyle || {};
  var contentStyle = items.contentStyle || {};
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_Title2.default, {
      titleStyle: titleStyle,
      index: index,
      onCollapse: onCollapse,
      text: items.title
    }),
    !Array.isArray(items.content) ? _react2.default.createElement(_Content2.default, {
      active: (0, _util.checkIfActive)(currentActiveIndex, index),
      text: items.content,
      contentStyle: contentStyle,
      activeContentStyle: items.activeContentStyle
    }) : renderNestedElements(items.content, index, currentActiveIndex, onCollapse)
  );
};

CollapsePane.propTypes = {
  index: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]).isRequired,
  items: _propTypes2.default.object.isRequired,
  currentActiveIndex: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  onCollapse: _propTypes2.default.func
};

CollapsePane.defaultProps = {
  currentActiveIndex: undefined,
  onCollapse: function onCollapse() {}
};

exports.default = CollapsePane;