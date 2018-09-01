import React, { Component } from 'react';
import PropTypes from 'prop-types';

import CollapseContainer from './CollapseContainer';
import CollapsePane from './CollapsePane';

class Collapsible extends Component {
  static propTypes = {
    data: PropTypes.array.isRequired
  };
  constructor() {
    super();
    this.state = { currentActiveIndex: '' };
    this.onCollapse = this.onCollapse.bind(this);
  }
  onCollapse(index) {
    const { currentActiveIndex } = this.state;
    if (
      currentActiveIndex.toString() === index.toString() &&
      index.length > 1
    ) {
      this.setState({ currentActiveIndex: index.slice(0, index.length - 2) });
    } else if (currentActiveIndex.toString() !== index.toString()) {
      this.setState({ currentActiveIndex: index });
    } else {
      this.setState({ currentActiveIndex: '' });
    }
  }
  render() {
    const { data } = this.props;
    return (
      <div>
        <CollapseContainer
          currentActiveIndex={this.state.currentActiveIndex}
          onCollapse={index => this.onCollapse(index)}
        >
          {data.map((item, index) => (
            <CollapsePane key={index} items={item} index={index} />
          ))}
        </CollapseContainer>
      </div>
    );
  }
}

export default Collapsible;
