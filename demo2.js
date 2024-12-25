const objects = [
  { name: "pradeep", favcolor: "black" },
  { name: "moganti", favcolor: "white" },
];

const occurencesByKey = (objects, key) => {
  const valuesOfKeys = objects.map((object) => object[key]);
  return valuesOfKeys.reduce(occurences, {});
};

const occurences = (record, value) => {
  record[value] = record[value] || 0;
  record[value] += 1;
  return record;
};
