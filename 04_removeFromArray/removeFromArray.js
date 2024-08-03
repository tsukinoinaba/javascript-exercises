const removeFromArray = function(array, ...targets) {
  const newArray = [];
  for (const elem of array) {
    let isTarget = false;
    for (const target of targets) {
      if (elem === target) {
        isTarget = true;
        break;
      }
    }

    if (!isTarget) {
      newArray.push(elem);
    }
  }

  return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
