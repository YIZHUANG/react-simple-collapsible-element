import React from 'react';
import PropTypes from 'prop-types';

import Content from './Content';
import Title from './Title';
import { checkIfActive } from './util';

function renderNestedElements(items, index, currentActiveIndex, onCollapse) {
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
            active={checkIfActive(currentActiveIndex, index)}
            activeTitleStyle={item.activeTitleStyle}
            isNested
          />
          {renderNestedElements(
            item.content,
            `${index}-${nestedindex}`,
            currentActiveIndex,
            onCollapse
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
          active={checkIfActive(currentActiveIndex, index)}
          activeTitleStyle={item.activeTitleStyle}
          isNested
        />
        <Content
          contentStyle={contentStyle}
          index={`${index}-${nestedindex}`}
          active={checkIfActive(currentActiveIndex, `${index}-${nestedindex}`)}
          text={item.content}
          activeContentStyle={item.activeContentStyle}
        />
      </div>
    );
  });
}

const CollapsePane = ({ index, items, currentActiveIndex, onCollapse }) => {
  const titleStyle = items.titleStyle || {};
  const contentStyle = items.contentStyle || {};
  return (
    <div>
      <Title
        titleStyle={titleStyle}
        index={index}
        onCollapse={onCollapse}
        text={items.title}
      />
      {!Array.isArray(items.content) ? (
        <Content
          active={checkIfActive(currentActiveIndex, index)}
          text={items.content}
          contentStyle={contentStyle}
          activeContentStyle={items.activeContentStyle}
        />
      ) : (
        renderNestedElements(
          items.content,
          index,
          currentActiveIndex,
          onCollapse
        )
      )}
    </div>
  );
};

CollapsePane.propTypes = {
  index: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  items: PropTypes.object.isRequired,
  currentActiveIndex: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onCollapse: PropTypes.func
};

CollapsePane.defaultProps = {
  currentActiveIndex: undefined,
  onCollapse: () => {}
};

export default CollapsePane;
