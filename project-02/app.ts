class Department {
  // private readonly id: string;
  private employees: string[] = [];

  constructor(private readonly id: string, public name: string) {
    this.id = id;
    this.name = name;
  }

  describe(this: Department) {
    console.log("Department " + this.id + ": " + this.name);
  }

  addEmployee(employee: string) {
    // this.id = "d3"; // error case read only value
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

const accounting = new Department("id1", "Accounting");

accounting.addEmployee("Max");
accounting.addEmployee("Man");

// issue case private variable
// accounting.employees[2] = "Ann";

accounting.describe();
accounting.printEmployeeInformation();
