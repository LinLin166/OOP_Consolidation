// developer.ts
import Employee from "./employee";

class Developer extends Employee {
  //Encapsulation: Declare private property for programming language name
  private _programmingLanguage: string;

  constructor(
    name: string,
    age: number,
    salary: number,
    programmingLanguage: string
  ) {
    super(name, age, salary); //Inherit from Employee
    this._programmingLanguage = programmingLanguage;
  }

  // Polymorphism: Overriding the abstract work() method from Employee class.
  work(): void {
    console.log(`${this.name} is coding in ${this._programmingLanguage}.`);
  }

  getProgrammingLanguage(): string {
    return this._programmingLanguage;
  }
}

export default Developer;
