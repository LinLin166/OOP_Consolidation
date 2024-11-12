// Developer.ts
import Employee from './employee';

class Developer extends Employee {
  private programmingLanguage: string;

  constructor(name: string, age: number, salary: number, programmingLanguage: string) {
    super(name, age, salary); //Inherit from Employee
    this.programmingLanguage = programmingLanguage;
  }

  work(): void {
    console.log(`${this.name} is coding in ${this.programmingLanguage}.`);
  }

  getProgrammingLanguage(): string {
    return this.programmingLanguage;
  }
}

export default Developer;
