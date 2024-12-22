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

// uppercase of ["hello", "world"] => ["HELLO", "WORLD"]
const toUpperCaseOf = function (string) {
  return string.toUpperCase();
}

const uppercaseOf = function (strings) {
  return strings.map(toUpperCaseOf);
};

console.log('\n5.uppercase of ["hello", "world"] => ["HELLO", "WORLD"], output:', uppercaseOf(["hello", "world"]));
console.log('6.uppercase of ["h", ""] => ["H", ""], output:', uppercaseOf(["h", ""]));

// first characters of ["apple", "banana", "kiwi"] => ["a", "b", "k"]
const firstCharacterOf = function (string) {
  return string.at(0);
}

const firstCharactersOf = function (strings) {
  return strings.map(firstCharacterOf);
};

console.log('\n7.first characters of ["apple", "banana", "kiwi"] => ["a", "b", "k"], output:', firstCharactersOf(["apple", "banana", "kiwi"]));
console.log('8.first characters of ["a", "b", "k"] => ["a", "b", "k"], output:', firstCharactersOf(["a", "b", "k"]));

// truth values of [0, 1, 2, 3] => [false, true, true, true]
// Assume non-zero numbers are true, and zero is false
const truthValueOf = function (number) {
  return !!number;
}

const truthValuesOf = function (numbers) {
  return numbers.map(truthValueOf);
};

console.log('\n9.truth values of [0, 1, 2, 3] => [false, true, true, true], output:', truthValuesOf([0, 1, 2, 3]));
console.log('10.truth values of [0, 99] => [false, true], output:', truthValuesOf([0, 99]));