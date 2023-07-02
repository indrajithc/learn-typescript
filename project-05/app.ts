// Decorators

function Logger(logString: string) {
  return function (constructor: Function, t: object) {
    console.log(logString);
    console.log(constructor, t);
  };
}

function WithTemplate(template: string, hookId: string) {
  return function (constructor: any, _: object) {
    const hookEl = document.getElementById(hookId);
    console.log(constructor);
    const p = new constructor();
    if (hookEl) {
      hookEl.innerHTML = template;
      hookEl.querySelector("h1")!.textContent = p.name;
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
