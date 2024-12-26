const person1 = {
  name: "rahul",
  age: null,
  occupation: "software engineer",
  place: "pune",
  hobbies: ["chessplaying", "gardening"],
  pets: [
    {
      breed: "golden retriever",
      name: "max",
      age: 4,
      vaccinated: true,
      fullyVaccinated: true,
      hobbies: ["playing fetch in the park"],
    },
  ],
  transport: {
    vehical: "car",
    purpose: "weekend trips",
  },
  education: {
    major: "computer science",
    minor: null,
  },
};

const person3 = {
  name: "Ramesh",
  age: 45,
  occupation: "business owner",
  place: "jaipur",
  hobbies: ["reading historical fiction", "rose gardening"],
  pets: [
    {
      breed: "persian cat",
      name: "bella",
      age: 3,
      vaccinated: true,
      fullyVaccinated: true,
      hobbies: ["love lounging in sun"],
    },
    {
      breed: "persian cat",
      name: "leo",
      age: 3,
      vaccinated: true,
      fullyVaccinated: true,
      hobbies: ["love lounging in sun"],
    },
  ],
  transport: {
    vehical: null,
    purpose: null,
  },
  education: {
    major: null,
    minor: null,
  },
};

const person2 = {
  name: "Ananya",
  age: 30,
  occupation: null,
  place: "bangalore",
  hobbies: ["cooking", "experiments with Italian recipes"],
  pets: [
    {
      breed: "parrot",
      name: "kiwi",
      age: 3,
      vaccinated: true,
      fullyVaccinated: null,
      hobbies: [],
    },
  ],
  transport: {
    vehical: "public transport",
    purpose: "general day to day travelling",
  },
  education: {
    major: "computer science",
    minor: "graphic Design",
  },
};

const person4 = {
  name: "Kavya",
  age: 28,
  occupation: null,
  place: "chennai",
  hobbies: ["reading modern fantasy novels", "binge-watching sci-fi shows"],
  pets: [
    {
      breed: "rabbit",
      name: "Snowy",
      age: 2,
      vaccinated: true,
      fullyVaccinated: null,
      hobbies: ["hopping around her backyard", "nibbling on carrots"],
    },
  ],
  transport: {
    vehical: "public transport",
    purpose: null,
  },
  education: {
    major: null,
    minor: null,
  },
};

const people = [person1, person2, person3, person4];

//=============== QNA =====================//

const numOfEmployers = (people) =>
  people.filter(({ occupation }) => occupation !== null).length;

const peopleOwnedCar = (people) =>
  people.filter(({ transport }) => transport.vehical === "car").length;

const fullyVaccinatedPetsOfAPerson = (pets) =>
  pets.filter((pet) => pet.fullyVaccinated).length;

const fullyVaccinatedPets = (people) => {
  return people.reduce(
    (accumulator, { pets }) => fullyVaccinatedPetsOfAPerson(pets) + accumulator,
    0
  );
};

const namesAndTypesOfPets = (people) =>
  people.flatMap(({ pets }) => pets.map((pet) => [pet.name, pet.breed]));

const citiesOfPeople = (people) => people.map(({ place }) => place);

const hobbiesSharedAcross = (people) => {
  const hobbies = people.flatMap(({ hobbies }) => hobbies);
  return [hobbies.length, ...hobbies];
};

const unemployersPets = (people) => {
  return people
    .filter(({ occupation }) => occupation !== null)
    .reduce((accumulator, { pets }) => pets.length + accumulator, 0);
};

const averageOfAges = (people) => {
  const sumOfAges = people.reduce(
    (accumulator, { age }) => age + accumulator,
    0
  );

  return sumOfAges / people.length;
};

const csPeopleAndtheirPets = (people) => {
  const graduates = people.filter(
    ({ education }) => education.major === "computer science"
  );

  const graduatesWhoHadPets = graduates.filter(({ pets }) => !!pets.length);

  return [graduates.length, graduatesWhoHadPets.length];
};

const peopleWithMoreThan1pet = (people) => {
  return people.filter(({ pets }) => pets.length > 1).length;
};

