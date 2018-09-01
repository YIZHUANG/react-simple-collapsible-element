import React from 'react';
import PropTypes from 'prop-types';

export default class Content extends React.PureComponent {
  static propTypes = {
    text: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.element
    ]).isRequired,
    active: PropTypes.bool,
    contentStyle: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    activeContentStyle: PropTypes.string
  };

  static defaultProps = {
    active: false,
    contentStyle: undefined,
    activeContentStyle: undefined
  };

  constructor() {
    super();
    this.contentRef = React.createRef();
    this.state = { height: 0 };
  }
  componentDidMount() {
    this.setState({ height: this.contentRef.current.scrollHeight });
  }
  componentDidUpdate() {
    const { height } = this.state;
    if (this.contentRef.current.scrollHeight !== height) {
      this.setState({ height: this.contentRef.current.scrollHeight });
    }
  }
  render() {
    const { text, active, contentStyle, activeContentStyle } = this.props;
    const classNames = typeof contentStyle === 'string' ? contentStyle : '';
    const style = classNames ? {} : contentStyle;
    return (
      <div
        style={{
          height: active ? this.state.height : 0,
          transition: 'height .3s ease-out',
          overflow: 'hidden',
          ...style
        }}
        ref={this.contentRef}
        className={
          active && activeContentStyle
            ? `${classNames} ${activeContentStyle}`
            : classNames
        }
      >
        {text}
      </div>
    );
  }
}
