// even numbers [1, 2, 3, 4, 5] => [2, 4]
const isEven = function (number) {
  return (number & 1) === 0;
};

const filterEvenNumbers = function (numbers) {
  return numbers.filter(isEven);
};

console.log('01.even numbers [1, 2, 3, 4, 5] => [2, 4], output :', filterEvenNumbers([1, 2, 3, 4, 5]));
console.log('02.even numbers [1, 5] => [], output :', filterEvenNumbers([1, 5]));