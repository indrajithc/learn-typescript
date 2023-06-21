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
  name: "Max",
  age: 40,
};

const copiedPerson = { ...person };
