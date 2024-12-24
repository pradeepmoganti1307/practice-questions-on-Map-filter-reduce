const person = {
  name: null,
  age: null,
  occupation: null,
  place: null,
};

const rahul = { ...person };
rahul.name = "rahul";
person.age = 100;
console.log(rahul, person);

// const rahul = person;
// rahul.name = "rahul";
// person.age = 100;
// console.log(rahul, person);
