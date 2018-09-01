'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
function getLevel(index) {
  return index.split('-').length;
}

function checkIfActive(activeIndex, index) {
  var currentActiveIndex = activeIndex.toString();
  var selectedIndex = index.toString();

  var selectedLevel = getLevel(selectedIndex);

  if (currentActiveIndex === selectedIndex) {
    return true;
  } else if (selectedLevel === 1 && currentActiveIndex.slice(0, 1) === selectedIndex) {
    return true;
  } else if (selectedLevel !== 1 && currentActiveIndex.slice(0, selectedLevel + 1) === selectedIndex) {
    return true;
  } else {
    return false;
  }
}

exports.getLevel = getLevel;
exports.checkIfActive = checkIfActive;