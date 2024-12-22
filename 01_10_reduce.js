const invert = function (Fn) {
  return function (...args) {
    return !Fn(...args);
  };
};

// sumOf([1, 2, 3, 4]) => 10
const add = (number1, number2) => number2 + number1;

const sumOf = function (numbers) {
  return numbers.reduce(add, 0);
};

// productOf([1, 2, 3, 4]) => 24
const product = (number1, number2) => number1 * number2;

const productOf = function (numbers) {
  return numbers.reduce(product, 1);
};

// averageOf([1, 2, 3, 4, 5]) => 3
const averageOf = function (numbers) {
  const sum = numbers.reduce(add, 0);
  return Math.floor(sum / numbers.length);
};

// minOf([3, 1, 4, 1, 5, 9, 2]) => 1
const minOf = function (numbers) {
  return numbers.reduce((minimum, number) => Math.min(minimum, number), Infinity);
};

// maxOf([3, 1, 4, 1, 5, 9, 2]) => 9
const maxOf = function (numbers) {
  return numbers.reduce((maximum, number) => Math.max(maximum, number), -Infinity);
};

// sumPositiveNumbers([1, -2, 3, -4]) => 4
const isGreaterThan = function (number1, number2) {
  return number1 > number2;
};

const sumPositiveNumbers = function (numbers) {
  return numbers.filter((number) => isGreaterThan(number, 0)).reduce(add, 0);
};

// sumOfSquares([1, 2, 3, 4]) => 30
const square = (number) => product(number, number);

const sumOfSquares = function (numbers) {
  return numbers.map(square).reduce(add, 0);
};

// sumOfOddNumbers([1, 2, 3, 4, 5]) => 9
const isOdd = (number) => (number & 1) === 1;

const sumOfOddNumbers = function (numbers) {
  return numbers.filter(isOdd).reduce(add, 0);
};

// countNegativeNumbers([1, -2, 3, -4]) => 2
const isSmallerThan = invert(isGreaterThan);

const countNegativeNumbers = function (numbers) {
  return numbers.reduce((counter, number) => isSmallerThan(number, -1) ? add(counter, 1) : counter, 0);
};

// findSumOfEvenSquares([1, 2, 3, 4]) => 20
const isEven = invert(isOdd);

const findSumOfEvenSquares = function (numbers) {
  return numbers.filter(isEven).map(square).reduce(add, 0);
};

// concatenateWords(["hello", "world"]) => "helloworld"
const concatenateWords = function (words) {
  return words.reduce((word1, word2) => word1 + word2);
};
