let euroCountries = [
  "Austria",
  "France",
  "Latvia",
  "Portugal",
  "Belgium",
  "Germany",
  "Lithuania",
];
let asianCountries = [
  "United Arab Emirates",
  "Vietnam",
  "Tajikistan",
  "Israel",
];

console.log([...asianCountries, ...euroCountries]);

let animals = ["Cats", "Dogs", "Cows", "Tiger"];
let flower = ["Rose", "Lily", "Tulip", "Orchid"];
let togetherArray = [...animals, ...flower];
console.log(togetherArray);

let newArray = [...animals];
console.log(newArray);

let numberArr = [2, 1, 2, 6, -2];
console.log(Math.max(...numberArr));

console.log(Math.min(...numberArr));

const person = { name: "John" };
const job = { role: "Teacher" };

let clone = { ...person };
let employee = { ...person, ...job };
console.log(employee);
