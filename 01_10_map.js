function vowels() {
  return "aeiouAEIOU";
}

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
  return [...string].reverse().join("");
};

const reversedStringsOf = function (strings) {
  return strings.map(reverseOf);
};

// double letters of ["cat", "dog", "bat"] => ["ccaat", "ddoog", "bbaatt"]
const repeat = function (times) {
  return function (string) {
    return string.repeat(times);
  };
}; //function name is not good to much generic.

const doubleEachCharOf = function (string) {
  return [...string].map(repeat(2)).join("");
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
  return email.split("@").at(-1);
};

const domainNamesOf = function (emails) {
  return emails.map(domainNameOf);
};

// split words in ["hello world", "goodbye moon"] => [["hello", "world"], ["goodbye", "moon"]]
const splitWordsOf = function (strings) {
  return strings.map((string) => string.split(" "));
};

// join arrays of [["a", "b"], ["c", "d"]] => ["ab", "cd"]
const joinedArraysOf = function (arrayOfArrays) {
  return arrayOfArrays.map((array) => array.join(""));
};

// repeat strings in ["hi", "bye"] => ["hihi", "byebye"]
const repeatedStringsOf = function (strings) {
  return strings.map(repeat(2));
};

//14) count vowels in ["apple", "banana", "grape"] => [2, 3, 2]

const countVowelIn = function (string) {
  return [...string].reduce(
    (counter, char) => (vowels.includes(char) ? counter + 1 : counter),
    0
  );
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
  return strings.map((string) => [...string].filter(withoutVowels).join(""));
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
  return strings.map((string) =>
    string
      .split(" ")
      .map((word) => reverseOf(word))
      .join(" ")
  );
};

// extract unique characters from ["apple", "banana", "grape"] => ["aple", "ban", "grape"]
// Maintain the order of their first appearance in each string
const insertIfNotPresent = (accumulator, element) => {
  if (accumulator.includes(element)) {
    return accumulator;
  }

  return [...accumulator, element];
};

const uniqueCharactersOf = function (strings) {
  return strings.map((string) =>
    [...string].reduce(insertIfNotPresent, []).join("")
  );
};

// generate ranges from [3, 5, 2] => [[0, 1, 2], [0, 1, 2, 3, 4], [0, 1]]
const rangesOf = function (numbers) {
  return numbers.map((number) => {});
};

// 21) capitalize first letters of ["hello world", "goodbye moon"] => ["Hello World", "Goodbye Moon"]
const capitalizedFirstLettersOf = function (strings) {
  return strings.map((string) => string.at(0).toUpperCase() + string.slice(1));
};

// find word lengths in ["apple pie", "banana split"] => [[5, 3], [6, 5]]
const wordLengthsOf = function (strings) {
  return strings.map((string) => string.split(" ").map((word) => word.length));
};

//23 flatten nested arrays of [[1, [2, 3]], [4, [5, 6]]] => [[1, 2, 3], [4, 5, 6]]
const flattenedArraysOf = function (arrays) {
  return arrays.map((array) => array.flat(Infinity));
};

// sort letters in ["cat", "bat", "rat"] alphabetically => ["act", "abt", "art"]
const sortedLettersOf = function (strings) {
  return strings.map((string) => [...string].sort().join(""));
};

//25 wrap strings in brackets ["apple", "banana"] => ["[apple]", "[banana]"]
const wrappedStringsOf = function (strings) {
  return strings.map((string) => "[" + string + "]");
};

//26 extract names from [{ name: "Alice" }, { name: "Bob" }] => ["Alice", "Bob"]
const extractNames = function (objects) {
  return objects.map((object) => object.name);
};

// extract ages from [{ age: 25 }, { age: 30 }] => [25, 30]
const extractAges = function (objects) {
  return objects.map((object) => object.age);
};

//28 extract the first letters of names from [{ name: "Alice" }, { name: "Bob" }] => ["A", "B"]
const firstLettersOfNames = function (objects) {
  return objects.map((object) => object.name.at(0));
};

//29) calculate areas from [{ width: 2, height: 3 }, { width: 4, height: 5 }] => [6, 20]
const calculateAreas = function (rectangles) {
  return rectangles.map((rectangle) => rectangle.width * rectangle.height);
};

//30) extract boolean flags from [{ active: true }, { active: false }] => [true, false]
const extractFlags = function (objects) {
  return objects.map((object) => object.active);
};

// concatenate first and last names from [{ firstName: "Alice", lastName: "Smith" }, { firstName: "Bob", lastName: "Brown" }] => ["Alice Smith", "Bob Brown"]
const fullNames = function (objects) {
  return objects.map((object) => object.firstName + " " + object.lastName);
};

// calculate total prices from [{ price: 10, quantity: 2 }, { price: 5, quantity: 4 }] => [20, 20]
// (price * quantity)
const totalPrices = function (objects) {
  return objects.map((object) => object.price * object.quantity);
};

// determine if a person is an adult from [{ name: "Alice", age: 17 }, { name: "Bob", age: 22 }] => [false, true]
// (age >= 18)
const isAdult = function (objects) {
  return objects.map((object) => object.age >= 18);
};

//34 create abbreviations from [{ city: "New York", country: "USA" }, { city: "Los Angeles", country: "USA" }] => ["NY, USA", "LA, USA"]
const abbreviations = function (objects) {
  return objects.map((object) =>
    Object.values(object).map((value) =>
      [...value]
        .filter((char) => char === char.toUpperCase() && char !== " ")
        .flat(Infinity)
        .join("")
    )
  );
};

