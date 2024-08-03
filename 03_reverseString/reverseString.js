const reverseString = function(string) {
  const inputArray = string.split("");
  const revArray = [];
  for (let i = inputArray.length - 1; i >= 0; i--) {
    revArray.push(inputArray.at(i));
  }
  return revArray.join("");
};

// Do not edit below this line
module.exports = reverseString;
