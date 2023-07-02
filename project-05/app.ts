// Decorators

function Logger(constructor: Function, t: object) {
  console.log("Logging ....");
  console.log(constructor, t);
}

@Logger
class Person {
  name = "Max";

  constructor() {
    console.log("Creating person object...");
  }
}

const person = new Person();

console.log(person);
