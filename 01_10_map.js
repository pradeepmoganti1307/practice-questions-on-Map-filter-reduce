// squares of [1, 2, 3] => [1, 4, 9]
const squareOf = function (number) {
  return Math.pow(number, 2);
};

const squaresOf = function (numbers) {
  return numbers.map(squareOf);
};

console.log("1.squares of [1, 2, 3] is [1, 4, 9], output:", squaresOf([1, 2, 3]));
console.log("2.squares of [] is [], output:", squaresOf([]));

// lengths of ["apple", "banana", "kiwi"] => [5, 6, 4]
const lengthOf = function (string) {
  return string.length;
}

const lengthsOf = function (strings) {
  return strings.map(lengthOf);
};

console.log('\n3.lengths of ["apple", "banana", "kiwi"] => [5, 6, 4], output:', lengthsOf(["apple", "banana", "kiwi"]));
console.log('4.lengths of ["a", "b", "k"] => [1, 1, 1], output:', lengthsOf(["a", "b", "k"]));
