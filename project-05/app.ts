// Decorators

function Logger(logString: string) {
  return function (constructor: Function, t: object) {
    console.log(logString);
    console.log(constructor, t);
  };
}

function WithTemplate(template: string, hookId: string) {
  return function (_: Function, __: object) {
    const hookEl = document.getElementById(hookId);
    if (hookEl) {
      hookEl.innerHTML = template;
    }
  };
}

// @Logger("LOGGING - PERSON")
@WithTemplate("<h1>My Person Object</h1>", "app")
class Person {
  name = "Max";

  constructor() {
    console.log("Creating person object...");
  }
}

const person = new Person();

console.log(person);
