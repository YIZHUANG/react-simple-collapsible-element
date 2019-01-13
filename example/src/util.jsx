function getLevel(index) {
  return index.split("-").length;
}

function checkKeepOpen(activeIndex, selectedIndex) {
  if (activeIndex.indexOf(selectedIndex) > -1) {
    return true;
  }
  return false;
}

function checkDefault(currentActiveIndex, selectedIndex) {
  const selectedLevel = getLevel(selectedIndex);
  if (currentActiveIndex === selectedIndex) {
    return true;
  } else if (
    selectedLevel === 1 &&
    currentActiveIndex.slice(0, 1) === selectedIndex
  ) {
    return true;
  } else if (
    selectedLevel !== 1 &&
    currentActiveIndex.slice(0, selectedLevel + 1) === selectedIndex
  ) {
    return true;
  }
  return false;
}

function checkIfActive(activeIndex, index, keepOpen = false) {
  const currentActiveIndex = activeIndex.toString();
  const selectedIndex = index.toString();
  if (keepOpen) {
    return checkKeepOpen(activeIndex, selectedIndex);
  }
  return checkDefault(currentActiveIndex, selectedIndex);
}

export { getLevel, checkIfActive };
