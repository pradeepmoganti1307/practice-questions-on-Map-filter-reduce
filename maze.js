const arr = "///\\\\";
const arr2 = "\\\\\\///";
const arr3 = "///\\\\";

const mazez = [...arr, ...arr2, ...arr3];
const mazez2 = [...arr2, ...arr, ...arr3];
const mazez3 = [...arr3, ...arr, ...arr2];
const maze = [mazez, mazez2, mazez3].map((array) => console.log(...array));
