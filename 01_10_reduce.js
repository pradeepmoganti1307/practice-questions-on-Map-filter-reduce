// sumOf([1, 2, 3, 4]) => 10
const sumOf = function (numbers) {
  return numbers.reduce((sum, number) => number + sum, 0);
};

console.log('\n01.sumOf([1, 2, 3, 4]) => 10, output:', sumOf([1, 2, 3, 4]));
console.log('02.sumOf([]) => 0, output:', sumOf([]));
