const sumAll = function(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    return "ERROR";
  }
  if (a % 1 !== 0 || b % 1 !== 0) {
    return "ERROR";
  }
  if (a < 0 || b < 0) {
    return "ERROR";
  }

  const start = a > b ? b : a;
  const end = a > b ? a : b;

  const n = end - start;
  const arithmeticSum = n * (n + 1) / 2;
  return arithmeticSum + start * (n + 1);
};

// Do not edit below this line
module.exports = sumAll;
