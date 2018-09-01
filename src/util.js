function getLevel(index) {
  return index.split('-').length;
}

function checkIfActive(activeIndex, index) {
  const currentActiveIndex = activeIndex.toString();
  const selectedIndex = index.toString();
  
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
  } else {
    return false;
  }
}

export { getLevel, checkIfActive };
