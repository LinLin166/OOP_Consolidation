import Employee from './employee';

class Manager extends Employee {
    private department: string;

    constructor(name: string, age: number, salary: number, department: string) {
    super(name, age, salary); // Inherit from Employee class
    this.department = department;
     }
     
//Polymorphism
    work(): void {
    console.log(`${this.name} is managing the ${this.department} department.`);
  }
  
    getDepartment(): string {
      return this.department;
    }
}

export default Manager;
