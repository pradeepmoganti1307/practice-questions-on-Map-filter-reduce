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

// lengths of ["apple", "banana", "kiwi"] => [5, 6, 4]
const lengthOf = function (string) {
  return string.length;
};

const lengthsOf = function (strings) {
  return strings.map(lengthOf);
};

// uppercase of ["hello", "world"] => ["HELLO", "WORLD"]
const toUpperCaseOf = function (string) {
  return string.toUpperCase();
};

const uppercaseOf = function (strings) {
  return strings.map(toUpperCaseOf);
};

// first characters of ["apple", "banana", "kiwi"] => ["a", "b", "k"]
const firstCharacterOf = function (string) {
  return string.at(0);
};

const firstCharactersOf = function (strings) {
  return strings.map(firstCharacterOf);
};

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

// reverse strings of ["hello", "world"] => ["olleh", "dlrow"]
const reverseOf = function (string) {
  return [...string].reverse().join('');
};

const reversedStringsOf = function (strings) {
  return strings.map(reverseOf);
};

// double letters of ["cat", "dog", "bat"] => ["ccaat", "ddoog", "bbaatt"]
const repeat = function (times) {
  return function (string) {
    return string.repeat(times);
  };
};             //function name is not good to much generic.

const doubleEachCharOf = function (string) {
  return [...string].map(repeat(2)).join('');
};

const doubleLettersOf = function (strings) {
  return strings.map(doubleEachCharOf);
};

// boolean negation of [true, false, true] => [false, true, false]
const negatedBooleansOf = function (booleans) {
  return booleans.map(negationOf);
};

// character codes of ["a", "b", "c"] => [97, 98, 99]
// Use the `charCodeAt` method on each string
const unicodeValueOf = function (char) {
  return char.charCodeAt();
};

const charCodesOf = function (strings) {
  return strings.map(unicodeValueOf);
};

// extract domain names from ["user1@gmail.com", "admin@yahoo.com"] => ["gmail.com", "yahoo.com"]
const domainNameOf = function (email) {
  return email.split('@').at(-1);
};

const domainNamesOf = function (emails) {
  return emails.map(domainNameOf);
};

// split words in ["hello world", "goodbye moon"] => [["hello", "world"], ["goodbye", "moon"]]
const splitWordsOf = function (strings) {
  return strings.map((string) => string.split(' '));
};

// join arrays of [["a", "b"], ["c", "d"]] => ["ab", "cd"]
const joinedArraysOf = function (arrayOfArrays) {
  return arrayOfArrays.map((array) => array.join(''));
};

// repeat strings in ["hi", "bye"] => ["hihi", "byebye"]
const repeatedStringsOf = function (strings) {
  return strings.map(repeat(2));
};

//14) count vowels in ["apple", "banana", "grape"] => [2, 3, 2]
const countVowelIn = function (string) {
  const vowels = 'aeiou';
  return [...string].reduce((counter, char) => vowels.includes(char) ? counter + 1 : counter, 0);
};

const countVowelsOf = function (strings) {
  return strings.map(countVowelIn);
};

//================= test frame Work Starts ================//
const testCase = function (Fn, param, expected) {
  console.log(Fn, param, expected, Fn(param));
};

const testCases = function () {
  testCase(squaresOf, [1, 2, 3], [1, 4, 9]);
  testCase(squaresOf, [], []);

  testCase(lengthsOf, ["apple", "banana", "kiwi"], [5, 6, 4]);
  testCase(lengthsOf, ["a", "b", "k"], [1, 1, 1]);

  testCase(uppercaseOf, ["hello", "world"], ["HELLO", "WORLD"]);
  testCase(uppercaseOf, ["h", ""], ["H", ""]);

  testCase(firstCharactersOf, ["apple", "banana", "kiwi"], ["a", "b", "k"]);
  testCase(firstCharactersOf, [""], [""]);

  testCase(truthValuesOf, [0, 1, 2, 3], [false, true, true, true]);
  testCase(truthValuesOf, [0, 100], [false, true]);

  testCase(reversedStringsOf, ["hello", "world"], ["olleh", "dlrow"]);

  testCase(doubleLettersOf, ["cat", "dog", "bat"], ["ccaat", "ddoog", "bbaatt"]);

  testCase(negatedBooleansOf, [true, false, true], [false, true, false]);

  testCase(charCodesOf, ["a", "b", "c"], [97, 98, 99]);

  testCase(domainNamesOf, ["user1@gmail.com", "admin@yahoo.com"], ["gmail.com", "yahoo.com"]);

  testCase(joinedArraysOf, [["a", "b"], ["c", "d"]], ["ab", "cd"]);

  testCase(repeatedStringsOf, ["hi", "bye"], ["hihi", "byebye"]);

  testCase(countVowelsOf, ["apple", "banana", "grape"], [2, 3, 2]);
  testCase(countVowelsOf, ["a", "b", "a"], [1, 0, 1]);
};

testCases();
