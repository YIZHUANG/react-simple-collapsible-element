import React from 'react';

const CollapseContainer = ({ children, currentActiveIndex, onCollapse }) => {
  return React.Children.toArray(children).map((child, index) =>
    React.cloneElement(child, {
      currentActiveIndex: currentActiveIndex,
      onCollapse: index => onCollapse(index)
    })
  );
};

export default CollapseContainer;
