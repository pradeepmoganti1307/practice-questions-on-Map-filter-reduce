// even numbers [1, 2, 3, 4, 5] => [2, 4]
const isEven = function (number) {
  return (number & 1) === 0;
};

const filterEvenNumbers = function (numbers) {
  return numbers.filter(isEven);
};

console.log('01.even numbers [1, 2, 3, 4, 5] => [2, 4], output :', filterEvenNumbers([1, 2, 3, 4, 5]));
console.log('02.even numbers [1, 5] => [], output :', filterEvenNumbers([1, 5]));

// words with more than 5 letters ["apple", "banana", "kiwi", "grape"] => ["banana"]
const isGreaterThan = function (threshold) {
  return function (number) {
    return number > threshold;
  };
};

const isWordLongerThan = function (word) {
  return isGreaterThan(5)(word.length);
};

const filterLongWords = function (words) {
  return words.filter(isWordLongerThan);
};

console.log('\n03.words with more than 5 letters ["apple", "banana", "kiwi", "grape"] => ["banana"], output: ', filterLongWords(["apple", "banana", "kiwi", "grape"]));
console.log('04.words with more than 5 letters ["apples", "banana", "oranges", "grapes"] => ["banana"], output:', filterLongWords(["apples", "banana", "oranges", "grapes"]));