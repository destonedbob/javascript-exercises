const add = function(a,b) {
  return a + b
};

const subtract = function(a,b) {
  return a - b
};

const sum = function(array) {
  if (!array) return 0;

  return array.reduce((total, currNum) => total + currNum, 0);
};

const multiply = function() {
  return [...arguments].reduce((total, num) => total * num, 1);
};

const power = function(a,b) {
  return a ** b
};

const factorial = function(num) {
  if (num === 0) return 1;
  console.log(Array.from(Array(num + 1).keys()).slice(1))
  return Array.from(Array(num + 1).keys()).slice(1).reduce((total, num) => total* num, 1)
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
