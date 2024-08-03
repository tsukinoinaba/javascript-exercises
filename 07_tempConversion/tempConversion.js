const convertToCelsius = function(temp) {
  let convertedTemp = (temp - 32) / 1.8;
  return Math.round(convertedTemp * 10) / 10;
};

const convertToFahrenheit = function(temp) {
  let convertedTemp = temp * 1.8 + 32;
  return Math.round(convertedTemp * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
