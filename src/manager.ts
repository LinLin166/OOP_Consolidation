//manager.ts

import Employee from "./employee";

class Manager extends Employee {
  private department: string;

  constructor(name: string, age: number, salary: number, department: string) {
    super(name, age, salary); // Inherit from Employee class
    this.department = department;
  }

  // Polymorphism: Overriding the abstract work() method from Employee class.
  work(): void {
    console.log(`${this.name} is managing the ${this.department} department.`);
  }

  getDepartment(): string;

  //overload function with parameter
  getDepartment(includeDetails: boolean): string;
  getDepartment(includeDetails?: boolean): string {
    if (includeDetails) {
      return `${this.name} is managing the ${this.department} department with a salary of $${this.salary}.`;
    } else {
      return this.department;
    }
  }
}

export default Manager;
