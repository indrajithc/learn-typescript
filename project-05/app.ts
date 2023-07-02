// Decorators

function Logger(logString: string) {
  console.log("LOGGER FACTORY");
  return function (constructor: Function, t: object) {
    console.log(logString);
    console.log(constructor, t);
  };
}

function WithTemplate(template: string, hookId: string) {
  console.log("TEMPLATE FACTORY");
  return function (constructor: any, _: object) {
    console.log("Rendering template");
    const hookEl = document.getElementById(hookId);
    console.log(constructor);
    const p = new constructor();
    if (hookEl) {
      hookEl.innerHTML = template;
      hookEl.querySelector("h1")!.textContent = p.name;
    }
  };
}

@Logger("LOGGING - PERSON")
@WithTemplate("<h1>My Person Object</h1>", "app")
class Person {
  name = "Max";

  constructor() {
    console.log("Creating person object...");
  }
}

const person = new Person();

console.log(person);

// ---

function Log(_: any, propertyName: any) {
  console.log("Property decorator!");
  console.log(propertyName);
}

function Log2(target: any, t: any) {
  const { name, description } = t;
  console.log("Accessor decorator!");
  console.log(target);
  console.log(name);
  console.log(description);
}

function Log3(target: any, t: any) {
  const { name, description } = t;
  console.log({ t });
  console.log("Method decorator!");
  console.log(target);
  console.log(name);
  console.log(description);
}

function Log4(target: any, t: any) {
  const { name, position } = t;
  console.log("Method decorator!");
  console.log(target);
  console.log(name);
  console.log(position);
}
class Product {
  @Log
  title: string;
  private _price: number;

  @Log2
  set price(val: number) {
    if (val > 0) {
      this._price = val;
    } else {
      throw new Error("Invalid price - should be positive!");
    }
  }

  constructor(t: string, p: number) {
    this.title = t;
    this._price = p;
  }

  @Log3
  getPriceWithTax(tax: number) {
    return this._price * (1 + tax);
  }
}
