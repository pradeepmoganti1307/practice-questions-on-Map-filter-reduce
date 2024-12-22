// even numbers [1, 2, 3, 4, 5] => [2, 4]
const isEven = function (number) {
  return (number & 1) === 0;
};

const filterEvenNumbers = function (numbers) {
  return numbers.filter(isEven);
};

// words with more than 5 letters ["apple", "banana", "kiwi", "grape"] => ["banana"]
const isGreaterThan = function (number1, number2) {
  return number1 > number2;
};

const filterLongWords = function (words) {
  return words.filter((word) => isGreaterThan(word.length, 5));
};

// people older than 30 [{name: "Alice", age: 25}, {name: "Bob", age: 35}] => [{name: "Bob", age: 35}]
const filterAdults = function (people) {
  return people.filter((person) => isGreaterThan(person.age, 30));
};

// active users [{username: "alice", active: true}, {username: "bob", active: false}] => [{username: "alice", active: true}]
const filterActiveUsers = function (users) {
  return users.filter((user) => user.active);
};

// numbers greater than 10 [5, 12, 7, 18, 3] => [12, 18]
const filterNumbersGreaterThanTen = function (numbers) {
  return numbers.filter((number) => isGreaterThan(number, 10));
};

// books with more than 200 pages [{title: "Book 1", pages: 150}, {title: "Book 2", pages: 250}] => [{title: "Book 2", pages: 250}]
const filterLongBooks = function (books) {
  return books.filter((book) => isGreaterThan(book.pages, 200));
};

// users with incomplete profiles [{username: "alice", profileComplete: true}, {username: "bob", profileComplete: false}] => [{username: "bob", profileComplete: false}]
const filterIncompleteProfiles = function (users) {
  return users.filter((user) => user.profileComplete);
};

// students with grades above 80 [{name: "John", grade: 75}, {name: "Jane", grade: 85}] => [{name: "Jane", grade: 85}]
const filterHighGrades = function (students) {
  return students.filter((student) => isGreaterThan(student.grade, 80));
};

// products that are in stock [{product: "apple", inStock: true}, {product: "banana", inStock: false}] => [{product: "apple", inStock: true}]
const filterInStockProducts = function (products) {
  return products.filter((product) => product.inStock);
};

