'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Content = function (_React$PureComponent) {
  _inherits(Content, _React$PureComponent);

  function Content() {
    _classCallCheck(this, Content);

    var _this = _possibleConstructorReturn(this, (Content.__proto__ || Object.getPrototypeOf(Content)).call(this));

    _this.contentRef = _react2.default.createRef();
    _this.state = { height: 0 };
    return _this;
  }

  _createClass(Content, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.setState({ height: this.contentRef.current.scrollHeight });
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      var height = this.state.height;

      if (this.contentRef.current.scrollHeight !== height) {
        this.setState({ height: this.contentRef.current.scrollHeight });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          text = _props.text,
          active = _props.active,
          contentStyle = _props.contentStyle,
          activeContentStyle = _props.activeContentStyle;

      var classNames = typeof contentStyle === 'string' ? contentStyle : '';
      var style = classNames ? {} : contentStyle;
      return _react2.default.createElement(
        'div',
        {
          style: _extends({
            height: active ? this.state.height : 0,
            transition: 'height .3s ease-out',
            overflow: 'hidden'
          }, style),
          ref: this.contentRef,
          className: active && activeContentStyle ? classNames + ' ' + activeContentStyle : classNames
        },
        text
      );
    }
  }]);

  return Content;
}(_react2.default.PureComponent);

Content.propTypes = {
  text: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number, _propTypes2.default.element]).isRequired,
  active: _propTypes2.default.bool,
  contentStyle: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object]),
  activeContentStyle: _propTypes2.default.string
};
Content.defaultProps = {
  active: false,
  contentStyle: undefined,
  activeContentStyle: undefined
};
exports.default = Content;