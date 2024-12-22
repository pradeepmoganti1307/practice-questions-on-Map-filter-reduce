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

console.log('\n01.sumOf([1, 2, 3, 4]) => 10, output:', sumOf([1, 2, 3, 4]));
console.log('02.sumOf([]) => 0, output:', sumOf([]));

// productOf([1, 2, 3, 4]) => 24
const product = (number1, number2) => number1 * number2;

const productOf = function (numbers) {
  return numbers.reduce(product, 1);
};

console.log('\n03.productOf([1, 2, 3, 4]) => 24, output:', productOf([1, 2, 3, 4]));
console.log('04.productOf([]) => 1, output:', productOf([]));

// averageOf([1, 2, 3, 4, 5]) => 3
const averageOf = function (numbers) {
  const sum = numbers.reduce(add, 0);
  return Math.floor(sum / numbers.length);
};

console.log('\n05.averageOf([1, 2, 3, 4, 5]) => 3, output:', averageOf([1, 2, 3, 4, 5]));
console.log('06.averageOf([]) => NaN, output:', averageOf([]));

// minOf([3, 1, 4, 1, 5, 9, 2]) => 1
const minOf = function (numbers) {
  return numbers.reduce((minimum, number) => Math.min(minimum, number), Infinity);
};

console.log('\n07.minOf([3, 1, 4, 1, 5, 9, 2]) => 1, output:', minOf([3, 1, 4, 1, 5, 9, 2]));
console.log('08.minOf([3]) => 3, output:', minOf([3]));

// maxOf([3, 1, 4, 1, 5, 9, 2]) => 9
const maxOf = function (numbers) {
  return numbers.reduce((maximum, number) => Math.max(maximum, number), -Infinity);
};

console.log('\n09.maxOf([3, 1, 4, 1, 5, 9, 2]) => 9, output:', maxOf([3, 1, 4, 1, 5, 9, 2]));
console.log('10.maxOf([3]) => 3, output:', maxOf([3]));

// sumPositiveNumbers([1, -2, 3, -4]) => 4
const isGreaterThan = function (number1, number2) {
  return number1 > number2;
};

const sumPositiveNumbers = function (numbers) {
  return numbers.filter((number) => isGreaterThan(number, 0)).reduce(add, 0);
};

console.log('\n11.sumPositiveNumbers([1, -2, 3, -4]) => 4 , output:', sumPositiveNumbers([1, -2, 3, -4]));
console.log('12.sumPositiveNumbers([-1, -2, -3, 0]) => 0, output:', sumPositiveNumbers([-1, -2, -3, -4]));

// sumOfSquares([1, 2, 3, 4]) => 30
const square = (number) => product(number, number);

const sumOfSquares = function (numbers) {
  return numbers.map(square).reduce(add, 0);
};

console.log('\n13. sumOfSquares([1, 2, 3, 4]) => 30, output:', sumOfSquares([1, 2, 3, 4]));
console.log('14. sumOfSquares([]) => 0, output:', sumOfSquares([]));

// sumOfOddNumbers([1, 2, 3, 4, 5]) => 9
const isOdd = (number) => (number & 1) === 1;

const sumOfOddNumbers = function (numbers) {
  return numbers.filter(isOdd).reduce(add, 0);
};

console.log('\n15. sumOfOddNumbers([1, 2, 3, 4, 5]) => 9, output:', sumOfOddNumbers([1, 2, 3, 4, 5]));
console.log('16. sumOfOddNumbers([2, 4]) => 0, output:', sumOfOddNumbers([2, 4]));

// countNegativeNumbers([1, -2, 3, -4]) => 2
const isSmallerThan = invert(isGreaterThan);

const countNegativeNumbers = function (numbers) {
  return numbers.reduce((counter, number) => isSmallerThan(number, -1) ? add(counter, 1) : counter, 0);
};

console.log('\n17.countNegativeNumbers([1, -2, 3, -4]) => 2, output:', countNegativeNumbers([1, -2, 3, -4]));
console.log('18.countNegativeNumbers([1, -2, -1, 0]) => 1, output:', countNegativeNumbers([1, -2, -1, 0]));