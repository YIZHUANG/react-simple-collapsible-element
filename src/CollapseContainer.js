import React from 'react';
import PropTypes from 'prop-types';

const CollapseContainer = ({ children, currentActiveIndex, onCollapse }) => {
  return React.Children.toArray(children).map((child, index) =>
    React.cloneElement(child, {
      currentActiveIndex: currentActiveIndex,
      onCollapse: index => onCollapse(index)
    })
  );
};

CollapseContainer.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array])
    .isRequired,
  currentActiveIndex: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onCollapse: PropTypes.func
};

CollapseContainer.defaultProps = {
  currentActiveIndex: undefined,
  onCollapse: () => {}
};

export default CollapseContainer;
