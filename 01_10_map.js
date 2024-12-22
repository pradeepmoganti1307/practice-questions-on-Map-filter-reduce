// squares of [1, 2, 3] => [1, 4, 9]
const squareOf = function (number) {
  return Math.pow(number, 2);
};

const squaresOf = function (numbers) {
  return numbers.map(squareOf);
};

console.log("1.squares of [1, 2, 3] is [1, 4, 9], output:", squaresOf([1, 2, 3]));
console.log("2.squares of [] is [], output:", squaresOf([]));

