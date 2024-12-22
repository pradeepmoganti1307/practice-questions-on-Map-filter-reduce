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

// active users [{username: "alice", active: true}, {username: "bob", active: false}] => [{username: "alice", active: true}]
const filterActiveUsers = function (users) {
  return users.filter((user) => user.active);
};


console.log('\n07.active users [{username: "alice", active: true}, {username: "bob", active: false}] => [{username: "alice", active: true}], output:', filterActiveUsers([{ username: "alice", active: true }, { username: "bob", active: false }]));
console.log('08.active users [{username: "alice", active: false}, {username: "bob", active: false}] => [], output:', filterActiveUsers([{ username: "alice", active: false }, { username: "bob", active: false }]));

// numbers greater than 10 [5, 12, 7, 18, 3] => [12, 18]
const filterNumbersGreaterThanTen = function (numbers) {
  return numbers.filter((number) => isGreaterThan(number, 10));
};

console.log('\n09. numbers greater than 10 [5, 12, 7, 18, 3] => [12, 18],output:', filterNumbersGreaterThanTen([5, 12, 7, 18, 3]));
console.log('10. numbers greater than 10 [15, 12, 17, 18, 13] => [15, 12, 17, 18, 13],output:', filterNumbersGreaterThanTen([15, 12, 17, 18, 13]));

// books with more than 200 pages [{title: "Book 1", pages: 150}, {title: "Book 2", pages: 250}] => [{title: "Book 2", pages: 250}]
const filterLongBooks = function (books) {
  return books.filter((book) => isGreaterThan(book.pages, 200));
};

console.log('\n11. books with more than 200 pages [{title: "Book 1", pages: 150}, {title: "Book 2", pages: 250}] => [{title: "Book 2", pages: 250}], output :', filterLongBooks([{ title: "Book 1", pages: 150 }, { title: "Book 2", pages: 250 }]));
console.log('12. books with more than 200 pages [{title: "Book 1", pages: 350}, {title: "Book 2", pages: 250}] => [{title: "Book 1", pages: 350}, {title: "Book 2", pages: 250}], output :', filterLongBooks([{ title: "Book 1", pages: 350 }, { title: "Book 2", pages: 250 }]));

// users with incomplete profiles [{username: "alice", profileComplete: true}, {username: "bob", profileComplete: false}] => [{username: "bob", profileComplete: false}]
const filterIncompleteProfiles = function (users) {
  return users.filter((user) => user.profileComplete);
};

console.log('\n13.users with incomplete profiles [{username: "alice", profileComplete: true}, {username: "bob", profileComplete: false}] => [{username: "bob", profileComplete: false}], output:', filterIncompleteProfiles([{ username: "alice", profileComplete: true }, { username: "bob", profileComplete: false }]));
console.log('14.users with incomplete profiles [{username: "alice", profileComplete: false}, {username: "bob", profileComplete: false}] => [], output:', filterIncompleteProfiles([{ username: "alice", profileComplete: false }, { username: "bob", profileComplete: false }]));

