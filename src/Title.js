import React from 'react';
import PropTypes from 'prop-types';

export default class Title extends React.PureComponent {
  static propTypes = {
    text: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.element
    ]).isRequired,
    onCollapse: PropTypes.func.isRequired,
    isNested: PropTypes.bool,
    index: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    active: PropTypes.bool,
    titleStyle: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    activeTitleStyle: PropTypes.string
  };

  static defaultProps = {
    active: false,
    isNested: false,
    titleStyle: undefined,
    activeTitleStyle: undefined
  };
  constructor() {
    super();
    this.titleRef = React.createRef();
    this.state = { height: 0 };
  }
  componentDidMount() {
    this.setState({ height: this.titleRef.current.scrollHeight });
  }
  componentDidUpdate() {
    const { height } = this.state;
    if (this.titleRef.current.scrollHeight !== height) {
      this.setState({ height: this.titleRef.current.scrollHeight });
    }
  }
  render() {
    const {
      index,
      text,
      onCollapse,
      isNested,
      active,
      titleStyle,
      activeTitleStyle
    } = this.props;
    const classNames = typeof titleStyle === 'string' ? titleStyle : '';
    const style = classNames ? {} : titleStyle;
    return (
      <div
        role="presentation"
        onKeyPress={() => onCollapse(index)}
        onClick={() => onCollapse(index)}
        style={{
          height: isNested && !active ? 0 : this.state.height,
          transition: 'height .3s ease-out',
          overflow: 'hidden',
          ...style
        }}
        ref={this.titleRef}
        className={
          !(isNested && !active) && activeTitleStyle
            ? `${classNames} ${activeTitleStyle}`
            : classNames
        }
      >
        {text}
      </div>
    );
  }
}
