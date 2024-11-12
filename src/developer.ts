// developer.ts
import Employee from "./employee";

class Developer extends Employee {
  //Encapsulation: Declare private property for programming language name
  private programmingLanguage: string;

  constructor(
    name: string,
    age: number,
    salary: number,
    programmingLanguage: string
  ) {
    super(name, age, salary); //Inherit from Employee
    this.programmingLanguage = programmingLanguage;
  }

  // Polymorphism: Overriding the abstract work() method from Employee class.
  work(): void {
    console.log(`${this.name} is coding in ${this.programmingLanguage}.`);
  }

  getProgrammingLanguage(): string {
    return this.programmingLanguage;
  }
}

export default Developer;
