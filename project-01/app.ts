// error functions

const addTwoNumbers = (n1: number, n2: number = 10) => {
  return n1 + n2;
};

console.log(addTwoNumbers(3, 4));

// default args example
console.log(addTwoNumbers(3));

// const printOutput = (output: string | number) => console.log(output);
const printOutput: (output: string | number) => void = (output) =>
  console.log(output);

printOutput(addTwoNumbers(3, 44));

const button = document.querySelector("button");

if (button) {
  button.addEventListener("click", (event) => console.log(event));
}

const hobbies = ["Sports", "Cooking"];
const activeHobbies = ["Hiking"];

activeHobbies.push(...hobbies);

const person = {
  firstName: "Max",
  age: 40,
};

const copiedPerson = { ...person };

console.log(copiedPerson);

const addAll = (...numbers: number[]) =>
  numbers.reduce((curResult, curValue) => curResult + curValue, 0);

const addNumbers = addAll(1, 3, 4, 5, 6, 7);
console.log({ addNumbers });

const [hobby1, hobby2, ...remailingHobbies] = hobbies;
console.log(hobbies, hobby1, hobby2);

const { firstName: userName, age } = person;

console.log({ userName, age });
