// sumOf([1, 2, 3, 4]) => 10
const sumOf = function (numbers) {
  return numbers.reduce((sum, number) => number + sum, 0);
};

console.log('\n01.sumOf([1, 2, 3, 4]) => 10, output:', sumOf([1, 2, 3, 4]));
console.log('02.sumOf([]) => 0, output:', sumOf([]));

// productOf([1, 2, 3, 4]) => 24
const productOf = function (numbers) {
  return numbers.reduce((product, number) => product * number, 1);
};

console.log('\n03.productOf([1, 2, 3, 4]) => 24, output:', productOf([1, 2, 3, 4]));
console.log('\n03.productOf([]) => 1, output:', productOf([]));