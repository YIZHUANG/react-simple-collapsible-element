import React from "react";
import PropTypes from "prop-types";

const CollapseContainer = ({ children, currentActiveIndex, onCollapse }) =>
  React.Children.toArray(children).map(child =>
    React.cloneElement(child, {
      currentActiveIndex,
      onCollapse: selectedIndex => onCollapse(selectedIndex)
    })
  );

CollapseContainer.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array])
    .isRequired,
  currentActiveIndex: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.array
  ]),
  onCollapse: PropTypes.func
};

CollapseContainer.defaultProps = {
  currentActiveIndex: undefined,
  onCollapse: () => {}
};

export default CollapseContainer;
