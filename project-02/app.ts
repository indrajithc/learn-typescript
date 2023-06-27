class Department {
  // private readonly id: string;
  protected employees: string[] = [];

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

accounting.addReport("Something went wrong...");

console.log(accounting.mostRecentReport);

accounting.addEmployee("Max");
accounting.addEmployee("Manu");

accounting.printReports();
accounting.printEmployeeInformation();