const petsWithHobbies = (people) => {
  return people.reduce(
    (accumulator, { pets }) =>
      pets.filter(({ hobbies }) => !!hobbies.length).length + accumulator,
    0
  );
};

const petsOfPeopleInBengaluruChennai = (people) => {
  const places = ["bangalore", "chennai"];
  const peopleInBengaluruChennai = people.filter(({ place }) =>
    places.includes(place)
  );

  return peopleInBengaluruChennai.flatMap(({ pets }) =>
    pets.map(({ name }) => name)
  );
};

const vaccinatedPetsOfCarFreePeople = (people) => {
  const vaccinatedPets = people
    .filter(({ transport }) => transport.vehical !== "car")
    .flatMap(({ pets }) => pets)
    .filter(({ vaccinated }) => vaccinated);

  return vaccinatedPets.length;
};

const isGreater = (number1, number2) => number1 > number2;

const peopleWithMoreThan2hobbies = (people) => {
  const peopleHadMoreThan2Hobbies = people.filter(({ hobbies }) =>
    isGreater(hobbies.length, 2)
  );

  return peopleHadMoreThan2Hobbies.length;
};

const sortObjectsByKey = (objects, key) =>
  objects.sort((object1, object2) => object1[key] - object2[key]);

const youngestPet = (people) => {
  const petsAndAges = people.flatMap(({ pets }) =>
    pets.map(({ name, age }) => ({ name, age }))
  );

  return sortObjectsByKey(petsAndAges, "age")[0]["name"];
};

const citizensLiveInCitiesStartsWithB = (people) => {
  return people
    .filter(({ place }) => place.startsWith("b"))
    .map(({ name }) => name);
};

const peopleWithoutPets = (people) => {
  return people.filter(({ pets }) => !pets.length).map(({ name }) => name);
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

const commonPets = (people) => {
  const petsOfPeople = people.flatMap(({ pets }) => pets.map((pet) => pet));
  const occurencesOfPets = occurencesByKey(petsOfPeople, "breed");
  const occurencesWithKeys = Object.entries(occurencesOfPets).map((array) => ({
    breed: array[0],
    occurence: array[1],
  }));

  return sortObjectsByKey(occurencesWithKeys, "occurence").at(-1)["breed"];
};

const testData = (Qn, Fn) => {
  console.log("Qn", Qn);
  console.log("Ans.", Fn(people));
};

const questions = () => {
  testData("1. How many individuals are currently employed?", numOfEmployers);
  testData("2. How many people own a car?", peopleOwnedCar);
  testData("3. How many pets are fully vaccinated?", fullyVaccinatedPets);
  testData(
    "4. What are the names of all the pets, and what type of animal is each?",
    namesAndTypesOfPets
  );
  testData("5. Which cities do the individuals live in?", citiesOfPeople);
  testData(
    "6. How many hobbies are shared across the group? What are they?",
    hobbiesSharedAcross
  );
  testData(
    "7. How many pets belong to people who are currently unemployed?",
    unemployersPets
  );
  testData(
    "8. What is the average age of the individuals mentioned in the passage?",
    averageOfAges
  );
  testData(
    "9. How many individuals have studied computer science, and how many of them have pets?",
    csPeopleAndtheirPets
  );

  testData(
    "10. How many individuals own more than one pet?",
    peopleWithMoreThan1pet
  );
  testData(
    "11. Which pets are associated with specific favorite activities?",
    petsWithHobbies
  );
  testData(
    "12. What are the names of all animals that belong to people who live in Bangalore or Chennai?",
    petsOfPeopleInBengaluruChennai
  );
  testData(
    "13. How many vaccinated pets belong to people who do not own a car?",
    vaccinatedPetsOfCarFreePeople
  );
  testData(
    "15. How many individuals have more than two hobbies?",
    peopleWithMoreThan2hobbies
  );
  testData("17. Which pet is the youngest, and what is its name?", youngestPet);
  testData(
    "19. How many individuals live in cities starting with the letter B",
    citizensLiveInCitiesStartsWithB
  );
  testData("20. Which individuals do not own any pets?", peopleWithoutPets);
  testData(
    "14. What is the most common type of pet among the group?",
    commonPets
  );
};

questions();
