class Department {
  // private readonly id: string;
  protected employees: string[] = [];

  constructor(private readonly id: string, public name: string) {
    this.id = id;
    this.name = name;
  }

  static createEmployee(name: string) {
    return { name };
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
  private reports: string[] = [];
  constructor(id: string, public admins: string[]) {
    super(id, "IT");
    this.admins = admins;
  }

  addReports(text: string) {
    this.reports.push(text);
  }

  printReports() {
    console.log(this.reports);
  }
}

class AccountingDepartment extends Department {
  private latestReport: string;

  get mostRecentReport() {
    if (this.latestReport) {
      return this.latestReport;
    }
    throw new Error("No latest report found");
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error("Please pass a valid value");
    }
    this.addReport(value);
  }

  constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
    this.latestReport = reports[0];
  }

  addEmployee(name: string): void {
    if (name === "Max") {
      return;
    }
    this.employees.push(name);
  }

  addReport(text: string) {
    this.reports.push(text);
    this.latestReport = text;
  }

  printReports() {
    console.log(this.reports);
  }
}

const accounting = new AccountingDepartment("d3", []);

accounting.mostRecentReport = "Valid";

console.log(accounting.mostRecentReport);
accounting.addReport("Something went wrong...");

accounting.addEmployee("Max");
accounting.addEmployee("Manu");

accounting.printReports();
accounting.printEmployeeInformation();

const employee1 = Department.createEmployee("Max");
console.log({ employee1 });
