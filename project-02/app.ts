class Department {
  name: string;

  constructor(n: string) {
    this.name = n;
  }
}

const account = new Department("Accounting");

console.log({ account });
