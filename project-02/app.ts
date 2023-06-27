/**
 * Interface describe the structure of an object
 */

// type AddFn = (a: number, b: number) => number;

interface AddFn {
  (a: number, b: number): number;
}

let add: AddFn;

add = (n1: number, n2: number) => {
  return n1 + n2;
};

interface Named {
  readonly name?: string;
  // optional properties
  outputName?: string;
}

interface Greetable extends Named {
  greet(phrase: string): void;
}

class Person implements Greetable {
  name?: string;

  constructor(n?: string) {
    if (n) {
      this.name = n;
    }
  }
  greet(phrase: string): void {
    if (this.name) {
      console.log(phrase + " " + this.name);
    } else {
      console.log("Hi");
    }
  }
}

let user1: Greetable;

user1 = new Person();

// // read only error
// user1.name = "New";

user1.greet("Hi");

console.log({ user1 });
