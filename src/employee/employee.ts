// employee.ts
abstract class Employee {
  // Protected properties for employee's name, age, and salary.
  public name: string;
  protected age: number;
  protected salary: number;

  constructor(name: string, age: number, salary: number) {
    this.name = name;
    this.age = age;
    this.salary = salary;
  }

  abstract work(): void;
  getInfo(): string;
  getInfo(showSalary: boolean): string; // overload function with parameter
  getInfo(showSalary?: boolean): string {
    if (showSalary === undefined) {
      //Return basic info
      return `${this.name}, Age: ${this.age}`;
    } else {
      //If true, return full info including salary
      return `${this.name}, Age: ${this.age}, Salary: $${this.salary}`;
    }
  }
}

export default Employee;
