/**
 * Interface describe the structure of an object
 */

interface Greetable {
  readonly name: string;

  greet(phrase: string): void;
}

class Person implements Greetable {
  name: string;

  constructor(n: string) {
    this.name = n;
  }
  greet(phrase: string): void {
    console.log(phrase + " " + this.name);
  }
}

let user1: Greetable;

user1 = new Person("Max");

// // read only error
// user1.name = "New";

user1.greet("Hi");
