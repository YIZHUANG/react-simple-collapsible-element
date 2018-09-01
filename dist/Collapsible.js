'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _CollapseContainer = require('./CollapseContainer');

var _CollapseContainer2 = _interopRequireDefault(_CollapseContainer);

var _CollapsePane = require('./CollapsePane');

var _CollapsePane2 = _interopRequireDefault(_CollapsePane);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Collapsible = function (_Component) {
  _inherits(Collapsible, _Component);

  function Collapsible() {
    _classCallCheck(this, Collapsible);

    var _this = _possibleConstructorReturn(this, (Collapsible.__proto__ || Object.getPrototypeOf(Collapsible)).call(this));

    _this.state = { currentActiveIndex: '' };
    _this.onCollapse = _this.onCollapse.bind(_this);
    return _this;
  }

  _createClass(Collapsible, [{
    key: 'onCollapse',
    value: function onCollapse(index) {
      var currentActiveIndex = this.state.currentActiveIndex;

      if (currentActiveIndex.toString() === index.toString() && index.length > 1) {
        this.setState({ currentActiveIndex: index.slice(0, index.length - 2) });
      } else if (currentActiveIndex.toString() !== index.toString()) {
        this.setState({ currentActiveIndex: index });
      } else {
        this.setState({ currentActiveIndex: '' });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var data = this.props.data;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _CollapseContainer2.default,
          {
            currentActiveIndex: this.state.currentActiveIndex,
            onCollapse: function onCollapse(index) {
              return _this2.onCollapse(index);
            }
          },
          data.map(function (item, index) {
            return _react2.default.createElement(_CollapsePane2.default, { key: index, items: item, index: index });
          })
        )
      );
    }
  }]);

  return Collapsible;
}(_react.Component);

Collapsible.propTypes = {
  data: _propTypes2.default.array.isRequired
};
exports.default = Collapsible;