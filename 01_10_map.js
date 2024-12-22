const invert = function (Fn) {
  return function (args) {
    return !Fn(args);
  };
};

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
};

const lengthsOf = function (strings) {
  return strings.map(lengthOf);
};

console.log('\n3.lengths of ["apple", "banana", "kiwi"] => [5, 6, 4], output:', lengthsOf(["apple", "banana", "kiwi"]));
console.log('4.lengths of ["a", "b", "k"] => [1, 1, 1], output:', lengthsOf(["a", "b", "k"]));

// uppercase of ["hello", "world"] => ["HELLO", "WORLD"]
const toUpperCaseOf = function (string) {
  return string.toUpperCase();
};

const uppercaseOf = function (strings) {
  return strings.map(toUpperCaseOf);
};

console.log('\n5.uppercase of ["hello", "world"] => ["HELLO", "WORLD"], output:', uppercaseOf(["hello", "world"]));
console.log('6.uppercase of ["h", ""] => ["H", ""], output:', uppercaseOf(["h", ""]));

// first characters of ["apple", "banana", "kiwi"] => ["a", "b", "k"]
const firstCharacterOf = function (string) {
  return string.at(0);
};

const firstCharactersOf = function (strings) {
  return strings.map(firstCharacterOf);
};

console.log('\n7.first characters of ["apple", "banana", "kiwi"] => ["a", "b", "k"], output:', firstCharactersOf(["apple", "banana", "kiwi"]));
console.log('8.first characters of ["a", "b", "k"] => ["a", "b", "k"], output:', firstCharactersOf(["a", "b", "k"]));

// truth values of [0, 1, 2, 3] => [false, true, true, true]
// Assume non-zero numbers are true, and zero is false
const negationOf = function (value) {
  return !value;
};

const truthValueOf = function (number) {
  return invert(negationOf)(number);
};

const truthValuesOf = function (numbers) {
  return numbers.map(truthValueOf);
};

console.log('\n9.truth values of [0, 1, 2, 3] => [false, true, true, true], output:', truthValuesOf([0, 1, 2, 3]));
console.log('10.truth values of [0, 99] => [false, true], output:', truthValuesOf([0, 99]));

// reverse strings of ["hello", "world"] => ["olleh", "dlrow"]
const reverseOf = function (string) {
  if (string === '') {
    return '';
  }

  return reverseOf(string.slice(1)) + string.at(0);
};

const reversedStringsOf = function (strings) {
  return strings.map(reverseOf);
};

console.log('\n11.reverse strings of ["hello", "world"] => ["olleh", "dlrow"], output:', reversedStringsOf(["hello", "world"]));
console.log('12.reverse strings of ["olleh"] => ["hello"], output:', reversedStringsOf(["olleh"]));

// double letters of ["cat", "dog", "bat"] => ["ccaat", "ddoog", "bbaatt"]
const repeat = function (times) {
  return function (string) {
    return string.repeat(times);
  };
};             //function name is not good to much generic.

const doubleEachCharOf = function (string) {
  if (string === '') {
    return '';
  }

  return repeat(2)(string.at(0)) + doubleEachCharOf(string.slice(1));
};

const doubleLettersOf = function (strings) {
  return strings.map(doubleEachCharOf);
};

console.log('\n13.double letters of ["cat", "dog", "bat"] => ["ccaat", "ddoog", "bbaatt"], output:', doubleLettersOf(["cat", "dog", "bat"]));
console.log('14.double letters of ["caat"] => ["ccaaaat"], output:', doubleLettersOf(["caat"]));

// boolean negation of [true, false, true] => [false, true, false]
const negatedBooleansOf = function (booleans) {
  return booleans.map(negationOf);
};

console.log('\n15.boolean negation of [true, false, true] => [false, true, false], output:', negatedBooleansOf([true, false, true]));
console.log('16.boolean negation of [true, false] => [false, true], output:', negatedBooleansOf([true, false]));

// character codes of ["a", "b", "c"] => [97, 98, 99]
// Use the `charCodeAt` method on each string
const unicodeValueOf = function (char) {
  return char.charCodeAt();
};

const charCodesOf = function (strings) {
  return strings.map(unicodeValueOf);
};

console.log('\n17.character codes of ["a", "b", "c"] => [97, 98, 99], output:', charCodesOf(["a", "b", "c"]));
console.log('18.character codes of ["A", "B", "C"] => [65, 66, 67], output:', charCodesOf(["A", "B", "C"]));