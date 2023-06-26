class Department {
  name: string;

  constructor(n: string) {
    this.name = n;
  }

  describe() {
    console.log("Department: " + this.name);
  }
}

const accounting = new Department("Accounting");

accounting.describe();

// error case
// const accountingCopy = { describe: accounting.describe };
// accountingCopy.describe();
// // Department: undefined
