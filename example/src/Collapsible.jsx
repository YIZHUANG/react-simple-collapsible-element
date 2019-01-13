// eslint-disable-next-line
import React, { Component } from "react";
import PropTypes from "prop-types";

import CollapseContainer from "./CollapseContainer";
import CollapsePane from "./CollapsePane";

class Collapsible extends Component {
  static propTypes = {
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
    keepOpen: PropTypes.bool,
    customTransition: PropTypes.string
  };
  static defaultProps = {
    keepOpen: false,
    customTransition: undefined
  };
  constructor({ keepOpen }) {
    super();
    this.state = { currentActiveIndex: keepOpen ? [] : "" };
    this.onCollapse = this.onCollapse.bind(this);
  }
  onCollapse(index) {
    const { keepOpen } = this.props;
    if (keepOpen) {
      this.keepOpenCollapse(index);
    } else {
      this.defaultCollapse(index);
    }
  }
  keepOpenCollapse(index) {
    const { currentActiveIndex } = this.state;
    if (currentActiveIndex.indexOf(index.toString()) < 0) {
      this.setState({
        currentActiveIndex: [index.toString(), ...currentActiveIndex]
      });
    } else {
      this.setState({
        currentActiveIndex: currentActiveIndex.filter(
          activeIndex => activeIndex.indexOf(index.toString()) < 0
        )
      });
    }
  }
  defaultCollapse(index) {
    const { currentActiveIndex } = this.state;
    if (
      currentActiveIndex.toString() === index.toString() &&
      index.length > 1
    ) {
      this.setState({
        currentActiveIndex: index.slice(0, index.length - 2)
      });
    } else if (currentActiveIndex.toString() !== index.toString()) {
      this.setState({ currentActiveIndex: index });
    } else {
      this.setState({ currentActiveIndex: "" });
    }
  }
  render() {
    const { data, keepOpen, customTransition } = this.props;
    return (
      <div>
        <CollapseContainer
          currentActiveIndex={this.state.currentActiveIndex}
          onCollapse={index => this.onCollapse(index)}
        >
          {data.map((item, index) => (
            <CollapsePane
              // eslint-disable-next-line
              key={`collapse-pane-${index}`}
              items={item}
              index={index}
              keepOpen={keepOpen}
              customTransition={customTransition}
            />
          ))}
        </CollapseContainer>
      </div>
    );
  }
}

export default Collapsible;