//35 extract scores for math tests from [{ name: "Alice", scores: { math: 90, english: 85 } }, { name: "Bob", scores: { math: 80, english: 75 } }] => [90, 80]
const mathScores = (objects) => objects.map(({ scores }) => scores.math);

//36// extract coordinates from [{ x: 1, y: 2 }, { x: 3, y: 4 }] => [[1, 2], [3, 4]]
const extractCoordinates = (objects) =>
  objects.map((object) => Object.values(object));

//37// extract full name and age from [{ firstName: "Alice", lastName: "Smith", age: 25 }, { firstName: "Bob", lastName: "Brown", age: 30 }] => [["Alice Smith", 25], ["Bob Brown", 30]]
const fullNameAndAge = (objects) => {
  return objects.map(({ firstName, lastName, age }) => [
    firstName + " " + lastName,
    age,
  ]);
};

//38// extract scores from [{ name: "Alice", scores: { math: 90, english: 85 } }, { name: "Bob", scores: { math: 80, english: 75 } }] => [[90, 85], [80, 75]]
const extractScores = (objects) =>
  objects.map(({ scores }) => Object.values(scores));

//39//// extract key-value pairs from [{ key: "a", value: 1 }, { key: "b", value: 2 }] => [["a", 1], ["b", 2]]
const keyValuePairs = (objects) =>
  objects.map((object) => Object.values(object));

//40
// split full names into first and last names from [{ name: "Alice Smith" }, { name: "Bob Brown" }] => [["Alice", "Smith"], ["Bob", "Brown"]]
const splitFullNames = (objects) => objects.map(({ name }) => name.split(" "));

//41// normalize scores so they fall between 0 and 1 based on the max score from [{ name: "Alice", score: 80 }, { name: "Bob", score: 100 }] => [0.8, 1]
const normalizeScores = (objects) => objects.map(({ score }) => score / 100);

//42// calculate percentage contribution of each number in [10, 20, 30] (relative to the total sum) => [16.67, 33.33, 50]
const add = (a, b) => a + b;
const sumOfnumbers = (numbers) => numbers.reduce(add, 0);

const percentageContributions = (numbers) => {
  const total = sumOfnumbers(numbers);
  return numbers.map((number) => (number * 100) / total);
};

//43 subtract the smallest number from each number in [3, 8, 1] => [2, 7, 0]
const subtractMin = function (numbers) {
  const smallestNum = Math.min(...numbers);
  return numbers.map((number) => number - smallestNum);
};

const sortObjectsByKey = (objects, key) =>
  objects.sort((object1, object2) => object2[key] - object1[key]);

//44 calculate ranks (1-based, descending) for scores in [{ name: "Alice", score: 80 }, { name: "Bob", score: 100 }, { name: "Charlie", score: 90 }] => [3, 1, 2]
const calculateRanks = function (objects) {
  const sortedScores = sortObjectsByKey(objects, "scores");
};

//45// normalize strings by the longest string length in ["cat", "elephant", "dog"] => ["cat    ", "elephant", "dog    "]
// (pad with spaces to match the longest length)

const bigWord = (word, longestWord) =>
  longestWord.length > word.length ? longestWord : word;

const normalizeStringLengths = function (strings) {
  const longestWord = strings.reduce(bigWord, "");
  return strings.map((string) => string.padEnd(longestWord.length));
};

//46// normalize strings by centering them based on the longest string length in ["cat", "elephant", "dog"] => ["  cat   ", "elephant", "  dog   "]
// (pad with spaces to justify to the center)
const centerJustifyStrings = function (strings) {
  return;
};

//47/// scale all numbers proportionally so the largest number becomes 100 in [20, 50, 80] => [25, 62.5, 100]
const scaleToMax100 = function (numbers) {
  const scalePercentage =
    ((100 - Math.max(...numbers)) * 100) / Math.max(...numbers) / 100;

  return numbers.map((number) => scalePercentage * number + number);
};

//48
// map each number to the difference between it and the average of the array in [10, 20, 30] => [-10, 0, 10]
const differencesFromMean = function (numbers) {
  const totalsum = sumOfnumbers(numbers);
  const average = totalsum / numbers.length;
  return numbers.map((number) => number - average);
};

const occurencesByKey = (objects, key) => {
  const valuesOfKeys = objects.map((object) => object[key]);
  return valuesOfKeys.reduce(occurences, {});
};

const occurences = (record, value) => {
  record[value] = record[value] || 0;
  record[value] += 1;
  return record;
};

//49
// map each string to its frequency in ["apple", "banana", "apple", "apple", "banana"] => [3, 2, 3, 3, 2]
const stringFrequencies = function (strings) {
  const object = strings.map((string) => ({ name: string }));
  const frequency = occurencesByKey(object, "name");
  return strings.map((string) => frequency[string]);
};

//50 mark the largest number in an array as true, others as false in [1, 3, 2] => [false, true, false]
const markLargestNumber = function (numbers) {
  const longestNum = Math.max(...numbers);
  return numbers.map((number) => number === longestNum);
};

// normalize scores based on a curve: first find the max score, then subtract the mean, and scale the results to a range of 0-100 in [{ name: "Alice", score: 80 }, { name: "Bob", score: 100 }, { name: "Charlie", score: 90 }] => [60, 100, 80]
// Steps: Find max score, calculate mean, normalize each score.
const normalizeWithCurve = function (objects) {};
