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
  employment: {
    status: true,
  },
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
  hobbies: [
    "cooking",
    "experiments with Italian recipes",
    "chessplaying",
    "reading historical fiction",
    "rose garden",
  ],
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
  employment: {
    status: true,
  },
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
      age: null,
      vaccinated: true,
      fullyVaccinated: null,
      hobbies: ["mimics owner voice", "knows over 20 phrases"],
    },
  ],
  employment: {
    status: null,
  },
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
  occupation: "professional dancer",
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
  employment: {
    status: false,
  },
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

const numOfEmployers = (people) => {
  const employer = people.filter((person) => person.employment.status);
  return employer.length;
};

const peopleOwnedCar = (people) => {
  const carOwners = people.filter(
    (person) => person.transport.vehical === "car"
  );
  return carOwners.length;
};

const fullyVaccinatedpets = (people) => {
  const petsFullyVaccinated = people.reduce(
    (counter, person) =>
      person.pets.filter((pet) => pet.fullyVaccinated).length + counter,
    0
  );

  return petsFullyVaccinated;
};

const testData = (Qn, Fn) => {
  console.log("Qn", Qn);
  console.log("Ans.", Fn(people));
};

const questions = () => {
  testData("1. How many individuals are currently employed?", numOfEmployers);
  testData("2. How many people own a car?", peopleOwnedCar);
  testData("3. How many pets are fully vaccinated?", fullyVaccinatedpets);
};

questions();
