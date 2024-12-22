// sumOf([1, 2, 3, 4]) => 10
const add = (sum, number) => number + sum;

const sumOf = function (numbers) {
  return numbers.reduce(add, 0);
};

console.log('\n01.sumOf([1, 2, 3, 4]) => 10, output:', sumOf([1, 2, 3, 4]));
console.log('02.sumOf([]) => 0, output:', sumOf([]));

// productOf([1, 2, 3, 4]) => 24
const productOf = function (numbers) {
  return numbers.reduce((product, number) => product * number, 1);
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
  return numbers.reduce((minimum, number) => number < minimum ? number : minimum, Infinity);
};

console.log('\n07.minOf([3, 1, 4, 1, 5, 9, 2]) => 1, output:', minOf([3, 1, 4, 1, 5, 9, 2]));
console.log('08.minOf([3]) => 3, output:', minOf([3]));

// maxOf([3, 1, 4, 1, 5, 9, 2]) => 9
const maxOf = function (numbers) {
  return numbers.reduce((maximum, number) => number > maximum ? number : maximum, -Infinity);
};

console.log('\n09.maxOf([3, 1, 4, 1, 5, 9, 2]) => 9, output:', maxOf([3, 1, 4, 1, 5, 9, 2]));
console.log('10.maxOf([3]) => 3, output:', maxOf([3]));