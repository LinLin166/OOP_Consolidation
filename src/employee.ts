abstract class Employee {
    protected name: string;
    protected age: number;
    protected salary: number;
  
    constructor(name: string, age: number, salary:number) {
      this.name = name;
      this.age = age;
      this.salary = salary;
    }
  
    abstract work(): void;
  
    getInfo(): string {
      return `${this.name}, Age: ${this.age}, Salary: $${this.salary}`;
    }
  }
  
  export default Employee;
  