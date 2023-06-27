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

class ITDepartment extends Department {
  constructor(id: string, public admins: string[]) {
    super(id, "IT");
    this.admins = admins;
  }
}

const accounting = new ITDepartment("id1", ["Max"]);

accounting.addEmployee("Max");
accounting.addEmployee("Man");

// issue case private variable
// accounting.employees[2] = "Ann";

accounting.describe();
accounting.printEmployeeInformation();
