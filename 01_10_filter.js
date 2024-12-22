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

const isGreaterThan = function (number1, number2) {
  return number1 > number2;
};

const filterLongWords = function (words) {
  return words.filter((word) => isGreaterThan(word.length, 5));
};

console.log('\n03.words with more than 5 letters ["apple", "banana", "kiwi", "grape"] => ["banana"], output: ', filterLongWords(["apple", "banana", "kiwi", "grape"]));
console.log('04.words with more than 5 letters ["apples", "banana", "oranges", "grapes"] => ["apples", "banana", "oranges", "grapes"], output:', filterLongWords(["apples", "banana", "oranges", "grapes"]));

// people older than 30 [{name: "Alice", age: 25}, {name: "Bob", age: 35}] => [{name: "Bob", age: 35}]
const filterAdults = function (people) {
  return people.filter((person) => isGreaterThan(person.age, 30));
};

console.log('\n05.people older than 30 [{name: "Alice", age: 25}, {name: "Bob", age: 35}] => [{name: "Bob", age: 35}], output:', filterAdults([{ name: "Alice", age: 25 }, { name: "Bob", age: 35 }]));
console.log('06.people older than 30 [{name: "Alice", age: 15}, {name: "Bob", age: 5}] => [], output:', filterAdults([{ name: "Alice", age: 15 }, { name: "Bob", age: 5 }]));