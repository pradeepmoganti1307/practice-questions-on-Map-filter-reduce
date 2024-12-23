const vowels = 'aeiou';

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
  return [...string].reduce((counter, char) => vowels.includes(char) ? counter + 1 : counter, 0);
};

const countVowelsOf = function (strings) {
  return strings.map(countVowelIn);
};

//15) reverse arrays of [[1, 2, 3], [4, 5, 6]] => [[3, 2, 1], [6, 5, 4]]
const reversedArraysOf = function (arrays) {
  return arrays.map((array) => array.toReversed());
};

// 16) remove vowels from ["apple", "banana", "grape"] => ["ppl", "bnn", "grp"]
const withoutVowels = (char) => !vowels.includes(char);

const withoutVowelsOf = function (strings) {
  return strings.map((string) => [...string].filter(withoutVowels).join(''));
};

// cumulative sums of [[1, 2, 3], [4, 5, 6]] => [[1, 3, 6], [4, 9, 15]]
// Example: cumulative sum of [1, 2, 3] is [1, 1+2, 1+2+3]
const concatSum = (array, element) => {
  const lastElement = array.at(-1) || 0;
  return [...array, lastElement + element];
};
const cumulativeSumsOf = function (arrays) {
  return arrays.map((array) => array.reduce(concatSum, []));
};

//18) reverse words in ["hello world", "goodbye moon"] => ["olleh dlrow", "eybdoog noom"]
const reversedWordsOf = function (strings) {
  return strings.map((string) => string.split(' ').map((word) => [...word].reverse().join('')).join(' '));
};
