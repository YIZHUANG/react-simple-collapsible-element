import React from 'react';
import PropTypes from 'prop-types';

import Content from './Content';
import Title from './Title';
import { checkIfActive } from './util';

function renderNestedElements(
  items,
  index,
  currentActiveIndex,
  onCollapse,
  keepOpen = false,
  customTransition = '',
) {
  if (!Array.isArray(items)) {
    throw new Error('nested elements must be an array');
  }
  return items.map((item, nestedindex) => {
    const titleStyle = item.titleStyle || {};
    const contentStyle = item.contentStyle || {};
    if (Array.isArray(item.content)) {
      return (
        <div key={nestedindex}>
          <Title
            onCollapse={onCollapse}
            titleStyle={titleStyle}
            index={`${index}-${nestedindex}`}
            text={item.title}
            active={checkIfActive(currentActiveIndex, index, keepOpen)}
            activeTitleStyle={item.activeTitleStyle}
            customTransition={customTransition}
            isNested
          />
          {renderNestedElements(
            item.content,
            `${index}-${nestedindex}`,
            currentActiveIndex,
            onCollapse,
            keepOpen,
            customTransition,
          )}
        </div>
      );
    }
    return (
      <div key={nestedindex}>
        <Title
          titleStyle={titleStyle}
          onCollapse={onCollapse}
          index={`${index}-${nestedindex}`}
          text={item.title}
          active={checkIfActive(currentActiveIndex, index, keepOpen)}
          activeTitleStyle={item.activeTitleStyle}
          customTransition={customTransition}
          isNested
        />
        <Content
          contentStyle={contentStyle}
          index={`${index}-${nestedindex}`}
          active={checkIfActive(
            currentActiveIndex,
            `${index}-${nestedindex}`,
            keepOpen,
          )}
          text={item.content}
          activeContentStyle={item.activeContentStyle}
          customTransition={customTransition}
        />
      </div>
    );
  });
}

const CollapsePane = ({
  index,
  items,
  currentActiveIndex,
  onCollapse,
  keepOpen,
  customTransition,
}) => {
  const titleStyle = items.titleStyle || {};
  const contentStyle = items.contentStyle || {};
  return (
    <div>
      <Title
        titleStyle={titleStyle}
        index={index}
        onCollapse={onCollapse}
        text={items.title}
        customTransition={customTransition}
      />
      {!Array.isArray(items.content) ? (
        <Content
          active={checkIfActive(currentActiveIndex, index, keepOpen)}
          text={items.content}
          contentStyle={contentStyle}
          activeContentStyle={items.activeContentStyle}
          customTransition={customTransition}
        />
      ) : (
        renderNestedElements(
          items.content,
          index,
          currentActiveIndex,
          onCollapse,
          keepOpen,
          customTransition,
        )
      )}
    </div>
  );
};

CollapsePane.propTypes = {
  index: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  items: PropTypes.shape({
    title: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.element,
    ]),
    content: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.element,
      PropTypes.array,
    ]),
  }).isRequired,
  currentActiveIndex: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.array,
  ]),
  keepOpen: PropTypes.bool,
  customTransition: PropTypes.string,
  onCollapse: PropTypes.func,
};

CollapsePane.defaultProps = {
  currentActiveIndex: undefined,
  keepOpen: false,
  customTransition: '',
  onCollapse: () => {},
};

export default CollapsePane;
