// Decorators

function Logger(logString: string) {
  return function (constructor: Function, t: object) {
    console.log(logString);
    console.log(constructor, t);
  };
}

@Logger("LOGGING - PERSON")
class Person {
  name = "Max";

  constructor() {
    console.log("Creating person object...");
  }
}

const person = new Person();

console.log(person);
